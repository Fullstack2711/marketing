"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = ({ 
  name = "Cineframe Khan", 
  info = "A videographer is a professional who captures moving images using a video camera.", 
  image = "/card.jpg"
}) => {
  return (
    <div className="relative w-[300px] h-[450px] rounded-3xl overflow-hidden shadow-xl border border-[#facc15]/20 p-px bg-black/10 group mx-6 my-4">
      {/* Outer static border with new colors */}
      <div className="absolute inset-0 rounded-3xl [mask:linear-gradient(black,transparent)]">
        <div 
          className="absolute inset-[-10%] w-[120%] h-[120%]"
          style={{
            background: 'linear-gradient(90deg, #F19470 0%, #B9D9FE 100%)'
          }}
        />
      </div>

      {/* Animated border on hover with new colors */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(black,transparent)]">
        <div 
          className="absolute inset-[-10%] w-[120%] h-[120%] animate-[spin_4s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 90deg at 50% 50%, #F19470 0%, #F19470 50%, #B9D9FE 50%, #B9D9FE 100%)'
          }}
        />
      </div>

      {/* Main Image with top and center transparency */}
      <div className="relative w-full h-full rounded-[28px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
        {/* Top gradient for transparency */}
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-black/0 via-black/10 to-transparent"></div>
        {/* Center gradient for more transparency */}
        <div className="absolute top-[25%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

     

      {/* Bottom Info: with smoother gradient and no visible blur lines */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-black/0 font-thin  ">
        <div className="text-white font-bastardo text-center space-y-2 pb-8">
          <h3 className="text-2xl font-light">{name}</h3>
          <p className="text-sm text-gray-300">
            {info}
          </p>
           
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;