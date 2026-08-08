"use client";

import { useEffect, useRef } from "react";

export default function GravityParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];

        const PARTICLE_SIZE = 8.5;
        const COLLISION_RADIUS = 13.5;
        const GRAVITY = 0.7;
        const FRICTION = 0.94;

        const COLORS = ["#5A606A", "#737A86", "#8F96A3", "#454A52"];

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 180,
            isActive: false,
        };

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const PARTICLE_COUNT = Math.min(2400, Math.floor((canvas.width * 240) / 1000));

        class Particle {
            x: number;
            y: number;
            oldX: number;
            oldY: number;
            angle: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.oldX = x - (Math.random() - 0.5) * 8;
                this.oldY = y - (Math.random() - 0.5) * 8;
                this.angle = Math.random() * Math.PI;
                this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            }

            update() {
                if (mouse.isActive) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius && dist > 0) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x += (dx / dist) * force * 3.5;
                        this.y += (dy / dist) * force * 3.5;
                    }
                }

                const vx = (this.x - this.oldX) * FRICTION;
                const vy = (this.y - this.oldY) * FRICTION;

                this.oldX = this.x;
                this.oldY = this.y;

                this.x += vx;
                this.y += vy + GRAVITY;

                const bounds = COLLISION_RADIUS;

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
            }

            draw(context: CanvasRenderingContext2D) {
                context.save();
                context.translate(this.x, this.y);
                context.rotate(this.angle);
                context.fillStyle = this.color;
                context.fillRect(-PARTICLE_SIZE / 2, -PARTICLE_SIZE / 2, PARTICLE_SIZE, PARTICLE_SIZE);
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

        // CLICK EXPLOSION / SHOCKWAVE EFFECT
        const handleCanvasClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const explosionRadius = 300;

            particles.forEach((p) => {
                const dx = p.x - clickX;
                const dy = p.y - clickY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < explosionRadius && dist > 0) {
                    const force = (explosionRadius - dist) / explosionRadius;
                    // Send blocks flying violently outwards and upwards
                    p.oldX = p.x - (dx / dist) * force * 35;
                    p.oldY = p.y - (dy / dist) * force * 35 - 15;
                }
            });
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
                        }
                    }
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => particle.update());
            resolveCollisions();
            particles.forEach((particle) => particle.draw(ctx));

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            if (mouse.x >= 0 && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height) {
                mouse.isActive = true;
            } else {
                mouse.isActive = false;
            }
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
        };

        const handleResize = () => {
            setCanvasSize();
        };

        initParticles();
        animate();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("click", handleCanvasClick); // Added click listener

        window.addEventListener("touchmove", (e) => {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.touches[0].clientX - rect.left;
                mouse.y = e.touches[0].clientY - rect.top;
                mouse.isActive = true;
            }
        }, { passive: true });

        window.addEventListener("touchend", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("click", handleCanvasClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            {/* HIDDEN REVEAL TEXT BEHIND THE BLOCKS */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 px-4">
                <span className="text-accent-gold font-sans uppercase tracking-widest text-sm mb-3">
                    Let's Create Together
                </span>
                <h2 className="text-4xl md:text-7xl font-bold font-heading text-white tracking-tight mb-6">
                    Ready to elevate your brand?
                </h2>
                <a
                    href="#contact"
                    className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all cursor-pointer shadow-2xl"
                >
                    Start a Project
                </a>
            </div>

            {/* INTERACTIVE GRAVITY CANVAS ON TOP */}
            <canvas
                ref={canvasRef}
                className="block w-full h-full cursor-crosshair z-10"
            />
        </div>
    );
}