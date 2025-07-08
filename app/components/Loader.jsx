"use client";
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <video
        className="w-[280px] h-auto object-contain"
        src="/loading.gif.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Loader;
