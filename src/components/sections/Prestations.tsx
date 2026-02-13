"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import type { PrestationData } from "@/lib/queries";

interface PrestationsProps {
  prestations: PrestationData[];
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Prestations({ prestations }: PrestationsProps) {
  return (
    <SectionWrapper id="prestations" bg="linen">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-12 max-w-2xl">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-charcoal">
              Nos prestations
            </h2>
            <p className="mt-4 text-warm-gray">
              Du conseil à la réalisation, nous vous accompagnons dans tous vos
              projets d&apos;aménagement bois extérieur.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {prestations.map((prestation) => {
              const imageSrc =
                typeof prestation.image === "object" && prestation.image?.url
                  ? prestation.image.url
                  : "/images/terrasse-placeholder.jpg";
              const imageAlt =
                typeof prestation.image === "object" && prestation.image?.alt
                  ? prestation.image.alt
                  : prestation.title;

              return (
                <motion.div key={prestation.slug} variants={fadeInUp}>
                  <Card
                    title={prestation.title}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                    href={`/prestations/${prestation.slug}`}
                  >
                    <p>{prestation.shortDescription}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
