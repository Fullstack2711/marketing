"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const AnimatedBorderButton = ({ href, label }) => {
  return (
    <Link href={href} className="link">
      <button className="fancyButton cursor-pointer">
        <div className="innerDiv">{label}</div>
      </button>
    </Link>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="relative min-h-screen lg:-top-5 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 pb-30">
        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-between mb-12">
              {/* Left Button */}
              <div className="flex-shrink-0">
                <AnimatedBorderButton href="/connection" label={t('hero_button_connection')} />
              </div>
              {/* Main Title */}
              <div className="flex-1 mx-8 xl:mx-12 h-56 flex items-center justify-center">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light tracking-wide leading-none">
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
            <div className="mb-8 sm:mb-10 h-40 flex items-center justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-none px-2">
                {t('hero_title_line1')}
                <br />
                <span className="block">{t('hero_title_line2')}</span>
              </h1>
            </div>
            {/* Mobile Buttons */}
            <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-6 relative bottom-12 sm:mb-10">
              <AnimatedBorderButton href="/connection" label={t('hero_button_connection')} />
              <AnimatedBorderButton href="/services" label={t('hero_button_services')} />
            </div>
          </div>
          {/* Subtitle with Border */}
          <div  style={{ paddingTop:'20px' }} className="relative  sm:-top-14 md:-top-14 lg:-top-16 xl:-top-15 flex flex-col items-center ">
            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light tracking-wide max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-2">
              {t('hero_subtitle')}
            </p>
            <div className="w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mt-1" />
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
          :global(.link) {
            display: inline-block;
            text-decoration: none;
          }
          :global(.fancyButton) {
            --border-color-1: #F09470;
            --border-color-2: #B7D9FE; /* Brighter */
            --background: #1A1A1A;
            --foreground: #D1D5DB;
            --border-radius: 2em;
            --border-angle: 0deg;
            --border-width: 1px;
            
            color: var(--foreground);
            font-size: calc(0.8rem + 1vmin);
            font-family: "Aspekta", sans-serif;
            border: 0;
            padding: var(--border-width);
            display: flex;
            width: max-content;
            border-radius: var(--border-radius);
            background-color: transparent;
            background-image: conic-gradient(
              from var(--border-angle) at 50% 50%,
              /* Orange Segment */
              var(--border-color-1) 0deg,
              var(--border-color-1) 175deg,
              /* Gap 1 */
              transparent 175deg,
              transparent 185deg,
              /* Blue Segment */
              var(--border-color-2) 185deg,
              var(--border-color-2) 355deg,
              /* Gap 2 */
              transparent 355deg,
              transparent 360deg
            );
            animation: rotateBackground 8s linear infinite;
            position: relative;
            z-index: 0;
            transition: color 0.4s ease;
          }

          :global(.fancyButton::before) {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: inherit;
            border-radius: inherit;
            animation: inherit;
            filter: blur(10px);
            z-index: -1;
          }

          :global(.fancyButton:hover) {
            color: white;
          }

          :global(.innerDiv) {
            background: var(--background);
            padding: 0.55em 1.5em;
            border-radius: calc(var(--border-radius) - var(--border-width));
            color: inherit;
            font-weight: 200;
            transition: color 0.3s ease;
          }
        `}</style>
      </div>
    </>
  );
};

export default Hero;


