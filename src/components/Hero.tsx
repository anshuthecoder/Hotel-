import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Background Image with opacity */}
      <Image
        src="/photo/main.png"
        alt="Thar Tribe Hostel"
        fill
        priority
        className="object-cover opacity-70"
      />

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1
          className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-normal tracking-wide text-[#4a352f] drop-shadow-lg"
          style={{
            textShadow: `
              0 0 8px #FFD580,
              0 0 16px #FFD580,
              0 0 24px #FFD580,
              0 0 32px #FFD580
            `
          }}
        >
          Thar Tribe Hostel
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl tracking-[0.3em] text-white drop-shadow-md">
          Live The Thar Love The Tribe
        </p>
      </div>
    </section>
  );
}
