"use client";

import { useEffect, useRef, } from "react";

export default function GravityParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const button = buttonRef.current;
        if (!canvas || !button) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];

        // ==========================================
        // 🎛️ SETTINGS
        // ==========================================
        const PARTICLE_SIZE = 24;
        const COLLISION_RADIUS = 20; // Reduced from 30 so particles pack tightly together
        const GRAVITY = 0.7;
        const FRICTION = 0.94;

        const REPEL_STRENGTH = 12.0; // Increased to blast particles away faster
        const HOVER_RADIUS = 180; // Increased so it detects the cursor from further away

        const SPAWN_ON_CLICK = 1;
        const DELETE_ON_CLICK = 1;
        const EXPLOSION_FORCE = 25;
        // ==========================================

        const COLORS = ["#34164F"];

        const mouse = {
            x: -1000,
            y: -1000,
            radius: HOVER_RADIUS,
            isActive: false,
            isPressed: false,
        };

        // We will store the button's boundaries here
        const buttonBounds = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };

        const updateButtonBounds = () => {
            const rect = button.getBoundingClientRect();
            buttonBounds.left = rect.left;
            buttonBounds.right = rect.right;
            buttonBounds.top = rect.top;
            buttonBounds.bottom = rect.bottom;
        };

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            updateButtonBounds(); // Update bounds when screen resizes
        };
        setCanvasSize();

        const PARTICLE_COUNT = Math.min(1200, Math.floor((canvas.width * 150) / 1000));

        class Particle {
            x: number;
            y: number;
            oldX: number;
            oldY: number;
            angle: number;
            color: string;
            isStuck: boolean;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.oldX = x - (Math.random() - 0.5) * 8;
                this.oldY = y - (Math.random() - 0.5) * 8;
                this.angle = Math.random() * Math.PI;
                this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
                this.isStuck = false; // New property to track if it's on the button
            }

            update() {
                // If it's stuck on the button, but mouse hovers near it, un-stick it!
                if (this.isStuck && mouse.isActive) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        this.isStuck = false;
                    }
                }

                if (mouse.isActive && !this.isStuck) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius && dist > 0) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x += (dx / dist) * force * REPEL_STRENGTH;
                        this.y += (dy / dist) * force * REPEL_STRENGTH;
                    }
                }

                let vx = (this.x - this.oldX) * FRICTION;
                let vy = (this.y - this.oldY) * FRICTION;

                this.oldX = this.x;
                this.oldY = this.y;

                if (!this.isStuck) {
                    this.x += vx;
                    this.y += vy + GRAVITY;
                }

                const bounds = COLLISION_RADIUS;

                // Screen boundaries
                if (this.x < bounds) {
                    this.x = bounds;
                    this.oldX = this.x + vx * 0.3;
                } else if (this.x > canvas.width - bounds) {
                    this.x = canvas.width - bounds;
                    this.oldX = this.x + vx * 0.3;
                }

                if (this.y > canvas.height - bounds) {
                    this.y = canvas.height - bounds;
                    this.oldY = this.y + vy * 0.3;
                }

                // ==========================================
                // BUTTON COLLISION LOGIC
                // ==========================================
                // Check if the particle is within the horizontal bounds of the button
                if (this.x > buttonBounds.left && this.x < buttonBounds.right) {
                    // Check if the particle hits the TOP of the button
                    if (this.y + bounds > buttonBounds.top && this.oldY + bounds <= buttonBounds.top) {
                        this.y = buttonBounds.top - bounds;
                        this.oldY = this.y; // Remove vertical velocity
                        this.isStuck = true; // Stick it!
                    }
                    // Optional: Check if the particle hits the BOTTOM of the button and bounce it
                    else if (this.y - bounds < buttonBounds.bottom && this.oldY - bounds >= buttonBounds.bottom) {
                        this.y = buttonBounds.bottom + bounds;
                        this.oldY = this.y + vy * 0.5; // Bounce off the bottom
                    }
                }

                // Also check side collisions with the button so they don't fly through it horizontally
                if (this.y > buttonBounds.top && this.y < buttonBounds.bottom) {
                    if (this.x + bounds > buttonBounds.left && this.oldX + bounds <= buttonBounds.left) {
                        this.x = buttonBounds.left - bounds;
                        this.oldX = this.x + vx * 0.5;
                    } else if (this.x - bounds < buttonBounds.right && this.oldX - bounds >= buttonBounds.right) {
                        this.x = buttonBounds.right + bounds;
                        this.oldX = this.x + vx * 0.5;
                    }
                }
            }

            draw(context: CanvasRenderingContext2D) {
                context.save();
                context.translate(this.x, this.y);
                context.rotate(this.angle);

                // Draw Cube
                context.fillStyle = this.color;
                context.fillRect(-PARTICLE_SIZE / 2, -PARTICLE_SIZE / 2, PARTICLE_SIZE, PARTICLE_SIZE);

                // Draw "R" inside the cube
                context.fillStyle = "#F7B71D";
                context.font = `bold ${PARTICLE_SIZE * 0.75}px "Sora", sans-serif`;
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillText("R", 0, 1);

                context.restore();
            }
        }

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = canvas.height - Math.random() * canvas.height - 100;
                particles.push(new Particle(x, y));
            }
        };

        const handleCanvasClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            for (let i = 0; i < DELETE_ON_CLICK; i++) {
                if (particles.length > 0) {
                    const randomIndex = Math.floor(Math.random() * particles.length);
                    particles.splice(randomIndex, 1);
                }
            }

            for (let i = 0; i < SPAWN_ON_CLICK; i++) {
                const p = new Particle(clickX, clickY);
                const randomAngle = Math.random() * Math.PI * 2;
                const randomSpeed = Math.random() * EXPLOSION_FORCE;
                p.oldX = clickX - Math.cos(randomAngle) * randomSpeed;
                p.oldY = clickY - Math.sin(randomAngle) * randomSpeed;
                particles.push(p);
            }
        };

        const resolveCollisions = () => {
            const minDist = COLLISION_RADIUS * 2;
            particles.sort((a, b) => a.y - b.y);

            for (let iter = 0; iter < 4; iter++) {
                for (let i = 0; i < particles.length; i++) {
                    const p1 = particles[i];

                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dy = p2.y - p1.y;

                        if (dy > minDist) break;

                        const dx = p2.x - p1.x;
                        if (Math.abs(dx) > minDist) continue;

                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < minDist && dist > 0) {
                            const diff = minDist - dist;
                            const percent = (diff / dist) * 0.6;
                            const offsetX = dx * percent;
                            const offsetY = dy * percent;

                            p1.x -= offsetX;
                            p1.y -= offsetY;
                            p2.x += offsetX;
                            p2.y += offsetY;

                            // If a particle hits a stuck particle, it might become stuck too, creating a pile
                            if (p1.isStuck && !p2.isStuck && p2.y < p1.y) {
                                p2.isStuck = true;
                            } else if (p2.isStuck && !p1.isStuck && p1.y < p2.y) {
                                p1.isStuck = true;
                            }
                        }
                    }
                }
            }
        };

        let isHoveringButton = false;
        let tiltX = 0;
        let tiltY = 0;
        let spawnFrameCounter = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Handle directional explosion when button is hovered (tilted)
            if (isHoveringButton) {
                spawnFrameCounter++;
                if (spawnFrameCounter % 3 === 0) { // Fast burst while tilting
                    if (particles.length > 0) {
                        particles.splice(Math.floor(Math.random() * particles.length), 1);
                    }

                    const centerX = buttonBounds.left + (buttonBounds.right - buttonBounds.left) / 2;
                    const centerY = buttonBounds.top + (buttonBounds.bottom - buttonBounds.top) / 2;

                    // The tilt direction determines explosion angle
                    const dx = mouse.x - centerX;
                    const dy = mouse.y - centerY;
                    const angle = Math.atan2(dy, dx);

                    const p = new Particle(mouse.x, mouse.y); // Spawn where the mouse is (the tilted edge)

                    const spreadAngle = angle + (Math.random() - 0.5) * 1.5;
                    const speed = 12 + Math.random() * 18;

                    p.oldX = mouse.x - Math.cos(spreadAngle) * speed;
                    p.oldY = mouse.y - Math.sin(spreadAngle) * speed;

                    particles.push(p);
                }
            }
            // Handle continuous spawning when mouse is pressed (on canvas)
            else if (mouse.isPressed && mouse.isActive) {
                spawnFrameCounter++;
                // Wait ~10 frames before continuous spawning starts (prevents spam on single click)
                // Then spawn 1 particle every 4 frames
                if (spawnFrameCounter > 10 && spawnFrameCounter % 4 === 0) {
                    // Remove one random particle to keep count stable
                    if (particles.length > 0) {
                        particles.splice(Math.floor(Math.random() * particles.length), 1);
                    }

                    // Spawn one new particle
                    const p = new Particle(mouse.x, mouse.y);
                    const randomAngle = Math.random() * Math.PI * 2;
                    const randomSpeed = Math.random() * EXPLOSION_FORCE;
                    p.oldX = mouse.x - Math.cos(randomAngle) * randomSpeed;
                    p.oldY = mouse.y - Math.sin(randomAngle) * randomSpeed;
                    particles.push(p);
                }
            } else {
                spawnFrameCounter = 0;
            }

            particles.forEach((particle) => particle.update());
            resolveCollisions();
            particles.forEach((particle) => particle.draw(ctx));

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.isActive = true;

            if (button) {
                const btnRect = button.getBoundingClientRect();
                if (
                    e.clientX >= btnRect.left && e.clientX <= btnRect.right &&
                    e.clientY >= btnRect.top && e.clientY <= btnRect.bottom
                ) {
                    isHoveringButton = true;
                    const centerX = btnRect.width / 2;
                    const centerY = btnRect.height / 2;
                    const btnX = e.clientX - btnRect.left;
                    const btnY = e.clientY - btnRect.top;

                    tiltX = ((btnY - centerY) / centerY) * -20;
                    tiltY = ((btnX - centerX) / centerX) * 20;

                    button.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.1, 1.1, 1.1)`;
                } else {
                    isHoveringButton = false;
                    button.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                }
            }
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
            mouse.isPressed = false;
        };

        const handleMouseDown = (e: MouseEvent) => {
            mouse.isPressed = true;
            handleCanvasClick(e);
        };

        const handleMouseUp = () => {
            mouse.isPressed = false;
        };

        const handleResize = () => {
            setCanvasSize();
        };

        initParticles();
        animate();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("mousedown", handleMouseDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#13071C] flex items-center justify-center">

            <canvas
                ref={canvasRef}
                className="absolute inset-0 block w-full h-full cursor-crosshair z-10 pointer-events-auto"
            />

            <button
                ref={buttonRef}
                data-discover="true"
                style={{ transition: 'transform 0.1s ease-out' }}
                className="
                    relative z-20 flex items-center justify-center 
                    bg-[#F7B71D] text-white hover:bg-[#34164F] transition-colors font-black 
                    w-48 h-20 text-4xl shadow-[0_0_30px_rgba(247,183,29,0.2)]
                "
            >
                RAH
            </button>

        </div>
    );
}