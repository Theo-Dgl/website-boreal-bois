"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Container } from "../layout/Container";
import type { RealisationData } from "@/lib/queries";

interface RealisationsProps {
  realisations: RealisationData[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ALL_FILTER = "Tout";

export function Realisations({ realisations }: RealisationsProps) {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = [
    ALL_FILTER,
    ...Array.from(new Set(realisations.map((r) => r.category))),
  ];

  const filtered =
    activeFilter === ALL_FILTER
      ? realisations
      : realisations.filter((r) => r.category === activeFilter);

  // Lightbox keyboard navigation
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null,
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const getImageUrl = (realisation: RealisationData) =>
    typeof realisation.image === "object" && realisation.image?.url
      ? realisation.image.url
      : null;

  const getImageAlt = (realisation: RealisationData) =>
    typeof realisation.image === "object" && realisation.image?.alt
      ? realisation.image.alt
      : realisation.title;

  return (
    <>
      <SectionWrapper id="realisations" bg="sand">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8 max-w-2xl">
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-charcoal">
                Nos réalisations
              </h2>
              <p className="mt-4 text-charcoal/70">
                Découvrez quelques-uns de nos projets réalisés en région lyonnaise
                et Nord Isère.
              </p>
            </motion.div>

            {/* Filter chips */}
            <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "border-terracotta bg-terracotta text-cream"
                      : "border-charcoal/15 bg-transparent text-charcoal/70 hover:border-charcoal/30 hover:text-charcoal"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <motion.div
              layout
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((realisation, index) => {
                  const imageUrl = getImageUrl(realisation);

                  return (
                    <motion.div
                      key={realisation.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className={`group relative cursor-pointer overflow-hidden rounded-lg ${
                        index === 0 && activeFilter === ALL_FILTER
                          ? "sm:col-span-2 lg:col-span-2"
                          : ""
                      }`}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <div
                        className={`relative ${
                          index === 0 && activeFilter === ALL_FILTER
                            ? "aspect-[16/9]"
                            : "aspect-square"
                        }`}
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={getImageAlt(realisation)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
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
                        {/* Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent p-5">
                          <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                            {realisation.category}
                          </span>
                          <h3 className="mt-1 text-lg font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {realisation.title}
                          </h3>
                        </div>
                        {/* Expand icon */}
                        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/40 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6" />
                            <path d="M9 21H3v-6" />
                            <path d="M21 3l-7 7" />
                            <path d="M3 21l7-7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="mt-8 text-center text-charcoal/50">
                Aucune réalisation dans cette catégorie pour le moment.
              </p>
            )}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
              aria-label="Fermer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Prev button */}
            {filtered.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
                aria-label="Image précédente"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const current = filtered[lightboxIndex];
                const imageUrl = getImageUrl(current);
                return imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={getImageAlt(current)}
                    width={1200}
                    height={800}
                    className="max-h-[85vh] w-auto rounded-lg object-contain"
                  />
                ) : (
                  <div className="flex h-[50vh] w-[50vw] items-center justify-center rounded-lg bg-deep-wood/30">
                    <p className="text-cream/50">Pas d&apos;image disponible</p>
                  </div>
                );
              })()}
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="mt-1 text-sm font-medium text-cream">
                  {filtered[lightboxIndex].title}
                </p>
              </div>
            </motion.div>

            {/* Next button */}
            {filtered.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
                aria-label="Image suivante"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-cream/50">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
