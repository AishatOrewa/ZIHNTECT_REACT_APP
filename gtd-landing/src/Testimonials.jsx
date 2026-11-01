import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Trusted By Hundreds of Engineers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}
