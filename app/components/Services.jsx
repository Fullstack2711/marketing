"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Xizmat tugmasi komponenti
const ServiceButton = ({ children }) => (
  <div className="buttonContainer">
    <div className="innerContent">
      {children}
    </div>
  </div>
);

 function Services() {
  const { t } = useLanguage();
  return (
    <>
      <section className="w-full bg-transparent py-24 flex flex-col items-center justify-center text-white relative z-10">
        <div className="w-full max-w-6xl mx-auto text-start px-8">
          
          {/* Sarlavha */}
          <h2 className="title text-7xl font-light mb-12 text-white">
            {t('services_title')}
          </h2>

          {/* Xizmat tugmalari */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 w-full">
            <ServiceButton>{t('services_button_personal_brand')}</ServiceButton>
            <ServiceButton>{t('services_button_digital_marketing')}</ServiceButton>
            <ServiceButton>{t('services_button_branding')}</ServiceButton>
          </div>

          {/* Chiziq — porlash bilan */}
          <div className="relative w-full h-px bg-white/20">
            <div className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
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
      `}</style>
    </>
  );
}

export default Services;
