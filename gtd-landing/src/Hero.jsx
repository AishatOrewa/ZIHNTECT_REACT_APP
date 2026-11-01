import Button from "./Button";

export default function Hero() {
  const headline = "Your Entire Tech Journey, Powered by GTD";
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          From intensive engineering bootcamps and lightning-fast developer
          cloud hosting, to direct remote job placements—we provide all the
          technical infrastructure your career needs.
        </p>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </section>
  );
}
