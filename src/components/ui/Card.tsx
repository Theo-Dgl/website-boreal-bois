"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  href?: string;
  className?: string;
}

export function Card({
  title,
  imageSrc,
  imageAlt = "",
  children,
  href,
  className = "",
}: CardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative overflow-hidden rounded-lg border border-charcoal/5 bg-linen shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${className}`}
    >
      {/* Terracotta accent line on hover */}
      <div className="absolute top-0 left-0 z-10 h-0.5 w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />

      <div className="relative aspect-[4/3] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep-wood/30 to-forest/20">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-forest/30">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-base font-semibold leading-tight text-charcoal">{title}</h3>
        {children && (
          <div className="mt-2 text-sm leading-relaxed text-charcoal/70">{children}</div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
