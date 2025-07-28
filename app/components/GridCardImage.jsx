"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

// Review data
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/Portfolio2.png",
    width: "w-82",
  },
  {
    name: "John",
    username: "@jonhn",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/Portfolio1.png",
    width: "w-82",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-82",
  },
  {
    name: "John",
    username: "@john2",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/500px-Black_colour.jpg",
    width: "w-82",
  },
];

// Card component
const ReviewCard = ({ img, name, username, body, width, index, hoveredIndex, setHoveredIndex }) => {
  const isHovered = hoveredIndex === index;

  return (
    <div
      className={cn(
        "h-48 relative overflow-hidden rounded-xl shadow-md border border-gray-800 cursor-pointer",
        width
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={img}
        alt="Review image"
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          isHovered ? "grayscale-0" : "grayscale"
        )}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white pointer-events-none">
        {/* Optional content */}
      </div>
    </div>
  );
};

// Main component
export function MarqueeDemo() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const firstRow = reviews.slice(0, reviews.length / 1);
  const secondRow = reviews.slice(reviews.length / 2);

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
            background: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
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

        {/* Marquee Rows */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-8">
          {/* First Row - Left to Right */}
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, idx) => (
              <ReviewCard
                key={review.username + idx}
                {...review}
                index={idx}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Marquee>

          {/* Second Row - Right to Left */}
          <Marquee pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, idx) => (
              <ReviewCard
                key={review.username + "2_" + idx}
                {...review}
                index={idx + firstRow.length} // Ensure unique index
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
