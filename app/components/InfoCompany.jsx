"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function InfoCompany() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#1E1D22] text-gray-300 py-24 px-8 md:px-16 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <h2 className="text-2xl font-light text-white">
            {t('info_company_title')}
          </h2>
          <p className="font-light leading-relaxed">
            {t('info_company_p1')}
          </p>
          <p className="font-light leading-relaxed">
            {t('info_company_p2')}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
            <div>
              <h3 className="font-light text-gray-400 mb-1">{t('info_company_contact_label')}</h3>
              <p className="font-normal text-white">+998 95 419 33 33</p>
            </div>
            <div>
              <h3 className="font-light text-gray-400 mb-1">{t('info_company_gmail_label')}</h3>
              <p className="font-normal text-white">resultmarketing.uz@gmail.com</p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="font-light text-gray-400 mb-1">{t('info_company_address_label')}</h3>
              <p className="font-normal text-white">Kichik halqa yo'li, Gloriya premium interiors</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image/Video Placeholder */}
        <div className="bg-white rounded-3xl h-[500px] w-full">
          {/* Bu yerga rasm yoki video joylashtiriladi */}
        </div>
      </div>
    </section>
  );
}

export default InfoCompany;