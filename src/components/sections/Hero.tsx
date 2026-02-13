"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

interface HeroProps {
  title?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export function Hero({
  title = "L'art du bois,\nau service de vos extérieurs",
  description = "Artisan charpentier-menuisier en région lyonnaise. Terrasses, pergolas, abris -des aménagements bois sur mesure, conçus pour durer.",
  ctaPrimary = "Découvrir nos prestations",
  ctaSecondary = "Demander un devis",
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        {/* Placeholder gradient -will be replaced by a real photo */}
        <div className="h-full w-full bg-gradient-to-br from-forest via-deep-wood/80 to-moss" />
      </motion.div>

      {/* Overlay -lighter to let images show through */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/50 to-forest/20" />

      {/* Content */}
      <Container className="relative flex h-full flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.15] text-cream">
            {title}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact">{ctaPrimary}</Button>
            <Button href="#realisations" variant="secondary-light">
              {ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-cream/50 p-1.5"
        >
          <div className="h-2.5 w-1.5 rounded-full bg-cream/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
