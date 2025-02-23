// components/background-video.tsx
"use client";

import React from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  style?: React.CSSProperties;
}

export default function BackgroundVideo({
  videoSrc,
  className = "absolute top-0 left-0 w-full h-full object-cover",
  loop = true,
  muted = true,
  autoPlay = true,
  style = {},
}: BackgroundVideoProps) {
  return (
    <video
      src={videoSrc}
      className={className}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      style={style}
      playsInline // Add this for mobile support
    />
  );
}