"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    title: "PRIVATE ROOM",
    img: "/images/rooms/1.png",
  },
  {
    title: "DORMITARY ROOMS",
    img: "/images/gallery/gallery1.png",
  },
  {
    title: "DELUXE ROOMS",
    img: "/images/rooms/6.png",
  },
];

export default function Rooms() {
  return (
    <section className="bg-[#FFF8E5] py-20">
      <div className="max-w-[1441px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#4B2E2E] mb-6">
          Our Rooms
        </h2>

        <p className="text-lg text-[#4B2E2E] max-w-4xl mx-auto leading-relaxed mb-16">
          At Thar Tribe Hostel, Each Of Our Rooms Is Crafted To Reflect The
          Spirit Of The Desert — Simple, Soulful, And Full Of Character. From
          Cozy Bunks For Solo Adventurers To Private Spaces For Couples And
          Families, We Offer Comfort Wrapped In Earthy Charm. With Traditional
          Rajasthani Textures And Modern Essentials, Your Stay Blends Authentic
          Local Vibes With The Ease Of A Good Night’s Rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.3, // stagger each card
              }}
            >
              <div className="overflow-hidden rounded-2xl shadow-md w-96 h-56 mb-4">
                <Image
                  src={room.img}
                  alt={room.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-[#4B2E2E]">
                {room.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
