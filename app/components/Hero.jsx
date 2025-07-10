"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const AnimatedBorderButton = ({ href, label }) => {
  return (
    <Link href={href} className="link">
      <button className="fancyButton">
        <div className="innerDiv">{label}</div>
      </button>
    </Link>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 pb-15       ">
        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-between mb-12">
              {/* Left Button */}
              <div className="flex-shrink-0">
                <AnimatedBorderButton href="/connection" label={t('hero_button_connection')} />
              </div>

              {/* Main Title */}
              <div className="flex-1 mx-8 xl:mx-12 h-56 flex items-center justify-center">
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
            <div className="mb-8 sm:mb-10 h-40 flex items-center justify-center">
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

        <style jsx>{`
          @property --border-angle-1 {
            syntax: "<angle>";
            inherits: true;
            initial-value: 0deg;
          }

          @property --border-angle-2 {
            syntax: "<angle>";
            inherits: true;
            initial-value: 90deg;
          }

          @property --border-angle-3 {
            syntax: "<angle>";
            inherits: true;
            initial-value: 180deg;
          }

          @keyframes rotateBackground {
            to { --border-angle-1: 360deg; }
          }

          @keyframes rotateBackground2 {
            to { --border-angle-2: -270deg; }
          }

          @keyframes rotateBackground3 {
            to { --border-angle-3: 540deg; }
          }

          :global(.link) {
            display: inline-block;
            text-decoration: none;
          }

          :global(.fancyButton) {
            --border-color-1: rgba(183, 217, 254, 0.2); /* #B7D9FE33 20% shaffoflik */
            --border-color-2: rgb(240, 148, 112); /* #F09470 */
            --background: #1A1A1A;
            --foreground: #D1D5DB;
            --border-size: 1px;
            --border-radius: 2em;

            --border-angle-1: 0deg;
            --border-angle-2: 90deg;
            --border-angle-3: 180deg;
            color: var(--foreground);
            font-size: calc(0.8rem + 1vmin);
            font-family: "Aspekta", sans-serif;
            border: 0;
            padding: var(--border-size);
            display: flex;
            width: max-content;
            border-radius: var(--border-radius);
            background-color: transparent;
            background-image: conic-gradient(
                from var(--border-angle-1) at 10% 15%,
                transparent,
                var(--border-color-2) 10%,
                transparent 30%,
                transparent
              ),
              conic-gradient(
                from var(--border-angle-2) at 70% 60%,
                transparent,
                var(--border-color-1) 10%,
                transparent 60%,
                transparent
              ),
              conic-gradient(
                from var(--border-angle-3) at 50% 20%,
                transparent,
                var(--border-color-2) 10%,
                transparent 50%,
                transparent
              );
            animation: 
              rotateBackground 3s linear infinite,
              rotateBackground2 8s linear infinite,
              rotateBackground3 13s linear infinite;
            transition: color 0.3s ease;
          }

          :global(.fancyButton:hover) {
            color: white;
          }

          :global(.innerDiv) {
            background: var(--background);
            padding: 0.55em 1.5em;
            border-radius: calc(var(--border-radius) - var(--border-size));
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