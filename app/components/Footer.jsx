 import React from 'react'
 import Link from 'next/link';
import Image from 'next/image';
const SocialIcon = ({ href, src, alt }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
    <Image src={src} alt={alt} width={25} height={25} className="w-8 h-8 sm:w-8 sm:h-9" />
  </Link>
);
 function Footer() {
   return (
     <div> 
         <footer className="w-full text-gray-400 pt-16 pb-8">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-end items-center gap-43">
    <div className="flex items-center gap-4">
      <SocialIcon href="#" src="/BE_Logo.svg" alt="Behance" />
      <SocialIcon href="#" src="/Telegram_Logo.svg" alt="Telegram" />
      <SocialIcon href="#" src="/Instagram_Logo.svg" alt="Instagram" />
      <SocialIcon href="#" src="/YoutTube_Logo.svg" alt="YouTube" />
    </div>
  <p
      className="text-xl  font-light ml-6 "
        >
      {("footer_powered_by", "The site is powered by Result")}
    </p>
  </div>
</footer>
     </div>
   )
 }
 
 export default Footer