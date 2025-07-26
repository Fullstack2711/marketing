"use client";
import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './Card'; // Bu alohida card komponent
import { useLanguage } from '../context/LanguageContext';

const ProfileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start in the middle
  const intervalRef = useRef(null);
  const {t} =  useLanguage()

 const profiles = [
  { id: 1, image: "/img1.jpg", name:'Shohijaxon.J', info: t("card1_info"), infoPast: t("card1_more") },
  { id: 2, image: "/img2.jpg", name:'Sirojiddin. Kh', info: t("card2_info"), infoPast: t("card2_more") },
  { id: 3, image: "/img3.jpg" , name:'Ismailov. I', info: t("card3_info"), infoPast: t("card3_more") },
  { id: 4, image: "/tg.jpg"   , name:'Shohrux. T', info: t("card4_info"), infoPast: t("card4_more") },
  { id: 5, image: "/img5.jpg" , name:'Хudoyor. lv', info: t("card5_info"), infoPast: t("card5_more") },
  { id: 6, image: "/tg.jpg"   , name:'Shohrux. T', info: t("card4_info"), infoPast: t("card4_more") },
  { id: 7, image: "/imgg.png" , name:'Umid. Kh', info: t("card5_info"), infoPast: t("card5_more") },
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
    startAutoplay();
  };

  const getTransform = (index) => {
    const diff = index - currentIndex;
    const total = profiles.length;

    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;

    const stepX = 320;      // Boshidagi 3ta card masofasi (position 0, ±1)
    const middleX = 285;    // O'rtadagi 2ta card masofasi (position ±2)
    const backStepX = 257;  // Oxiridagi 2ta card masofasi (position ±3)
    
    let translateX;
    if (Math.abs(position) <= 1) {
      translateX = position * stepX;
    } else if (Math.abs(position) === 2) {
      translateX = position * middleX;
    } else {
      translateX = position * backStepX;
    }

    const scale = position === 0 ? 1.2 : 1 - Math.min(Math.abs(position) * 0.15, 0.6);
    const rotateY = position * 5;
    const opacity = Math.abs(position) > 2 ? 0.7 : 1;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex: 10 - Math.abs(position),
    };
  };

  return (
    <div className="relative w-full h-[400px] lg:-top-45 flex items-center justify-around overflow-visible">

      <div className="relative flex items-center justify-around  gap-7">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            style={getTransform(index)}
            onClick={() => handleCardClick(index)}
          >
            <ProfileCard image={profile.image} name ={profile.name}  info ={profile.info} infoPast={profile.infoPast} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
