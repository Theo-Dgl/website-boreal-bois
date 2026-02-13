import type { ReactNode } from "react";

type SectionBg = "linen" | "sand" | "forest";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  bg?: SectionBg;
  className?: string;
}

const bgClasses: Record<SectionBg, string> = {
  linen: "bg-linen text-charcoal",
  sand: "bg-sand text-charcoal",
  forest: "bg-forest text-cream grain-texture",
};

export function SectionWrapper({
  children,
  id,
  bg = "linen",
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${bgClasses[bg]} ${className}`}
    >
      {children}
    </section>
  );
}
