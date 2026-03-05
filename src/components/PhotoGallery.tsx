"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  columns?: 2 | 3;
}

export default function PhotoGallery({
  photos,
  columns = 3,
}: PhotoGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = photos.map((p) => ({ src: p.src, alt: p.alt }));

  const colClass =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <>
      <div className={`grid gap-3 ${colClass}`}>
        {photos.map((photo, i) => (
          <button
            key={i}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIndex(i)}
            aria-label={`Zobrazit: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/25 transition-all duration-300" />

            {/* Caption on hover */}
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-text-dark/80 text-white text-xs font-sans px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </div>
            )}

            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        on={{
          view: ({ index: i }) => setIndex(i),
        }}
      />
    </>
  );
}
