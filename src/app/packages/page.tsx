import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh]">
        {/* Background Image with opacity */}
        <Image
          src="/images/discount/10.png"
          alt="Thar Tribe Hostel"
          fill
          priority
          className="object-cover opacity-70"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-normal tracking-wide text-[#4a352f] drop-shadow-lg"
            style={{
              textShadow: `
                0 0 8px #FFD580,
                0 0 16px #FFD580,
                0 0 24px #FFD580,
                0 0 32px #FFD580
              `,
            }}
          >
            Packages
          </h1>
        </div>
      </section>

      {/* Packages Section */}
      <section className="w-full py-16 bg-[#fcf8e7]">
  <h2 className="text-4xl font-bold text-center mb-12 text-[#4a352f]">
    Explore Our Desert Adventures
  </h2>

  <div className="space-y-16">
    {/* Desert Safari Dinner */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/images/attr/12.png"
        alt="Desert Safari Dinner"
        className="rounded-2xl shadow-lg w-full h-72 object-cover"
      />
      <div className="px-4 md:px-8">
        <h3 className="text-2xl font-semibold mb-4">Desert Safari Dinner</h3>
        <p className="text-gray-700">
          Enjoy a magical evening under the starlit desert sky. Begin with
          dune bashing and camel rides, followed by a traditional dinner
          featuring authentic Arabian cuisine. End your night with live
          cultural performances, including belly dancing and Tanoura shows.
        </p>
      </div>
    </div>

    {/* Jeep Safari */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/images/attr/13.png"
        alt="Jeep Safari"
        className="rounded-2xl shadow-lg w-full h-72 object-cover"
      />
      <div className="px-4 md:px-8">
        <h3 className="text-2xl font-semibold mb-4">Jeep Safari</h3>
        <p className="text-gray-700">
          Embark on an adrenaline-pumping adventure across golden sand dunes
          in a powerful 4x4 jeep. Perfect for thrill-seekers, this experience
          lets you witness the breathtaking landscapes of the desert.
        </p>
      </div>
    </div>

    {/* Parasailing */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/images/attr/14.png"
        alt="Parasailing"
        className="rounded-2xl shadow-lg w-full h-72 object-cover"
      />
      <div className="px-4 md:px-8">
        <h3 className="text-2xl font-semibold mb-4">Parasailing</h3>
        <p className="text-gray-700">
          Soar high above the desert and witness panoramic views of endless
          sands. Parasailing offers an unforgettable blend of adventure and
          tranquility, making it one of the most unique desert experiences.
        </p>
      </div>
    </div>

    {/* Quad Bike */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/images/attr/15.png"
        alt="Quad Bike"
        className="rounded-2xl shadow-lg w-full h-72 object-cover"
      />
      <div className="px-4 md:px-8">
        <h3 className="text-2xl font-semibold text-black mb-4">Quad Bike</h3>
        <p className="text-gray-700">
          Ride your own quad bike across challenging sand dunes. This
          adventure is perfect for those who love speed, excitement, and
          exploring the desert on their own.
        </p>
      </div>
    </div>

    {/* Camel Safari */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src="/images/attr/16.png"
        alt="Camel Safari"
        className="rounded-2xl shadow-lg w-full h-72 object-cover"
      />
      <div className="px-4 md:px-8">
        <h3 className="text-2xl font-semibold mb-4">Camel Safari</h3>
        <p className="text-gray-700">
          Step back in time with a peaceful camel safari. Ride through the
          golden dunes as you experience the desert the way ancient travelers
          once did. It’s a serene and cultural journey that connects you to
          the heart of the desert.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
