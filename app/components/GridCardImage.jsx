"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-52",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-80",
  },
  {
    name: "John",
    username: "@jonhn",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-150",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-62",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-80",
  },
  {
    name: "John",
    username: "@john2",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-150",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, width }) => {
  return (
    <div
      className={cn(
        "h-48 relative overflow-hidden rounded-xl shadow-md border border-gray-800 bg-black cursor-pointer",
        width
      )}
    >
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
      <div className="mx-auto">
        {/* Title */}
        <h2
          className="marque font-medium mb-16 text-start"
          style={{
            fontFamily: "PP Neue Montreal",
            fontStyle: "Medium",
            fontSize: "clamp(50px, 7vw, 100px)",
            fontWeight: 400,
            maxWidth: "743px",
            lineHeight: 1.3,
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            position: "relative",
            left: "5%",
            fontStretch: "100%",
          }}
        >
          {t("customers_title")}
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
