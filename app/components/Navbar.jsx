'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
 import Modal from './Modal';
import { useLanguage } from '../context/LanguageContext';
 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Komponent o'chirilganda klassni olib tashlash
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsMenuOpen(false); // Agar ochiq bo'lsa, mobil menyuni yopish
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="w-full text-white fixed top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4 relative z-10">
         <div className="flex-1 flex justify-start items-center gap-2 text-sm">
          <button 
            onClick={() => setLanguage('ru')}
            className={language === 'ru' ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors focus:outline-none'}
          >
            Rus
          </button>
          <span className="text-gray-500">|</span>
          <button 
            onClick={() => setLanguage('uz')}
            className={language === 'uz' ? 'text-white font-medium' : 'text-gray-400 hover:text-white transition-colors focus:outline-none'}
          >
            Uzb
          </button>
        </div>

        {/* Desktop Navigation Links */}
    <div className="hidden md:flex justify-center flex-grow">
      <div
        className="group relative rounded-full p-px bg-white/10 hover:bg-white/20 transition-all duration-300 overflow-hidden"
      >
        {/* Spinning light effect on hover */}
        <div className="absolute inset-[-100%] w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 [mask:linear-gradient(black,transparent)] pointer-events- transition-300">
          <div
            className="absolute inset-0 group-hover:animate-[spin_2s_linear_infinite]"
            style={{
background: 'conic-gradient(from 90deg at 50% 50%, #ffffffaa, #ffffff 50%, #ffffffaa 100%)',
            }}
          />
        </div>
        
      <div className="relative flex items-center gap-8 px-8 py-2 rounded-full bg-gray-600/15 backdrop-blur-xl shadow-lg border border-white/10 font-montreal"
        style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
>
  {/* Shine effect */}
  <div className="absolute top-0 left-1/2 w-12 h-full bg-white/20 rounded-full blur-md transform -translate-x-1/2 pointer-events-none"></div>

  <Link
    href="/jamoa"
    className="text-sm text-white/90 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
  >
    {t("nav_team")}
  </Link>
  <Link
    href="/portfolio"
    className="text-sm text-white/90 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
  >
    {t("nav_portfolio")}
  </Link>
  <Link
    href="/xizmatlar"
    className="text-sm text-white/90 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
  >
    {t("nav_services")}
  </Link>
  <button
    onClick={handleOpenModal}
    className="text-sm text-white/90 hover:text-white transition-colors duration-200 font-medium whitespace-nowrap"
  >
    {t("nav_contact")}
  </button>
</div>


      </div>
    </div>    




          {/* Desktop Contact Info */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4">
            <a 
              href="tel:+998954193333" 
              className="text-sm text-white hover:text-white transition-colors duration-200"
            >
              +998 95 419 33 33
            </a>
           <button
  onClick={handleOpenModal}
  className="px-4 py-1.5 text-white bg-white/10 backdrop-blur-md border border-white/40 rounded-full hover:border-white/60 text-sm transition-all duration-200"
>
  {t('nav_contact')}
</button>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-1 flex justify-end">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center gap-6 py-8">
            <Link 
              href="/jamoa" 
              className="text-lg text-gray-300 hover:text-white transition-colors duration-200" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_team')}
            </Link>
            <Link 
              href="/portfolio" 
              className="text-lg text-gray-300 hover:text-white transition-colors duration-200" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_portfolio')}
            </Link>
            <Link 
              href="/xizmatlar" 
              className="text-lg text-gray-300 hover:text-white transition-colors duration-200" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_services')}
            </Link>
            <button 
              onClick={handleOpenModal}
              className="text-lg text-gray-300 hover:text-white transition-colors duration-200" 
            >
              {t('nav_contact')}
            </button>
            <div className="mt-4 flex flex-col items-center gap-4">
              <a 
                href="tel:+998954193333" 
                className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
              >
                +998 95 419 33 33
              </a>
              <button onClick={handleOpenModal} className="px-8 py-3 bg-white/10 border border-gray-600 rounded-full text-lg text-white transition-all duration-200">
                {t('nav_contact')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;