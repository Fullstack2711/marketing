"use client";
import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './Card';
 
const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const intervalRef = useRef(null);

  const profiles = [
    { id: 1, image: "/card.jpg" },
    { id: 2, image: "/card.jpg" },
    { id: 3, image: "/card.jpg" },
    { id: 4, image: "/card.jpg" },
    { id: 5, image: "/card.jpg" },
  ];

  const startAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [profiles.length]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    // Taymerni qayta ishga tushirish
    startAutoplay();
  };

  const getTransform = (index) => {
    const diff = index - currentIndex;
    const total = profiles.length;
    
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    let translateX;
    let scale;

    if (position === 0) {
      translateX = 0;
      scale = 1.1;
    } else if (Math.abs(position) === 1) {
      translateX = position * 360; // Markazga yaqin kartalar masofasi
      scale = 1 - Math.abs(position) * 0.2;
    } else { // position 2 va -2 uchun
      translateX = position * 300; // Chekkadagi kartalar masofasini qisqartirish
      scale = 1 - Math.abs(position) * 0.25; // Chekkadagi kartalarni kichraytirish
    }

    const rotateY = position * 15;
    const opacity = Math.abs(position) > 1 ? 0.7 : 1; // Chekkadagi kartalarni ham ko'rsatish
    
    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex: 10 - Math.abs(position)
    };
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            style={getTransform(index)}
            onClick={() => handleCardClick(index)}
          >
            <ProfileCard image={profile.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
