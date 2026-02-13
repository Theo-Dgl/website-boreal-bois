import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { getPrestationBySlug, getPrestationSlugs, getSiteConfig } from "@/lib/queries";

export const dynamicParams = true;

interface PrestationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getPrestationSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PrestationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prestation = await getPrestationBySlug(slug);
  if (!prestation) return {};

  return {
    title: prestation.seo?.metaTitle ?? `${prestation.title} | Boréal Bois`,
    description: prestation.seo?.metaDescription ?? prestation.shortDescription,
  };
}

export default async function PrestationPage({ params }: PrestationPageProps) {
  const { slug } = await params;
  const [prestation, siteConfig] = await Promise.all([
    getPrestationBySlug(slug),
    getSiteConfig(),
  ]);

  if (!prestation) {
    notFound();
  }

  const imageUrl =
    typeof prestation.image === "object" && prestation.image?.url
      ? prestation.image.url
      : null;

  const imageAlt =
    typeof prestation.image === "object" && prestation.image?.alt
      ? prestation.image.alt
      : prestation.title;

  const ctaLabel = prestation.ctaLabel ?? "Demander un devis pour ce projet";

  return (
    <>
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/80 to-moss" />
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cream/15">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-forest/50" />
          <Container className="relative flex h-full items-end pb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
                Prestation
              </p>
              <h1 className="mt-2 font-serif text-[clamp(2rem,4vw,3.5rem)] text-cream">
                {prestation.title}
              </h1>
            </div>
          </Container>
        </section>

        {/* Content */}
        <SectionWrapper bg="linen">
          <Container narrow>
            <p className="text-lg leading-relaxed text-warm-gray">
              {prestation.description}
            </p>

            <div className="mt-12">
              <h2 className="font-serif text-2xl text-charcoal">
                Ce que nous proposons
              </h2>
              <ul className="mt-6 space-y-4">
                {prestation.features.map((item) => {
                  const text =
                    typeof item === "string" ? item : item.feature;
                  return (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-moss" />
                      <span className="text-warm-gray">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {prestation.essences && (
              <div className="mt-12">
                <h2 className="font-serif text-2xl text-charcoal">
                  Essences utilisées
                </h2>
                <p className="mt-4 text-warm-gray">{prestation.essences}</p>
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/#contact">{ctaLabel}</Button>
              <Button href="/" variant="secondary">
                Retour à l&apos;accueil
              </Button>
            </div>
          </Container>
        </SectionWrapper>

        {/* Contact CTA */}
        <SectionWrapper id="contact" bg="forest">
          <Container className="text-center">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-cream">
              Intéressé par ce type de projet ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/70">
              Contactez-nous pour discuter de votre projet et obtenir un devis
              personnalisé.
            </p>
            <div className="mt-8">
              <Button href="/#contact">Nous contacter</Button>
            </div>
          </Container>
        </SectionWrapper>
      </main>
      <Footer
        companyName={siteConfig.companyName}
        phone={siteConfig.phone}
        email={siteConfig.email}
        instagram={siteConfig.instagram}
      />
    </>
  );
}
