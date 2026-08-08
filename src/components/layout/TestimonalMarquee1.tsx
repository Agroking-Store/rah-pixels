"use client";

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const reviewsData: Testimonial[] = [
    {
        id: 1,
        name: "Drake Holloway",
        role: "CTO",
        company: "Infinitum",
        content: "Working with Rah Pixels has transformed our brand presence. The team is truly exceptional! Their attention to detail and logic-driven creativity helped us close 40% more on cold traffic.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Natalie Kingston",
        role: "Managing Partner",
        company: "Agency",
        content: "Alexandr did an outstanding job on our identity! He's incredibly responsive, fully dedicated, and went above and beyond to ensure we achieved the perfect aesthetic result.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Liana Whitmore",
        role: "COO",
        company: "Veridian",
        content: "Aesthetic, brilliant, and completely unique. They didn't just give us a template; they built a scalable design system that we will use for the next decade.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
        id: 4,
        name: "John Carter",
        role: "Founder",
        company: "TechPro",
        content: "I didn't want what every other tech company does. I wanted unique. Rah Pixels delivered an identity that builds instant trust and makes customers feel understood.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
        id: 5,
        name: "Emma Wilson",
        role: "Marketing Director",
        company: "Global Brands",
        content: "Their strategic discovery phase blew my mind. They helped us scale faster and increase profitability beyond expectations by just refining our visual communication.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: 6,
        name: "Michael Brown",
        role: "CEO",
        company: "InnovateX",
        content: "Outstanding collaboration and measurable growth results. If you are looking for a studio that understands both art and business, this is it. Highly recommended!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    },
];

export const TestimonalMarquee1 = () => {
    return (
        <section className="py-24 bg-black">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                .testimonial-marquee-1-container * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 testimonial-marquee-1-container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">Client Stories</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">See what our amazing clients have to say about the experiences we've crafted for them.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="max-w-80 w-full bg-black text-white rounded-2xl border border-gray-800 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 duration-300">
                            <div className="relative -mt-px overflow-hidden rounded-t-2xl">
                                <img src={review.avatar} alt={review.name} className="h-[270px] w-full rounded-t-2xl hover:scale-105 transition-all duration-500 object-cover object-center" />
                                <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                            </div>
                            <div className="px-6 pb-6 relative z-20">
                                <p className="font-medium border-b border-gray-800 pb-5 pt-2 min-h-[160px] text-gray-200">“{review.content}”</p>
                                <p className="mt-4 font-semibold">— {review.name}</p>
                                <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text mt-1">
                                    {review.role}, {review.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
