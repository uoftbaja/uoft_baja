"use client";

import Image from "next/image";

const ImageGallery = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <Image
        src="/baja_1.png"
        alt="UofT Baja Racing Team"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-5xl font-bold text-center">
          University of Toronto Baja Racing Team
        </h1>
      </div>
    </div>
  );
};

export default ImageGallery;
