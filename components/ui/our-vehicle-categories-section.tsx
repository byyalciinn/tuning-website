import { VehicleCategoriesSection } from "./vehicle-categories";

export function OurVehicleCategoriesSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Vehicle Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of automotive services and vehicle categories. 
            From luxury sedans to high-performance sports cars, we provide expert solutions for every type of vehicle.
          </p>
        </div>
        
        {/* Categories Grid */}
        <VehicleCategoriesSection />
      </div>
    </section>
  );
} 