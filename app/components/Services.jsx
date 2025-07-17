"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Xizmat tugmasi komponenti
const ServiceButton = React.forwardRef(({ children, onMouseEnter, onMouseLeave }, ref) => (
  <div
    className="buttonContainer"
    ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="innerContent">
      {children}
    </div>
  </div>
));

// SliderWrapper mobil uchun
const SliderWrapper = ({ children }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Har 3 soniyada slayd o'zgartirish
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="slider-mobile w-full overflow-hidden relative">
      <div
        ref={sliderRef}
        className="slider-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
          display: 'flex',
        }}
      >
        {React.Children.map(children, (child) => (
          <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>{child}</div>
        ))}
      </div>
    </div>
  );
};

function Services() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const buttonRefs = [useRef(null), useRef(null), useRef(null)];
  const [glowStyle, setGlowStyle] = useState({ left: '50%', width: '80px', opacity: 0 });

  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
    const ref = buttonRefs[idx].current;
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const parentRect = ref.parentNode.getBoundingClientRect();
      const left = rect.left - parentRect.left + rect.width / 2;
      setGlowStyle({
        left: `${left}px`,
        width: `${rect.width * 0.6}px`,
        opacity: 1,
        transition: 'left 0.3s cubic-bezier(.4,2,.6,1), width 0.3s cubic-bezier(.4,2,.6,1), opacity 0.2s',
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setGlowStyle({ ...glowStyle, opacity: 0 });
  };

  return (
    <>
      <section className="w-full bg-transparent py-24 flex flex-col items-center justify-center text-white relative z-10">
        <div className="w-full max-w-6xl mx-auto text-start px-8">
          
          {/* Sarlavha */}
          <h2 className="title text-7xl font-light mb-12 text-white">
            {t('services_title')}
          </h2>

          {/* Desktop: oddiy flex, Mobil: slider */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-8 mb-16 w-full">
            <ServiceButton
              ref={buttonRefs[0]}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              {t('services_button_personal_brand')}
            </ServiceButton>
            <ServiceButton
              ref={buttonRefs[1]}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              {t('services_button_digital_marketing')}
            </ServiceButton>
            <ServiceButton
              ref={buttonRefs[2]}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              {t('services_button_branding')}
            </ServiceButton>
          </div>

          {/* Mobil: slider */}
          <div className="sm:hidden mb-16 w-full overflow-hidden">
            <SliderWrapper>
              <ServiceButton>{t('services_button_personal_brand')}</ServiceButton>
              <ServiceButton>{t('services_button_digital_marketing')}</ServiceButton>
              <ServiceButton>{t('services_button_branding')}</ServiceButton>
            </SliderWrapper>
          </div>

          {/* Chiziq — porlash bilan */}
          <div className="relative w-full" style={{ minHeight: '8px' }}>
            {/* Asosiy xira chiziq: juda ingichka */}
            <div
              className="absolute top-1/2 left-0 w-full pointer-events-none"
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #fff6 50%, transparent 100%)',
                zIndex: 1,
                transform: 'translateY(-50%)',
              }}
            />
            {/* Porlash (glow) chizig'i: juda kichik va diffuz */}
            <div
              className="absolute top-1/2 pointer-events-none"
              style={{
                left: glowStyle.left,
                width: '40px',
                height: '3px',
                opacity: glowStyle.opacity,
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(90deg, transparent 0%, #fff 45%, #fff 55%, transparent 100%)',
                filter: 'blur(1px)',
                borderRadius: '4px',
                transition: 'left 0.7s cubic-bezier(.4,2,.6,1), opacity 0.3s',
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* CSS from ServiceButton.module.css is now here */
        @property --angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes rotateGradient {
          to { --angle: 360deg; }
        }

        /* Using :global() because these classes are in a child component */
        :global(.buttonContainer) {
          --border-color-1: rgba(183, 217, 254, 0.3); /* #B9D9FE shaffof */
          --border-color-2: rgb(240, 148, 112); /* #F09470 */
          --background: rgba(30, 29, 34, 1);
          --foreground: #D1D5DB;
          --border-size: 2px;
          --border-radius: 1rem;

          position: relative;
          cursor: pointer;
          min-width: 260px;
          flex-basis: 320px;
          flex-grow: 1;
          padding: var(--border-size);
          border-radius: var(--border-radius);
          background: linear-gradient(var(--background), var(--background)) padding-box,
            conic-gradient(from var(--angle), var(--border-color-1), var(--border-color-2), var(--border-color-1)) border-box;
          border: var(--border-size) solid transparent;
          animation: rotateGradient 3s linear infinite;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        

        :global(.innerContent) {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          border-radius: calc(var(--border-radius) - var(--border-size));
           color: var(--foreground);
          font-family: "PP Neue Montreal", sans-serif;
          font-weight: 300;
          font-style: normal;
          font-size: 30.8px;
          line-height: 1;
          letter-spacing: 0;
          transition: color 0.3s ease, background 0.3s ease;
        }

       

        /* Slider mobil uchun */
        @media (max-width: 640px) {
          .slider-mobile {
            height: 80px; /* Button balandligiga moslashtirildi */
            position: relative;
          }
          .slider-track {
            height: 100%;
          }
          :global(.buttonContainer) {
            min-width: 0 !important;
            flex-basis: 100% !important;
            width: 100% !important;
            max-width: 100vw !important;
          }
        }
      `}</style>
    </>
  );
}

export default Services;