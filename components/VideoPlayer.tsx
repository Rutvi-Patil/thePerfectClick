'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  mobileRatio?: string;
  desktopRatio?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
}

export default function VideoPlayer({
  src,
  className = "",
  mobileRatio = "1080 / 1350",
  desktopRatio = "2560 / 1440",
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  playsInline = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && autoplay) {
              videoRef.current.play().catch(() => {
                // Autoplay was prevented, which is normal
              });
            }
          } else {
            setIsInView(false);
            if (videoRef.current && autoplay) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [autoplay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    console.log('Video loaded successfully:', src);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error('Video error:', e);
    console.error('Video src:', src);
  };

  return (
    <div 
      className={`video-container video-container--relative relative flex-none w-full overflow-hidden text-[0px] ${className}`}
      style={{
        '--ratio-mobile': mobileRatio,
        '--ratio-desktop': desktopRatio,
      } as React.CSSProperties}
    >
      <video
        ref={videoRef}
        className="object-cover object-center relative w-full h-full"
        preload="metadata"
        crossOrigin="anonymous"
        playsInline={playsInline}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        onLoadedData={handleLoadedData}
        onError={handleError}
        data-inview={isInView}
        data-playing={isInView && isLoaded}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
