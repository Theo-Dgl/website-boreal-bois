"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import {
  submitContact,
  type ContactFormState,
} from "@/actions/submitContact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

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

const inputClasses =
  "w-full rounded-lg border border-charcoal/20 bg-white/60 px-4 py-2.5 text-sm text-charcoal outline-none transition-all duration-200 placeholder-charcoal/40 focus:border-terracotta focus:ring-3 focus:ring-terracotta/20";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  zone?: string;
}

export function Contact({
  title = "Parlons de votre projet",
  description = "Vous avez un projet d'aménagement bois extérieur ? Contactez-nous pour un devis gratuit et sans engagement. Nous intervenons en région lyonnaise et Nord Isère.",
  phone = "06 00 00 00 00",
  email = "contact@borealbois.fr",
  zone = "Région lyonnaise & Nord Isère",
}: ContactProps) {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <SectionWrapper id="contact" bg="sand">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left: Info */}
          <motion.div variants={fadeInUp}>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-charcoal">
              {title}
            </h2>
            <p className="mt-4 text-charcoal/70">
              {description}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-4 rounded-lg border border-charcoal/5 bg-linen/60 p-4">
                <span className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Téléphone</p>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-sm text-charcoal/70 transition-colors hover:text-terracotta"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-charcoal/5 bg-linen/60 p-4">
                <span className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-charcoal/70 transition-colors hover:text-terracotta"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-charcoal/5 bg-linen/60 p-4">
                <span className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Zone d&apos;intervention</p>
                  <p className="text-sm text-charcoal/70">
                    {zone}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            variants={fadeInUp}
            className="space-y-5 rounded-xl border border-sand bg-white/40 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:p-8"
            action={formAction}
          >
            {state.message && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-lg border p-4 text-sm font-medium ${
                  state.success
                    ? "border-moss/30 bg-moss/10 text-moss"
                    : "border-terracotta/30 bg-terracotta/10 text-terracotta"
                }`}
              >
                {state.message}
              </motion.div>
            )}

            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Nom complet
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                className={inputClasses}
                placeholder="Votre nom"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="votre@email.fr"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Téléphone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  className={inputClasses}
                  placeholder="06 00 00 00 00"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-project"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Type de projet
              </label>
              <select
                id="contact-project"
                name="project"
                className={inputClasses}
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="ossature">Ossature bois / Extension</option>
                <option value="terrasse">Terrasse</option>
                <option value="pergola">Pergola</option>
                <option value="carport">Carport</option>
                <option value="charpente">Charpente</option>
                <option value="abri">Abri de jardin</option>
                <option value="isolation">Isolation biosourcée</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className={`${inputClasses} resize-none`}
                placeholder="Décrivez votre projet..."
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </motion.form>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
