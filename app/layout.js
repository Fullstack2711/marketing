import { Geist, Geist_Mono } from "next/font/google";
// app/layout.js
import './globals.css';
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Result Marketing",
  description: "Result Marketing is a digital marketing agency that specializes in helping businesses grow their online presence and achieve their marketing goals.",
  icons: {
    icon: "/Logo.png", 
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
