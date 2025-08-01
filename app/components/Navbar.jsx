"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { useLanguage } from "../context/LanguageContext";
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen, isModalOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleOpenModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`w-full text-white fixed top-0 left-0 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo va container faqat menu yopiq bo'lsa ko'rsatiladi */}
        {!isMenuOpen && (
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center relative z-10">
              {/* Language Switcher */}
              <div className="flex-1 flex justify-start items-center gap-2 text-sm">
                <button
                  onClick={() => setLanguage("ru")}
                  className={language === "ru" ? "text-white font-medium" : "text-gray-400 hover:text-white transition-colors focus:outline-none"}
                >
                  Rus
                </button>
                <span className="text-gray-500">|</span>
                <button
                  onClick={() => setLanguage("uz")}
                  className={language === "uz" ? "text-white font-medium" : "text-gray-400 hover:text-white transition-colors focus:outline-none"}
                >
                  Uzb
                </button>
              </div>

              {/* Desktop Navigation Links */}
             <div className="hidden md:flex justify-center flex-grow">
  <div className="navContainer px-1 py-1 rounded-full">
    <div className="innerNav">
      <a
        href="#"
        className="navLink"
        onClick={(e) => handleScrollTo(e, '')}
      >
        {t("nav_team")}
      </a>
      <a
        href="#portfolio"
        className="navLink"
        onClick={(e) => handleScrollTo(e, 'portfolio')}
      >
        {t("nav_portfolio")}
      </a>
      <a
        href="#xizmatlar"
        className="navLink"
        onClick={(e) => handleScrollTo(e, 'xizmatlar')}
      >
        {t("nav_services")}
      </a>
      <a
        href="#contact"
        className="navLink"
        onClick={(e) => handleScrollTo(e, 'contact')}
      >
        {t("nav_contact")}
      </a>
    </div>
  </div>
</div>


              {/* Desktop Contact Info */}
              <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                <a href="tel:+998954193333" className="text-sm text-white hover:text-white transition-colors duration-200">
                  +998 95 419 33 33
                </a>
               <div className="animated-border-btn rounded-full">
  <button
    onClick={handleOpenModal}
    className="btn-inner px-4 py-1.5 text-white text-sm transition-all duration-200 rounded-full"
  >
    {t("nav_contact")}
  </button>
</div>

              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex-1 flex justify-end">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    ></path>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
<div className="md:hidden fixed inset-0 w-full min-h-screen z-50 flex flex-col"
     style={{
       background: 'linear-gradient(135deg, #1E1D22, #0C0B10)',
       backdropFilter: 'blur(16px)',
       backgroundColor: 'rgba(30, 29, 34, 0.8)' // optional for fallback
     }}
>
            {/* Bog'lanish buttoni eng tepadagi chap burchakda */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="absolute top-4 left-4 px-4 py-1.5 border border-white/30 rounded-full text-base text-white bg-transparent backdrop-blur-md"
              style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
            >
              {t("nav_contact")}
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl px-2"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col justify-center items-center flex-1 gap-10">
              <a
                href="#"
                className="text-xl text-white font-light"
                style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
                onClick={(e) => handleScrollTo(e, 'jamoa')}
              >
                {t("nav_team")}
              </a>
              <a
                href="#portfolio"
                className="text-xl text-white font-light"
                style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
                onClick={(e) => handleScrollTo(e, 'portfolio')}
              >
                {t("nav_portfolio")}
              </a>
              <a
                href="#xizmatlar"
                className="text-xl text-white font-light"
                style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
                onClick={(e) => handleScrollTo(e, 'xizmatlar')}
              >
                {t("nav_services")}
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="text-xl text-white font-light" style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}>
                {t("nav_contact")}
              </a>
              <span className="text-base text-white/80 font-light mt-6" style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}>
                +998 95 419 33 33
              </span>
            </div>
          </div>
        )}
        {/* Logo */}
        {!isMenuOpen && lastScrollY < 50 && (
          <div className="flex justify-center mb-6 transition-opacity duration-300">
            <Image
              src="/Logo.png"
              alt="Result Logo"
              width={150}
              height={70}
              className="opacity-90 w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
            />
          </div>
        )}
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style jsx>{`

.navContainer {
  --border-color-1: rgba(240, 240, 240, 0.9);
  --border-color-2: rgba(255, 255, 255, 0.3);
  --angle: 0deg;
  background:
    linear-gradient(#424145FF, #424145FF) padding-box,
    conic-gradient(from var(--angle), var(--border-color-1), var(--border-color-2), var(--border-color-1)) border-box;
  animation: rotateGradient 5s linear infinite;
  border: 1px solid transparent;
  border-radius: 9999px;
  position: relative;
  opasity: 1;
  
}

.innerNav {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0.1rem 1rem;
  border-radius: 9999px;
  background: #424145FF;
  backdrop-filter: blur(10px);
   font-family: "PP Neue Montreal", sans-serif;
  opacity: 100;
}

.navLink {
 
  color: white;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-weight: 400;
}

 


.animated-border-btn {
  --border-angle: 0deg;
  --border-color-1: rgba(255, 255, 255, 0.7);
  --border-color-2: rgba(255, 255, 255, 0.3);
  --border-radius: 9999px;
  --border-size: 1px;
  padding: var(--border-size); /* border qalinligi */
  border-radius: var(--border-radius);
  background-image:
    conic-gradient(
      from var(--border-angle),
      var(--border-color-1),
      var(--border-color-2),
      var(--border-color-1)
    );
  animation: rotateBorder 4s linear infinite;
}

.btn-inner {
  background-color:  #1E1D22;
   border-radius: inherit;
   color: white;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-inner:hover {
  background-color:  #1E1D22;
}
      `}</style>
    </>
  );
}

export default Navbar; 0
