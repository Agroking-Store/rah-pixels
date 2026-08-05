import React from 'react';

const reviews = [
  {
    name: "Drake Holloway",
    username: "CTO, Infinitum",
    body: "“Awesome! Working with Aidrop has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.”",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Natalie Kingston",
    username: "Managing Partner",
    body: "“Awesome! Working with Aidrop has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.”",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liana Whitmore",
    username: "COO, Veridian",
    body: "“Awesome! Working with Aidrop has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.”",
    profile: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "John Carter",
    username: "Founder, TechPro",
    body: "“Awesome! Working with Aidrop has transformed our operations. The team is truly exceptional! Really we’re grateful & We're closing 40% on cold traffic.”",
    profile: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Emma Wilson",
    username: "Marketing Director",
    body: "“Their strategies helped us scale faster and increase profitability beyond expectations.”",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Brown",
    username: "CEO, InnovateX",
    body: "“Outstanding collaboration and measurable growth results. Highly recommended!”",
    profile: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3, 6);

export default function TestimonialMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 bg-slate-50 dark:bg-slate-950">
      <div className="text-center mb-12 space-y-2 px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Trusted by Industry Leaders
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
          See how we are transforming operations and driving growth.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6">
        {/* Row 1 - Left Marquee */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee shrink-0 py-2">
            {[...firstRow, ...firstRow, ...firstRow].map((review, idx) => (
              <div
                key={idx}
                className="relative h-auto w-80 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <img
                    src="https://indux.cloud/wp-content/uploads/2026/03/icons8-quote-50.png"
                    alt="quote"
                    className="w-6 h-6 opacity-40"
                  />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {review.body}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <img
                    className="rounded-full object-cover w-10 h-10"
                    alt={review.name}
                    src={review.profile}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {review.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {review.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right (Reverse) Marquee */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee-reverse shrink-0 py-2">
            {[...secondRow, ...secondRow, ...secondRow].map((review, idx) => (
              <div
                key={idx}
                className="relative h-auto w-80 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <img
                    src="https://indux.cloud/wp-content/uploads/2026/03/icons8-quote-50.png"
                    alt="quote"
                    className="w-6 h-6 opacity-40"
                  />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {review.body}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <img
                    className="rounded-full object-cover w-10 h-10"
                    alt={review.name}
                    src={review.profile}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {review.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {review.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Internal CSS for Infinite Marquee Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 30s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}