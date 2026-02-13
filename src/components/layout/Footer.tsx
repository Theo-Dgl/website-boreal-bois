import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

interface FooterProps {
  companyName?: string;
  phone?: string;
  email?: string;
  description?: string;
  instagram?: string | null;
}

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Prestations", href: "#prestations" },
      { label: "Réalisations", href: "#realisations" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Prestations",
    links: [
      { label: "Ossature bois", href: "/prestations/ossature-bois" },
      { label: "Terrasses", href: "/prestations/terrasses" },
      { label: "Pergolas", href: "/prestations/pergolas" },
      { label: "Carports", href: "/prestations/carport" },
      { label: "Charpente", href: "/prestations/charpente" },
    ],
  },
] as const;

export function Footer({
  companyName = "Boréal Bois",
  phone = "06 00 00 00 00",
  email = "contact@borealbois.fr",
  description = "Artisan charpentier constructeur bois spécialisé dans la construction et l'aménagement bois. Ossature bois, terrasses, pergolas, carports et charpentes sur mesure en région lyonnaise et Nord Isère.",
  instagram,
}: FooterProps) {
  return (
    <footer className="relative bg-forest py-20 text-cream grain-texture">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt={companyName}
                width={200}
                height={75}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
              {description}
            </p>
            <div className="mt-6 space-y-2 text-sm text-cream/75">
              <p>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-terracotta"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-terracotta"
                >
                  {email}
                </a>
              </p>
            </div>
            {instagram && (
              <div className="mt-4 flex gap-3">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-terracotta hover:text-terracotta"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/60">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                      <span className="text-cream/0 transition-colors group-hover:text-terracotta" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {companyName}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-cream/70">
              Mentions légales
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
