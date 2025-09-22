import AboutUs from "@/components/About";
import Amenities from "@/components/Amenities";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <Amenities />
        <Rooms />
        <Services />
        <Gallery />
      </main>
    </>
  );
}
