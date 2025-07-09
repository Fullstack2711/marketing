"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
 
const Modal = ({ isOpen, onClose }) => {
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
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000); // 2 soniyadan so'ng modalni yopish
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Noma\'lum xatolik yuz berdi.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Server bilan bog\'lanishda xatolik.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !isClient) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-amber-300/20 z-10 relative w-full max-w-md mx-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h2 className="text-2xl font-light mb-6 text-center">{t('order_form_subtitle')}</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-center">
            Xabar muvaffaqiyatli yuborildi!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center">
            {errorMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="modal-name" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_name_label')}</label>
            <input
              id="modal-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors"
              placeholder={t('order_form_name_label')}
            />
          </div>
          <div>
            <label htmlFor="modal-contact" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_contact_label')}</label>
            <input
              id="modal-contact"
              name="contact"
              type="text"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors"
              placeholder={t('order_form_contact_label')}
            />
          </div>
          <div>
            <label htmlFor="modal-message" className="block text-sm font-light text-gray-400 mb-2">{t('order_form_message_label')}</label>
            <textarea
              id="modal-message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black/20 rounded-xl border border-white/10 focus:border-amber-300/50 focus:ring-0 outline-none transition-colors resize-none"
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
  );
};

export default Modal;
