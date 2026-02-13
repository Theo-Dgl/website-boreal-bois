"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Container } from "../layout/Container";
import type { PartenaireData } from "@/lib/queries";

interface PartenairesProps {
  partenaires: PartenaireData[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Partenaires({ partenaires }: PartenairesProps) {
  return (
    <SectionWrapper id="partenaires" bg="linen">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-charcoal"
          >
            Nos partenaires
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-lg text-charcoal/70"
          >
            Nous travaillons avec des fournisseurs et artisans de confiance pour
            garantir la qualité de chaque projet.
          </motion.p>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {partenaires.map((partenaire) => {
              const logoUrl =
                typeof partenaire.logo === "object" && partenaire.logo?.url
                  ? partenaire.logo.url
                  : null;

              return (
                <motion.a
                  key={partenaire.name}
                  href={partenaire.url && partenaire.url !== "#" ? partenaire.url : undefined}
                  target={partenaire.url && partenaire.url !== "#" ? "_blank" : undefined}
                  rel={partenaire.url && partenaire.url !== "#" ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="flex flex-col items-center gap-3 rounded-lg border border-charcoal/8 bg-sand/60 p-6 text-center transition-all duration-300 hover:border-terracotta/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                >
                  {logoUrl ? (
                    <div className="relative h-12 w-32">
                      <Image
                        src={logoUrl}
                        alt={partenaire.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-base font-semibold text-charcoal">
                      {partenaire.name}
                    </span>
                  )}
                  {partenaire.description && (
                    <p className="text-sm leading-relaxed text-charcoal/60">
                      {partenaire.description}
                    </p>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
