import Button from "./Button";

export default function NavBar() {
  const brandName = "GTD Ecosystem";
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-black text-indigo-600 tracking-tight">
          {brandName}
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
          <a href="#services" className="hover:text-indigo-600">
            Our Services
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Success Stories
          </a>
        </div>
        <div className="hidden sm:block">
          <Button />
        </div>
      </div>
    </nav>
  );
}
