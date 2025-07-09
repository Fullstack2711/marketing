"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Xizmat tugmasi komponenti
const ServiceButton = ({ children }) => (
  <div className="group relative min-w-[260px] basis-[320px] flex-grow rounded-2xl p-px bg-amber-300/20 hover:bg-amber-300/40 transition-all duration-300 overflow-hidden">
    {/* Spinning light effect on hover */}
    <div className="absolute inset-[-100%] w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(black,transparent)] pointer-events-none">
      <div
        className="absolute inset-0 group-hover:animate-[spin_2s_linear_infinite]"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #F09470, #B9D9FE 50%, #F09470 100%)',
        }}
      />
    </div>

    <div
      className="relative z-10 w-full h-full px-10 py-4 bg-[rgba(30,29,34,1)] rounded-[15px] text-gray-300 group-hover:bg-[rgba(12,11,16,1)] group-hover:text-white transition-colors duration-300 flex items-center justify-center"
      style={{
        fontFamily: "'PP Neue Montreal', sans-serif",
        fontWeight: 300,
        fontStyle: "normal",
        fontSize: "30.8px",
        lineHeight: 1,
        letterSpacing: 0,
      }}
    >
      {children}
    </div>
  </div>
);

// Asosiy `Services` komponenti
function Services() {
  const { t } = useLanguage();
  return (
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
  );
}

export default Services;