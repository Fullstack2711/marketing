"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const ProfileCard = ({ 
  name, 
  profession,
  image = "/card.jpg",
  position = 0 
}) => {
  const { t } = useLanguage();
  const displayName = name || t('card_default_name');
  const displayProfession = profession || t('card_default_profession');

  const getCardStyles = () => {
    const base = "absolute transition-all duration-700 ease-in-out";

    // Responsive sizes
    const centerSize = "w-60 md:w-72 h-[380px] md:h-[420px]";
    const sideSize = "w-48 md:w-60 h-[340px] md:h-[380px]";
    const farSize = "w-40 md:w-52 h-[300px] md:h-[340px]";
    const verticalPosition = "top-[55%] md:top-1/2";

    switch (position) {
      case 0:
        return `${base} left-1/2 ${verticalPosition} transform -translate-x-1/2 -translate-y-1/2 ${centerSize} z-30 scale-100`;
      case 1:
        return `${base} left-[65%] ${verticalPosition} transform -translate-x-1/2 -translate-y-1/2 ${sideSize} z-20 scale-90 opacity-70 blur-sm`;
      case -1:
        return `${base} left-[35%] ${verticalPosition} transform -translate-x-1/2 -translate-y-1/2 ${sideSize} z-20 scale-90 opacity-70 blur-sm`;
      case 2:
        return `${base} left-[80%] ${verticalPosition} transform -translate-x-1/2 -translate-y-1/2 ${farSize} z-10 scale-75 opacity-50 blur-md`;
      case -2:
        return `${base} left-[20%] ${verticalPosition} transform -translate-x-1/2 -translate-y-1/2 ${farSize} z-10 scale-75 opacity-50 blur-md`;
      default:
        return "hidden";
    }
  };

  return (
    <div className={`group ${getCardStyles()}`}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-2 border-amber-400/20 p-px">
        {/* Animated border on hover */}
        <div className="absolute inset-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(black,transparent)]">
          <div 
            className="absolute inset-[-50%] w-[200%] h-[200%] animate-[spin_3s_linear_infinite]"
            style={{
              background: 'conic-gradient(from 90deg at 50% 50%,#E2CBFF00, #FDE047 50%,#E2CBFF00 100%)'
            }}
          />
        </div>
        
        <div className="relative w-full h-full rounded-[15px] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent">
        <h3 className="text-xl font-semibold text-white mb-1">{displayName}</h3>
        <p className="text-gray-300 text-sm mb-3">{displayProfession}</p>
        <Link href="/team">
          <button className="w-full py-2 bg-white/10 backdrop-blur-md border border-gray-600 text-white text-sm rounded-full hover:bg-white/20 transition">
            {t('card_learn_more')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
