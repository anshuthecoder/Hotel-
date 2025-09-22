"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-[#FFF8E5] py-20">
  <div className="w-full mx-auto px-4">
    <div className="flex-1 mx-auto">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#4B2E2E] mb-6 text-center">
        Welcome To Thar Tribe Hostel
      </h2>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Left - Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/hero/about.png"
          alt="Thar Tribe Hostel building"
          width={480}
          height={600}
          className="rounded-2xl object-cover shadow-lg max-w-full h-auto"
        />
      </motion.div>

      {/* Right - Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-[#4B2E2E] mb-4">
          About Us
        </h3>

        <p className="text-base md:text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed">
          Experience royal Rajasthani hospitality at our Jaisalmer hotel,
          nestled near the Golden Fort. Enjoy heritage-style rooms, rooftop
          dining with desert views, and easy access to city attractions.
          Perfect blend of tradition and comfort awaits you in the heart of
          the Thar Desert.
        </p>

        <button className="bg-[#FF9933] hover:bg-[#e37f1a] text-black px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition">
          Read more
        </button>
      </motion.div>
    </div>
  </div>
</section>

  );
}
