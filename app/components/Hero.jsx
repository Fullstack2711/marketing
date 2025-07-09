"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
 

const AnimatedBorderButton = ({ href, label }) => {
  return (
    <Link href={href}>
      <div className="group relative inline-block rounded-full p-[2px] bg-gradient-to-r from-[#F1946F]/50 via-white/30 to-[#B9D9FE]/50 hover:from-[#F1946F]/70 hover:to-[#B9D9FE]/70 transition-all duration-300 overflow-hidden">
        
        {/* Spinning light effect only on hover */}
        <div className="absolute inset-[-100%] w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(black,transparent)] pointer-events-none">
          <div
            className="absolute inset-0 group-hover:animate-[spin_2s_linear_infinite]"
            style={{
              background: 'conic-gradient(from 90deg at 50% 50%, #B9D9FE, #F1946F 50%, #B9D9FE 100%)',
            }}
          />
        </div>

        <div className="relative z-10 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 bg-[#1A1A1A] rounded-full text-gray-300 group-hover:text-white text-xs sm:text-sm font-light tracking-wide transition-colors duration-300 whitespace-nowrap">
          {label}
        </div>
      </div>
    </Link>
  );
};
const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 pb-45       ">
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:pb-20">
          <Image
            src="/Logo.png"
            alt="Result Logo"
            width={150}
            height={70}
            className="opacity-90 w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
          />
        </div>

        {/* Desktop Layout (lg and up) */}
        <div className="hidden lg:block">
          <div className="relative flex items-center justify-between mb-12">
            {/* Left Button */}
            <div className="flex-shrink-0">
              <AnimatedBorderButton href="/connection" label={t('hero_button_connection')} />
            </div>

            {/* Main Title */}
            <div className="flex-1 mx-8 xl:mx-12">
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wide leading-none">
                {t('hero_title_line1')}
                <br />
                <span className="block">{t('hero_title_line2')}</span>
              </h1>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <AnimatedBorderButton href="/services" label={t('hero_button_services')} />
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout (below lg) */}
        <div className="block lg:hidden">
          {/* Main Title */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-none px-2">
              {t('hero_title_line1')}
              <br />
              <span className="block">{t('hero_title_line2')}</span>
            </h1>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <AnimatedBorderButton href="/connection" label={t('hero_button_connection')} />
            <AnimatedBorderButton href="/services" label={t('hero_button_services')} />
          </div>
        </div>

        {/* Subtitle with Border */}
        <div className="flex flex-col items-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light tracking-wide mb-2 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-2">
            {t('hero_subtitle')}
          </p>
<div className="w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        </div>
      </div>

      
    </div>
  );
};

export default Hero;



