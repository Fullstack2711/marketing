"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
 
function InfoCompany() {
  const { t } = useLanguage();

  const SocialIcon = ({ href, src, alt }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
    >
      <Image
        src={src}
        alt={alt}
        width={45}
        height={25}
        className="w-6 h-6 sm:w-8 sm:h-8"
      />
    </Link>
  );

  const handleLocation = () => {
    window.open(
      "https://maps.app.goo.gl/cBU8NbFvBkjH6UbLA"
    );
  };


  const SocialIcons = () => (
    <div className="flex items-center gap-2">
      <SocialIcon href="#" src="/BE_Logo.svg" alt="Behance" />
      <SocialIcon href="#" src="/Telegram_Logo.svg" alt="Telegram" />
      <SocialIcon href="#" src="/Instagram_Logo.svg" alt="Instagram" />
      <SocialIcon href="#" src="/YoutTube_Logo.svg" alt="YouTube" />
    </div>
  );

  return (
    <section className="font-ppneue w-full   text-white text-light py-16 px-6 sm:px-8 md:px-16 overflow-x-hidden ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Text */}
        <div
          className="space-y-6 text-[18px] leading-[26px] "
          
        >
          <h2 className="text-2xl  font-ppneue text-white">
            {t("info_company_title", "Result marketing agency")}
          </h2>
          <p>
            {t(
              "info_company_p1",
              "Result Marketing - bu shaxsiy brendlar va raqamli marketing boʻyicha ixtisoslashgan agentlik. Biz 6 yildan buyon brendlarning asl mohiyatini ochamiz, ularni shakllantiramiz va odamlarga to'g'ri yetkazamiz."
            )}
          </p>
          <p>
            {t(
              "info_company_p2",
              "Tahlil, strategiya, kontent, dizayn va kommunikatsiya bizning asosiy kuchli tomonlarimiz. Har bir xizmatimiz brend o'sishini tezlashtirish va haqiqiy natija berish uchun mo'ljallangan."
            )}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
            <div>
              <h3 className="text-gray-400 mb-1">
                {t("info_company_contact_label", "Aloqa uchun:")}
              </h3>
              <p className="text-white">+998 95 419 33 33</p>
            </div>
            <div>
              <h3 className="text-gray-400 mb-1">
                {t("info_company_gmail_label", "Gmail:")}
              </h3>
              <p className="text-white">resultmarketing.uz@gmail.com</p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-gray-400 mb-1">
                {t("info_company_address_label", "Manzil:")}
              </h3>
              <p className="text-white">
                 {t("info_company_adress", "Kichik halqa yo’li, Gloriya premium interiors")}
               </p>
            </div>
          </div>
        </div>

        {/* Right Side: Video Placeholder + Mobile Icons */}
        <div className="flex flex-col items-start w-full gap-4">
          {/* Icons for Mobile Only */}
          <div className="md:hidden pb-2">
            <SocialIcons />
          </div>

          {/* Video or Image */}
          <div onClick={handleLocation} className=" rounded-4xl h-[350px] sm:h-[480px] w-full overflow-hidden relative px-4 py-6 cursor-pointer">
            <video
              src="/cd.mp4"
              autoPlay
              loop
              muted
              className="object-cover mx-auto  h-full "
              style={{ width: "90%", height: "100%" , borderRadius: "35px", border: "1px solid #fff" }}
            ></video>
          </div>
        </div>
      </div>

      {/* Footer: Icons for Desktop Only */}
      <footer className="w-full pt-10 pb-4 mt-10 relative">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-15 lg:relative left-10">
    <div className="hidden md:flex items-center gap-4">
      <SocialIcons />
    </div>
    <p className="glow-text font-ppneue text-[18px] text-white text-center">
      {t("footer_powered_by", "The site is powered by Result")}
    </p>
  </div>
</footer>

    </section>
  );
}

export default InfoCompany;
