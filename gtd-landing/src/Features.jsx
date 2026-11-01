import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          End-to-End Enterprise Tech Solutions
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm">
          Explore how GTD scales talent development, infrastructure hosting, and
          service delivery across the globe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
}
