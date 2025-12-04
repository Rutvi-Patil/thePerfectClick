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
  const [hasError, setHasError] = useState(false);

  // Validate video URL
  useEffect(() => {
    if (!src || typeof src !== 'string' || !src.trim()) {
      setHasError(true);
      return;
    }

    // Basic URL validation
    try {
      new URL(src);
    } catch {
      setHasError(true);
      return;
    }
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && autoplay && !hasError) {
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
  }, [autoplay, hasError]);

  // Add timeout to detect slow/failed video loading
  useEffect(() => {
    if (!src) return;

    const timeout = setTimeout(() => {
      if (!isLoaded && !hasError) {
        console.log('Video timeout reached for:', src);
        setHasError(true);
      }
    }, 15000); // Increased to 15 second timeout

    return () => clearTimeout(timeout);
  }, [src, isLoaded, hasError]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    console.log('Video loaded successfully:', src);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Prevent console errors by handling gracefully
    const videoElement = e.currentTarget;
    const errorCode = (videoElement as any).error?.code;
    const errorMessage = (videoElement as any).error?.message;
    
    // Only log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('Video loading failed:', {
        src,
        errorCode,
        errorMessage,
        networkState: videoElement.networkState,
        readyState: videoElement.readyState
      });
    }
    
    setHasError(true);
  };

  return (
    <div 
      className={`video-container video-container--relative relative flex-none w-full overflow-hidden text-[0px] ${className}`}
      style={{
        '--ratio-mobile': mobileRatio,
        '--ratio-desktop': desktopRatio,
      } as React.CSSProperties}
    >
      {hasError ? (
        // Fallback UI when video fails to load
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Video unavailable</p>
          </div>
        </div>
      ) : (
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
          Your browser does not support video tag.
        </video>
      )}
    </div>
  );
}
