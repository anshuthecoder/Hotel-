"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HostelsPage() {
  const images = ["/images/hotel/1.png", "/images/hotel/2.png", "/images/hotel/3.png"];
  const doubel1 = ["/images/hotel/4.png", "/images/hotel/5.png", "/images/hotel/6.png"];
  const images2 = ["/images/hotel/7.png", "/images/hotel/8.png", "/images/hotel/9.png"];
  const eight = ["/images/hotel/10.png", "/images/hotel/11.png", "/images/hotel/12.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const renderSlider = (imgArray: string[]) => (
    <div className="relative overflow-hidden shadow-xl w-full h-[300px] md:h-[400px] rounded-2xl">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {imgArray.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-2xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const roomSections = [
    { title: "DELUXE ROOM", text: "Our Deluxe Room at Thar Tribe Hostel combines traditional Rajasthani design with modern comfort, creating a cozy and inviting retreat. Featuring a spacious layout, handcrafted décor, and warm lighting, the room includes a comfortable double bed, premium linens, and all essential amenities — perfect for couples or solo travelers seeking a touch of elegance in the heart of Jaisalmer.", images: images },
    { title: "FAMILY ROOM", text: "The Family Room at Thar Tribe Hostel is designed to offer comfort, space, and a warm desert-inspired ambiance. Perfect for families or small groups, the room features multiple beds, traditional Rajasthani accents, and modern amenities. With its inviting interiors and relaxed vibe, it’s an ideal space to unwind and create memories in the heart of Jaisalmer.", images: doubel1 },
    { title: "4- BED DORM", text: "Our 4-Bed Dorm Room at Thar Tribe Hostel offers a perfect balance of privacy and community. Designed for comfort and connection, the room features four individual beds with clean linens, personal charging points, and secure storage. With earthy tones and local design elements, it’s an ideal choice for small groups or solo travelers looking to share space without compromising on comfort in the heart of Jaisalmer.", images: eight },
    { title: "8- BED DORM", text: "Our 8-Bed Dorm Room at Thar Tribe Hostel is perfect for travelers who love to connect, share stories, and experience Jaisalmer in a vibrant, social setting. Each bed comes with clean linens, personal charging ports, lockers, and a privacy curtain for added comfort. Designed with rustic décor and desert-inspired charm, this spacious dorm is ideal for backpackers and groups seeking a budget-friendly yet cozy stay.", images: images2 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image src="/images/hotel/kk.jpg" alt="Gallery" fill className="object-cover object-center rounded-3xl" />
        </div>
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-[120px] font-bold tracking-widest text-[#472a2a] [text-shadow:_0_0_20px_rgba(139,94,60,0.8)]">
            Hotels
          </h1>
        </div>
      </section>

      {/* Room Sections */}
      <div className="bg-[#fefce8]">
        {roomSections.map((room, idx) => (
          <section key={idx} className={`py-10 md:py-16 px-4 md:px-10 ${idx % 2 === 0 ? "" : "bg-[#fefce8]"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Left — Sliding Images */}
              {renderSlider(room.images)}

              {/* Right — Text Content */}
              <div className="flex flex-col justify-center px-2 md:px-8 py-4 md:py-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#4b2e2e] mb-4">{room.title}</h2>
                <p className="text-[#4b2e2e] text-base md:text-lg leading-relaxed mb-6">{room.text}</p>
                <Link href="https://wa.me/9636730201" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
                Book Now
                </Link>
                {/* <button  className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition w-fit shadow-md">
                  Book Now
                </button> */}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Included Perks */}
      <section className="bg-[#fefce8] py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b2e2e] mb-4">Included Perks</h2>
            <p className="text-[#4b2e2e] text-base md:text-lg mb-6">
              Every room at Thar Tribe Hostel comes packed with essentials and desert-inspired vibes to make your stay easy and comfortable.
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
          <div className="relative w-full mt-8 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/hotel/ll.png" alt="Room interior" width={600} height={400} className="object-cover w-full h-auto rounded-xl" />
            </div>
            <div className="absolute -bottom-12 left-4 md:left-8 w-[60%] rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/hotel/pp.png" alt="Perks items" width={400} height={300} className="object-cover w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
