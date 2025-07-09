"use client";
import React from 'react';

const SecondLoader = () => {
  return (
    <div className="fixed inset-0 z-[90] bg-black pointer-events-none">
      {/* Top container for the animated frame, mimicking Navbar's structure */}
      <div className="container mx-auto flex justify-center items-center px-6 py-4">
        <div className="animate-scale-in">
          <div className="relative rounded-full p-px bg-white/10">
            <div className="relative flex items-center gap-8 px-8 py-2 rounded-full bg-gray-600/15 backdrop-blur-xl shadow-lg border border-white/10">
              {/* Placeholder for size */}
              <div className="h-[22px] w-[300px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Loading Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-white/70 animate-pulse">Loading...</p>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 3s ease-in-out forwards;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
};

export default SecondLoader;