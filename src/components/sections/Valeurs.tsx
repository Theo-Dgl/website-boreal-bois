"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Container } from "../layout/Container";

interface Valeur {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TreeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L4 14h5v4H4l8 5 8-5h-5v-4h5L12 3z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14v10" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14h2" />
      <path d="m7 4 3.22 3.22" />
    </svg>
  );
}

const VALEURS: Valeur[] = [
  {
    icon: <TreeIcon />,
    title: "Bois responsable",
    description:
      "Nous sélectionnons des essences issues de forêts gérées durablement, certifiées PEFC ou FSC.",
  },
  {
    icon: <TruckIcon />,
    title: "Circuit court",
    description:
      "Approvisionnement local et partenariats avec des scieries françaises pour réduire notre empreinte carbone.",
  },
  {
    icon: <HammerIcon />,
    title: "Savoir-faire artisanal",
    description:
      "Chaque projet est réalisé avec les techniques traditionnelles de charpente et menuiserie, adaptées aux exigences modernes.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Accompagnement sur mesure",
    description:
      "Du premier échange à la livraison, un interlocuteur unique vous accompagne à chaque étape de votre projet.",
  },
];

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
      staggerChildren: 0.15,
    },
  },
};

interface ValeursProps {
  title?: string;
  description?: string;
}

export function Valeurs({
  title = "Nos valeurs & engagements",
  description = "Chez Boréal Bois, chaque projet est guidé par le respect du bois, de l'environnement et de votre confiance.",
}: ValeursProps) {
  return (
    <SectionWrapper id="valeurs" bg="forest">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12 max-w-2xl"
          >
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-cream">
              {title}
            </h2>
            <p className="mt-4 text-cream/75">
              {description}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {VALEURS.map((valeur) => (
              <motion.div
                key={valeur.title}
                variants={fadeInUp}
                className="rounded-lg border border-cream/15 bg-cream/8 p-6 transition-all duration-300 hover:border-cream/30 hover:bg-cream/12"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-terracotta/20 text-terracotta">
                  {valeur.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-cream">
                  {valeur.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {valeur.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
