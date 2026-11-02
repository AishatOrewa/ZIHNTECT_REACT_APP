export default function Footer() {
  const currentYear = 2026;
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white font-bold text-lg">
          GTD Global Technologies
        </div>
        <div className="text-xs">
          &copy; {currentYear} GTD Inc. Project built for Zihntech Academy
          Cohort 01 by AishatOrewa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
