"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const OrderForm = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#111111] py-24 flex flex-col items-center justify-center text-white relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        
        {/* Left Side Title */}
        <div className="text-start z-20 relative">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight text-white">
            {t('order_form_title')}
          </h1>
        </div>

        {/* Right Side Form */}
        <div className="backdrop-blur-lg rounded-3xl p-8 border border-amber-300/20 z-10 relative bg-[#FFFFFF33]">
  <h2 className="text-2xl font-light mb-6 text-center text-white">{t('order_form_subtitle')}</h2>
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_name_label')}</label>
      <input
        id="name"
        type="text"
        className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors"
        placeholder={t('order_form_name_label')}
      />
    </div>
    <div>
      <label htmlFor="contact" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_contact_label')}</label>
      <input
        id="contact"
        type="text"
        className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors"
        placeholder={t('order_form_contact_label')}
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_message_label')}</label>
      <textarea
        id="message"
        rows="4"
        className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors resize-none"
        placeholder={t('order_form_message_label')}
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
    >
      {t('order_form_submit_button')}
    </button>
  </form>
</div>

      </div>
    </section>
  );
};

export default OrderForm;
