"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HostelsPage() {
  // 🔹 Auto-changing room images
  const images = ["/images/hotel/1.png", "/images/hotel/2.png", "/images/hotel/3.png"];
  const doubel1 = ["/images/hotel/4.png", "/images/hotel/5.png", "/images/hotel/6.png"];
  const images2 = ["/images/hotel/7.png", "/images/hotel/8.png", "/images/hotel/9.png"];
  const eight = ["/images/hotel/10.png", "/images/hotel/11.png", "/images/hotel/12.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // slide every 3 sec
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
  {/* Image with border-radius */}
  <div className="absolute inset-0 overflow-hidden rounded-3xl">
    <Image
      src="/images/hotel/kk.jpg"
      alt="Gallery"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1
      className="
        text-[80px] md:text-[120px] font-bold tracking-widest 
        text-[#472a2a]
        [text-shadow:_0_0_30px_rgba(139,94,60,1),_0_0_60px_rgba(139,94,60,0.9),_0_0_90px_rgba(139,94,60,0.8)]
      "
    >
      Hotels
    </h1>
  </div>
</section>


      



      <div>
  {/* 🔹 DELUXE ROOM */}
  <section className="bg-[#fefce8] py-10 pl-10">
    <div className="grid md:grid-cols-2 gap-0 w-full">
      {/* Left — Sliding Images */}
      <div className="relative overflow-hidden shadow-xl w-full h-[400px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}

                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right — Text Content */}
      <div className="flex flex-col justify-center px-8 py-10">
        <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">DELUXE ROOM</h2>
        <p className="text-[#4b2e2e] text-lg leading-relaxed mb-6">
          Our Deluxe Room at Thar Tribe Hostel combines traditional Rajasthani design with modern
          comfort, creating a cozy and inviting retreat. Featuring a spacious layout, handcrafted
          décor, and warm lighting, the room includes a comfortable double bed, premium linens, and
          all essential amenities — perfect for couples or solo travelers seeking a touch of
          elegance in the heart of Jaisalmer.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
          Book Now
        </button>
      </div>
    </div>
  </section>

  {/* 🔹 FAMILY ROOM */}
  <section className="bg-[#fefce8] py-16">
    <div className="grid md:grid-cols-2 gap-0 w-full">
      {/* Left — Sliding Images */}
      <div className="relative overflow-hidden shadow-xl w-full h-[400px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {doubel1.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right — Text Content */}
      <div className="flex flex-col justify-center px-8 py-10">
        <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">FAMILY ROOM</h2>
        <p className="text-[#4b2e2e] text-lg leading-relaxed mb-6">
          The Family Room at Thar Tribe Hostel is designed to offer comfort, space, and a warm
          desert-inspired ambiance. Perfect for families or small groups, the room features multiple
          beds, traditional Rajasthani accents, and modern amenities. With its inviting interiors and
          relaxed vibe, it’s an ideal space to unwind and create memories in the heart of Jaisalmer.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
          Book Now
        </button>
      </div>
    </div>
  </section>

  {/* 🔹 4-BED DORM */}
  <section className="bg-[#fefce8] py-16">
    <div className="grid md:grid-cols-2 gap-0 w-full">
      {/* Left — Sliding Images */}
      <div className="relative overflow-hidden shadow-xl w-full h-[400px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {eight.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right — Text Content */}
      <div className="flex flex-col justify-center px-8 py-10">
        <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">4- BED DORM</h2>
        <p className="text-[#4b2e2e] text-lg leading-relaxed mb-6">
          Our 4-Bed Dorm Room at Thar Tribe Hostel offers a perfect balance of privacy and community.
          Designed for comfort and connection, the room features four individual beds with clean
          linens, personal charging points, and secure storage. With earthy tones and local design
          elements, it’s an ideal choice for small groups or solo travelers looking to share space
          without compromising on comfort in the heart of Jaisalmer.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
          Book Now
        </button>
      </div>
    </div>
  </section>

  {/* 🔹 8-BED DORM */}
  <section className="bg-[#fefce8] py-16">
    <div className="grid md:grid-cols-2 gap-0 w-full">
      {/* Left — Sliding Images */}
      <div className="relative overflow-hidden shadow-xl w-full h-[400px]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images2.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right — Text Content */}
      <div className="flex flex-col justify-center px-8 py-10">
        <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">8- BED DORM</h2>
        <p className="text-[#4b2e2e] text-lg leading-relaxed mb-6">
          Our 8-Bed Dorm Room at Thar Tribe Hostel is perfect for travelers who love to connect,
          share stories, and experience Jaisalmer in a vibrant, social setting. Each bed comes with
          clean linens, personal charging ports, lockers, and a privacy curtain for added comfort.
          Designed with rustic décor and desert-inspired charm, this spacious dorm is ideal for
          backpackers and groups seeking a budget-friendly yet cozy stay.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
          Book Now
        </button>
      </div>
    </div>
  </section>
</div>


      {/* 🔹 Included Perks */}
      <section className="bg-[#fefce8] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#4b2e2e] mb-4">Included Perks</h2>
            <p className="text-[#4b2e2e] text-lg mb-6">
              Every room at Thar Tribe Hostel comes packed with essentials and desert-inspired vibes
              to make your stay easy and comfortable.
            </p>

            <ul className="text-[#4b2e2e] space-y-2 list-disc list-inside">
              <li>Tea/Coffee maker</li>
              <li>Ceiling Fan</li>
              <li>Air-conditioner</li>
              <li>24 hours satellite transmission with movie channels</li>
              <li>Electronic safe</li>
              <li>Elegant granite bathroom with herbal toiletries</li>
              <li>Shaving mirror</li>
              <li>Hair dryer</li>
              <li>Room slippers</li>
              <li>Full Length mirror</li>
              <li>Well appointed workstation with a carved writing desk</li>
              <li>High speed wireless internet access</li>
              <li>Double wash basin</li>
            </ul>
          </div>

          {/* Right Images */}
          <div className="relative w-full">
            {/* Top Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/hotel/ll.png"
                alt="Room interior"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Bottom Image (overlapping) */}
            <div className="absolute -bottom-12 left-8 w-[60%] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hotel/pp.png"
                alt="Perks items"
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
