"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Send, Instagram, Youtube } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <div className="p-2 bg-gray-800/60 rounded-lg transition-colors duration-200 hover:bg-gray-700/80">
      <Icon
        className="w-5 h-5"
        style={{ color: '#737373' }} // Default gray (kulrang)
        onMouseEnter={e => (e.currentTarget.style.color = '#A0A0A0')} // Lighter gray on hover
        onMouseLeave={e => (e.currentTarget.style.color = '#737373')} // Back to default gray
      />
    </div>
  </Link>
);

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#1c1b1f] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-20 sm:gap-62">
        <div className="flex items-center gap-5">
          <SocialIcon href="#" icon={Send} />
          <SocialIcon href="#" icon={Instagram} />
          <SocialIcon href="#" icon={Youtube} />
        </div>
        <p className="text-sm text-gray-500">{t('footer_powered_by', 'The site is powered by Result')}</p>
      </div>
    </footer>
  );
};

export default Footer;