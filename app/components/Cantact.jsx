"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const OrderForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Bu hook faqat klient tomonida, komponent DOMga qo'shilgandan so'ng ishlaydi.
    setIsClient(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', contact: '', message: '' });
      } else {
        setSubmitStatus('error');
        if (result.message && result.message.includes('chat not found')) {
          setErrorMessage('Konfiguratsiya xatosi: Telegram chat topilmadi. Administrator CHAT_ID ni tekshirishi kerak.');
        } else {
          setErrorMessage(result.message || 'Noma\'lum xatolik yuz berdi.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Server bilan bog\'lanishda xatolik. Internet aloqasini tekshiring.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    // Serverda va klientning birinchi renderida hech narsa ko'rsatilmaydi.
    // Bu server va klient HTML'ining bir xil bo'lishini ta'minlaydi.
    return null;
  }

  return (
    <section className="w-full bg-transparent flex items-center justify-center text-white py-20 px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        
        {/* Left Side Title */}
        <div className="text-start z-20 relative">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight text-white">
            {t('order_form_title')}
          </h1>
        </div>

        {/* Right Side Form */}
        <div className="backdrop-blur-lg rounded-3xl p-8 border border-[#F09470] z-10 relative bg-[#FFFFFF33]">
          <h2 className="text-2xl font-light mb-6 text-center text-white">{t('order_form_subtitle')}</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200">
              Xabar muvaffaqiyatli yuborildi!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_name_label')}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/20 rounded-xl border border-[#F09470] focus:border-[#F09470] focus:ring-0 outline-none transition-colors"
                placeholder={t('order_form_name_label')}
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_contact_label')}</label>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/20 rounded-xl border border-[#F09470] focus:border-[#F09470] focus:ring-0 outline-none transition-colors"
                placeholder={t('order_form_contact_label')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_message_label')}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-black/20 rounded-xl border border-[#F09470] focus:border-[#F09470] focus:ring-0 outline-none transition-colors resize-none"
                placeholder={t('order_form_message_label')}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Yuborilmoqda...' : t('order_form_submit_button')}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default OrderForm;
