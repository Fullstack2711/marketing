"use client";
import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ 
  name = "Cineframe Khan", 
  info = "A videographer is a professional who captures moving images using a video camera.", 
  infoPast = "Videographer with a passion for storytelling through the lens.",
  image = "/card.jpg"
}) => {
  return (
    <div className="animated-border-card">
      <div className="card-inner-content">
         <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
          />
          </div>

         <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t   ">
          <div className="text-white font-bastardo text-center space-y-2 pb-4">
            <h3 className="text-2xl  ">{name}</h3>  
            <p className="text-sm text-gray-300">
              {info}
            </p>
            <p className=" text-gray-300 relative -top-2 ">
              {infoPast}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }
        @keyframes rotateBackground {
          to { --border-angle: 360deg; }
        }
        .animated-border-card {
          --border-color-1: #F09470;
          --border-color-2: #B9D9FE;
          --background: #000;
          --border-radius: 1.5rem; /* rounded-3xl */
          --border-angle: 0deg;
          --border-width: 1px;
          
          position: relative;
          width: 280px;
          height: 390px;
          margin: 1.5rem; /* Corresponds to mx-6 my-4 */
          border-radius: var(--border-radius);
          padding: var(--border-width);
          
          background-color: transparent;
          background-image: conic-gradient(
            from var(--border-angle) at 50% 50%,
            var(--border-color-1),
            var(--border-color-2),
            var(--border-color-1)
          );
          animation: rotateBackground 15s linear infinite;
          transition: animation-duration 0.3s ease;
          z-index: 0;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* shadow-xl */
        }

        .animated-border-card:hover {
          animation-duration: 3s;
        }

        .card-inner-content {
          background: var(--background);
          border-radius: calc(var(--border-radius) - var(--border-width));
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .animated-border-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          border-radius: inherit;
          animation: inherit;
          filter: blur(4px);
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;