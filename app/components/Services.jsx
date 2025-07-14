"use client";
import React, { useRef, useState } from 'react';
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

// MarqueeWrapper faqat mobil uchun
const MarqueeWrapper = ({ children, isPaused, onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd }) => (
  <div
    className="marquee-mobile"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    style={{
      animationPlayState: isPaused ? 'paused' : 'running',
    }}
  >
    <div className="marquee-track">{children}{children}</div>
  </div>
);

function Services() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const buttonRefs = [useRef(null), useRef(null), useRef(null)];
  const [glowStyle, setGlowStyle] = useState({ left: '50%', width: '80px', opacity: 0 });
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

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

  // Marquee pause uchun eventlar
  const handleMarqueePause = () => setIsMarqueePaused(true);
  const handleMarqueeResume = () => setIsMarqueePaused(false);

  return (
    <>
      <section className="w-full bg-transparent py-24 flex flex-col items-center justify-center text-white relative z-10">
        <div className="w-full max-w-6xl mx-auto text-start px-8">
          
          {/* Sarlavha */}
          <h2 className="title text-7xl font-light mb-12 text-white">
            {t('services_title')}
          </h2>

          {/* Desktop: oddiy flex, Mobil: marquee */}
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

          {/* Mobil: marquee */}
          <div className="sm:hidden mb-16 w-full overflow-x-hidden">
            <MarqueeWrapper
              isPaused={isMarqueePaused}
              onMouseEnter={handleMarqueePause}
              onMouseLeave={handleMarqueeResume}
              onTouchStart={handleMarqueePause}
              onTouchEnd={handleMarqueeResume}
            >
              <ServiceButton>{t('services_button_personal_brand')}</ServiceButton>
              <ServiceButton>{t('services_button_digital_marketing')}</ServiceButton>
              <ServiceButton>{t('services_button_branding')}</ServiceButton>
            </MarqueeWrapper>
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
          cursor:pointer;
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

        :global(.buttonContainer:hover) {
          transform: scale(1.02);
          background: linear-gradient(rgba(12, 11, 16, 1), rgba(12, 11, 16, 1)) padding-box,
            conic-gradient(from var(--angle), var(--border-color-1), var(--border-color-2), var(--border-color-1)) border-box;
        }

        :global(.innerContent) {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          border-radius: calc(var(--border-radius) - var(--border-size));
          background: var(--background);
          color: var(--foreground);
          font-family: "PP Neue Montreal", sans-serif;
          font-weight: 300;
          font-style: normal;
          font-size: 30.8px;
          line-height: 1;
          letter-spacing: 0;
          transition: color 0.3s ease, background 0.3s ease;
        }

        :global(.buttonContainer:hover .innerContent) {
          background: rgba(12, 11, 16, 1);
          color: white;
        }

        /* Marquee mobil uchun */
        @media (max-width: 640px) {
          .marquee-mobile {
            width: 100vw;
            overflow: hidden;
            position: relative;
            height: 70px;
            user-select: none;
          }
          .marquee-track {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: marquee-move 12s linear infinite;
            will-change: transform;
          }
        }
        @keyframes marquee-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

export default Services;
