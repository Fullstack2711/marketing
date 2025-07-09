'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProfileCarousel from "./components/ProfileCarousel";
import { MarqueeDemo } from "./components/GridCardImage";
import Services from "./components/Services";
import OrderForm from "./components/Cantact";
import Footer from "./components/Footer";
import InfoCompany from "./components/InfoCompany";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
 
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1 sekund yuklanish
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <div className={isLoading ? 'hidden' : 'block'}>
        {/* Fon rasmi - radial gradient */}
        <div
          className="fixed inset-0 z-0"
          style={{
            background: `radial-gradient(circle at top left, rgba(75, 22, 76, 0.2), transparent 60%),
                         radial-gradient(circle at bottom right, rgba(75, 22, 76, 0.15), transparent 60%),
                         radial-gradient(circle at 30% 70%, rgba(75, 22, 76, 0.1), transparent 60%),
                         #0C0B10`,
          }}
        />

        <div className="relative z-10">
          {/* HEADER qismi */}
          <div className="header min-h-screen relative overflow-hidden">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 cursor-pointer">
              <Navbar />
            </div>

            {/* SVG chiziqli animatsiya */}
            <div className="absolute -top-15 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none z-10">
              <Image
                src="/Lineanimation.svg"
                alt="Decorative lines"
                width={914}
                height={250}
                className="w-full"
                priority
              />
            </div>

            {/* Hero */}
            <div className="relative z-20">
              <Hero/>
            </div>
            <div className="relative z-30 mt-[-14rem] mb-14">
              <ProfileCarousel />
            </div>
          </div>

          {/* CONTENT qismi */}
          <div className="bg-[#111111]">
            <MarqueeDemo />
            <Services />
          </div>

          {/* White separator */}
          <div className="bg-white h-[60px]" />

          <div className="bg-[#111111]">
            <OrderForm />
          </div>

          <div className="bg-white h-[120px]" />

          <div className="bg-[#111111]">
            <InfoCompany />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
