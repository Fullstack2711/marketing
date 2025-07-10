"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "./Modal";
import { useLanguage } from "../context/LanguageContext";
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="w-full text-white absolute top-0 left-0 z-50">
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
              <div className="navContainer">
                <div className="innerNav">
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
              <a href="tel:+998954193333" className="text-sm text-white hover:text-white transition-colors duration-200">
                +998 95 419 33 33
              </a>
              <button
                onClick={handleOpenModal}
                className="px-4 py-1.5 text-white bg-white/10 backdrop-blur-md border border-white/40 rounded-full hover:border-white/60 text-sm transition-all duration-200"
              >
                {t("nav_contact")}
              </button>
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/80 backdrop-blur-lg absolute top-full left-0 w-full">
              <div className="flex flex-col items-center gap-6 py-8">
                <Link
                  href="/jamoa"
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav_team")}
                </Link>
                <Link
                  href="/portfolio"
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav_portfolio")}
                </Link>
                <Link
                  href="/xizmatlar"
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav_services")}
                </Link>
                <button
                  onClick={handleOpenModal}
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t("nav_contact")}
                </button>
                <div className="mt-4 flex flex-col items-center gap-4">
                  <a href="tel:+998954193333" className="text-lg text-gray-300 hover:text-white transition-colors duration-200">
                    +998 95 419 33 33
                  </a>
                  <button
                    onClick={handleOpenModal}
                    className="px-8 py-3 bg-white/10 border border-gray-600 rounded-full text-lg text-white transition-all duration-200"
                  >
                    {t("nav_contact")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo.png"
              alt="Result Logo"
              width={150}
              height={70}
              className="opacity-90 w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16"
            />
          </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes rotateGradient {
          to {
            --angle: 360deg;
          }
        }

        .navContainer {
          --border-color-1: rgba(145, 145, 145, 0.3);
          --border-color-2: rgb(218, 217, 217);
          --background: #8f8f8fa8;
          --foreground: #d1d5db00;
          --border-size: 1px;
          --border-radius: 1.5rem;

          position: relative;
          padding: var(--border-size);
          border-radius: var(--border-radius);
          background: linear-gradient(var(--background), var(--background))
              padding-box,
            conic-gradient(
                from var(--angle),
                var(--border-color-1),
                var(--border-color-2),
                var(--border-color-1)
              )
              border-box;
          border: var(--border-size) solid transparent;
          animation: rotateGradient 3s linear infinite;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .navContainer:hover {
          transform: scale(1.02);
          opacity: 1;
        }

        .innerNav {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 0.5rem 2rem;
          border-radius: calc(var(--border-radius) - var(--border-size));
          background: var(--background);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: "PP Neue Montreal", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Navbar;