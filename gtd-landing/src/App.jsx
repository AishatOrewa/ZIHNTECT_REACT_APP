import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const year = 2026;
  const name = "Aishat Orewa";
  const a = 10;
  const b = 20;
  return (
    <>
      {/* <div className="bg-black text-center text-2xl text-white">
        <h1>Warm Up Excersies</h1>
        <p>
          We are in year {year}; This was written by {name}
        </p>
        <p>Addition involves adding values together eg: 10 + 20 = {a + b}</p>
      </div> */}

      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased selection:bg-indigo-500 selection:text-white">
        <NavBar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
