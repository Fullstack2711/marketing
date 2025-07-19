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
    return null;
  }

  const InputWrapper = ({ children }) => {
    return (
      <div className="animated-border">
        <div className="inner">{children}</div>
      </div>
    );
  };

  return (
    <section className="w-full bg-transparent flex items-center justify-center text-white py-16 px-4 sm:px-8 relative z-10 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start w-full max-w-6xl mx-auto">

        {/* Left Side Title */}
        <div className="text-start z-20 relative px-2 md:px-0">
          <h1 className="hidden md:block text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-white">
  {t('order_form_title')}
</h1>

        </div>

        {/* Right Side Form */}
<div className="w-full max-w-md md:max-w-lg lg:max-w-xl backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-[#F09470] z-10 relative bg-[#FFFFFF33] mx-auto">
          <h2 className="text-xl sm:text-2xl font-light mb-8 text-center text-white md:display:none">
            {t('order_form_subtitle')}
          </h2>

          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
              Xabar muvaffaqiyatli yuborildi!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputWrapper>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="inputStyle w-full placeholder-cyan-50"
                placeholder={t('order_form_name_label')}
              />
            </InputWrapper>

            <InputWrapper>
              <input
                id="contact"
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="inputStyle w-full placeholder-cyan-50"
                placeholder={t('order_form_contact_label')}
              />
            </InputWrapper>

            <InputWrapper>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="inputStyle resize-none w-full placeholder-cyan-50"
                placeholder={t('order_form_message_label')}
              ></textarea>
            </InputWrapper>

            <InputWrapper>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inputStylebtn w-full text-center cursor-pointer"
              >
                {isSubmitting ? 'Yuborilmoqda...' : t('order_form_submit_button')}
              </button>
            </InputWrapper>
          </form>
        </div>

      </div>
    </section>
  );
};

export default OrderForm;
