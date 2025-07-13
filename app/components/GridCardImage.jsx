"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className="w-72 h-48 relative overflow-hidden rounded-xl shadow-md border border-gray-800 bg-black cursor-pointer">
      <img
        src={img}
        alt="Review image"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        {/* <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-300">{username}</p> */}
        {/* <p className="text-sm mt-2">{body}</p> */}
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white py-20 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="font-medium text-black mb-16 text-start"
          style={{
            fontSize: 'clamp(40px, 6vw, 110px)',
            maxWidth: '743px',
            lineHeight: 1,
          }}
        >
          {t('customers_title')}
        </h2>

        {/* Marquee Carousel */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-8">
          {/* Birinchi qator - chapdan o‘ngga */}
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Ikkinchi qator - ongdan chapga */}
          <Marquee pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
