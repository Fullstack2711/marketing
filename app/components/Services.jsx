"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from "../ServiceButton.module.css";

// Xizmat tugmasi komponenti
const ServiceButton = ({ children }) => (
  <div className={styles.buttonContainer}>
    <div className={styles.innerContent}>
      {children}
    </div>
  </div>
);

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