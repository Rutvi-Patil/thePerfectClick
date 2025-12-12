"use client";

import React, { useEffect } from 'react';

type InstagramEmbedProps = {
  url: string;
  className?: string;
};

export default function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  useEffect(() => {
    const ensureEmbedStyles = (root: Element | Document = document) => {
      // find iframe inserted by Instagram embed
      const iframe = root.querySelector<HTMLIFrameElement>(".instagram-media iframe, iframe[src*='instagram.com']");
      if (iframe) {
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.maxHeight = "100%";
        iframe.style.display = "block";
        iframe.style.border = "0";
        // some embedded iframes are wrapped; make sure parents also stretch
        let parent = iframe.parentElement;
        while (parent && parent !== document.body) {
          (parent as HTMLElement).style.height = "100%";
          (parent as HTMLElement).style.width = "100%";
          parent = parent.parentElement;
        }
      }
    };

    // load script if missing
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => {
        // process blockquotes to inject iframe
        try {
          (window as any).instgrm?.Embeds?.process?.();
        } catch {}
        // then apply styles so it fills the aspect box
        ensureEmbedStyles();
        // small timeout in case Instagram injects later
        setTimeout(() => ensureEmbedStyles(), 300);
      };
      document.body.appendChild(s);
    } else {
      // script already present — make sure embed is processed & styled
      try {
        (window as any).instgrm?.Embeds?.process?.();
      } catch {}
      ensureEmbedStyles();
      setTimeout(() => ensureEmbedStyles(), 300);
    }
  }, []);

  return (
    <div className={`relative w-full aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center ${className}`}>
      <blockquote
        className="instagram-media w-full h-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: "100%", height: "100%", margin: "0" }}
      >
        <a href={url}>View this Reel on Instagram</a>
      </blockquote>
    </div>
  );
}
