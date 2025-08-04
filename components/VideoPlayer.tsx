"use client";
import Image from "next/image";
import { useState, MouseEvent, KeyboardEvent } from "react";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  altText?: string;
}

export default function VideoPlayer({
  videoSrc,
  thumbnailSrc,
  altText = "Video thumbnail",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isEmbedUrl = videoSrc.startsWith("http");

  const handleOverlayClick = (
    event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <div
      className="relative w-full max-w-[1060px] aspect-video mx-auto rounded-xl overflow-hidden shadow-lg"
      style={{ cursor: isPlaying ? "default" : "pointer" }}
    >
      {isPlaying ? (
        isEmbedUrl ? (
          <iframe
            src={videoSrc}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            className="w-full h-full"
            title={altText}
          />
        ) : (
          <video
            src={videoSrc}
            autoPlay
            controls
            loop
            muted
            className="w-full h-full object-cover"
          />
        )
      ) : (
        <img
          src={thumbnailSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      )}

      {!isPlaying && (
        <div
          className="absolute inset-0 flex bg-[#FFFFFF17] backdrop-blur-sm justify-center items-center transition-opacity duration-300 z-10"
          onClick={handleOverlayClick}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleOverlayClick(event);
            }
          }}
        >
          <div className="flex justify-center items-center rounded-full p-4 shadow-lg bg-surface-secondary  border border-secondary-200 ">
            <div className="relative w-5 h-5 rounded-lg">
              <Image
                src="/assets/icons/play.svg"
                alt="Resume"
                width={32}
                height={32}
                className="object-contain rounded-lg text-black"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
