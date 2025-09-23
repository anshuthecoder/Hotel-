"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/rooms/1.png", category: "Rooms" },
  { src: "/images/rooms/2.png", category: "Rooms" },
  { src: "/images/rooms/3.png", category: "Rooms" },
  { src: "/images/rooms/5.png", category: "Rooms" },
  { src: "/images/rooms/6.png", category: "Rooms" },
  { src: "/images/rooms/7.png", category: "Rooms" },
  { src: "/images/rooms/8.png", category: "Rooms" },
  { src: "/images/rooms/9.png", category: "Rooms" },
  { src: "/images/rooms/10.png", category: "Rooms" },
  { src: "/images/rooms/11.png", category: "Rooms" },
  { src: "/images/rooms/12.png", category: "Rooms" },
  { src: "/images/rooms/13.png", category: "Rooms" },
  { src: "/images/rooms/14.png", category: "Rooms" },
  { src: "/images/rooms/4.png", category: "Rooms" },
  { src: "/images/attr/1.png", category: "Attraction" },
  { src: "/images/attr/2.png", category: "Attraction" },
  { src: "/images/attr/3.png", category: "Attraction" },
  { src: "/images/attr/4.png", category: "Attraction" },
  { src: "/images/attr/5.png", category: "Attraction" },
  { src: "/images/attr/6.png", category: "Attraction" },
  { src: "/images/attr/7.png", category: "Attraction" },
  { src: "/images/attr/8.png", category: "Attraction" },
  { src: "/images/attr/9.png", category: "Attraction" },
  { src: "/images/attr/10.png", category: "Attraction" },
  { src: "/images/attr/11.png", category: "Attraction" },
];

const categories = ["All", "Rooms",  "Attraction"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/wallpaper/img1.png"
            alt="Gallery"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
              text-[80px] md:text-[120px] font-bold tracking-widest 
              text-[#472a2a]
              [text-shadow:_0_0_30px_rgba(139,94,60,1),_0_0_60px_rgba(139,94,60,0.9),_0_0_90px_rgba(139,94,60,0.8)]
            "
          >
            GALLERY
          </h1>
        </div>
      </section>

      {/* 🔹 Filterable Gallery Section */}
      <section className="bg-[#fcf8e7] py-12">
        <div className="max-w-full mx-auto text-center px-2">
          <h2 className="text-lg font-medium text-[#4b2e2e] mb-4">
            Categories
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all shadow-sm ${
                  activeCategory === cat
                    ? "bg-[#4b2e2e] text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
            {filteredImages.map((img, i) => (
              <div
                className="relative w-full h-[350px] cursor-pointer rounded-lg overflow-hidden"
                key={i}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden px-2">
            <Image
              src={selectedImage}
              alt="Full size"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
