"use client";
import Image from "next/image";

const images = [
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery3.png",
  "/images/gallery/gallery4.png",
  "/images/gallery/gallery5.png",
  "/images/gallery/gallery6.png",
  "/images/gallery/gallery7.png",
];

export default function Gallery() {
  const loopImages = [...images, ...images]; // duplicate for seamless loop

  return (
    <section className="bg-[#fcf8e7] py-20 p-0">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#4B2E2E] mb-12 text-center">
        Gallery
      </h2>

      {/* Full-width slider */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-slide gap-4 sm:gap-6 md:gap-8 w-max">
          {loopImages.map((img, i) => (
            <div
              key={i}
              className={`
                relative flex-none
                w-[340px] h-[280px]       /* base size */
                sm:w-[400px] sm:h-[320px] /* small screen */
                md:w-[450px] md:h-[350px] /* medium+ screen */
                transition-transform duration-300
                hover:scale-105 hover:z-10
                rounded-xl overflow-hidden
                hover:glow-shadow
              `}
            >
              <Image
                src={img}
                alt={`Gallery Image ${i}`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Sliding animation */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .glow-shadow {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
        }

        @media (max-width: 640px) {
          .animate-slide {
            animation-duration: 15s;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-slide {
            animation-duration: 22s;
          }
        }

        /* Pause on hover */
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
