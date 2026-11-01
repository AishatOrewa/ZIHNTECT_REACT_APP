function FeatureCard() {
  return (
    <div className="space-y-6">
      {/* Bootcamps & Learning  */}
      <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          GTD Academy & Bootcamps
        </h3>
        <p className="text-gray-600 text-sm">
          Accelerate your career with immersive frontend, backend, and DevOps
          tracks led by global engineering mentors.
        </p>
      </div>

      {/* Cloud Hosting */}
      <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Secure Cloud Hosting
        </h3>
        <p className="text-gray-600 text-sm">
          Deploy applications instantly with our high-availability cloud cluster
          networks, optimized for speed and production scales.
        </p>
      </div>

      {/*Job Placement */}
      <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Global Job Placements
        </h3>
        <p className="text-gray-600 text-sm">
          We connect our certified bootcamp grads directly with vetted remote
          tech opportunities across North America and Europe.
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
