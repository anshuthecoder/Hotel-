import {
  Wifi,
  Bell,
  Plane,
  Bed,
  AirVent,
  Utensils,
  Car,
  User,
  Bus,
  Leaf,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Bell, label: "Room Service" },
  { icon: Plane, label: "Airport Pickup/Drop" },
  { icon: Bed, label: "King Size Bed" },
  { icon: AirVent, label: "A/C Rooms" },
  { icon: Utensils, label: "Breakfast & Dinner" },
  { icon: Car, label: "Car Parking" },
  { icon: User, label: "24x7 Front Desk" },
  { icon: Bus, label: "Local Shuttle" },
  { icon: Leaf, label: "Sustainability" },
];

export default function Amenities() {
  return (
    <section className="bg-[#FFF8E5] py-20">
      <div className="max-w-[1441px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#4B2E2E] mb-4">
          Best Amenities For You
        </h2>

        <p className="text-lg text-[#4B2E2E] mb-12 max-w-3xl mx-auto leading-relaxed">
          Immerse Yourself In The Heritage Of Rajasthan Through Our
          Traditionally Inspired Rooms And Suites. Rich In Detail And Equipped
          With Modern Amenities, Every Stay Is A Tribute To Timeless Elegance
          And Comfort.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-12">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <item.icon size={60} strokeWidth={1.5} className="text-black" />
              <span className="text-[#4B2E2E] text-lg">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
