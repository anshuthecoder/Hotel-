"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Desert Camping", img: "/images/services/desert-camping.png" },
  { title: "Jeep Safari", img: "/images/services/jeep-safari.png" },
  { title: "Parasailing", img: "/images/services/parasailing.png" },
  { title: "Camel Safari", img: "/images/services/camel-safari.png" },
  { title: "Dune Bashing", img: "/images/services/dune-bashing.png" },
  { title: "Quad Bike", img: "/images/services/quad-bike.png" },
];

export default function Services() {
  return (
    <section className="bg-[#FFF8E5] py-20">
      <div className="max-w-[1441px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#4B2E2E] mb-6">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}       // Start hidden and below
              whileInView={{ opacity: 1, y: 0 }}   // Animate to visible
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.2, // stagger effect
              }}
            >
              <div className="overflow-hidden rounded-2xl shadow-md w-96 h-56 mb-4">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={450}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-[#4B2E2E]">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
