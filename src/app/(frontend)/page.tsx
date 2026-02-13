import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Prestations } from "@/components/sections/Prestations";
import { Realisations } from "@/components/sections/Realisations";
import { Valeurs } from "@/components/sections/Valeurs";
import { Partenaires } from "@/components/sections/Partenaires";
import { Contact } from "@/components/sections/Contact";
import {
  getAllPrestations,
  getAllRealisations,
  getAllPartenaires,
  getSiteConfig,
  getHomepage,
  getValeursPage,
} from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const homepage = await getHomepage();
    return {
      title: homepage.seo?.metaTitle ?? "Boréal Bois — Charpentier constructeur bois Lyon",
      description: homepage.seo?.metaDescription ?? "Boréal Bois, artisan charpentier constructeur bois en région lyonnaise et Nord Isère.",
    };
  } catch {
    return {
      title: "Boréal Bois — Charpentier constructeur bois Lyon",
    };
  }
}

export default async function HomePage() {
  const [prestations, realisations, partenaires, siteConfig, homepage, valeursPage] =
    await Promise.all([
      getAllPrestations(),
      getAllRealisations(),
      getAllPartenaires(),
      getSiteConfig(),
      getHomepage(),
      getValeursPage(),
    ]);

  return (
    <>
      <Header />
      <main>
        <Hero
          title={homepage.hero.title}
          description={homepage.hero.description}
          ctaPrimary={homepage.hero.ctaPrimary}
          ctaSecondary={homepage.hero.ctaSecondary}
        />
        <Prestations prestations={prestations} />
        <Realisations realisations={realisations} />
        <Valeurs
          title={valeursPage.title}
          description={valeursPage.intro}
        />
        <Partenaires partenaires={partenaires} />
        <Contact
          phone={siteConfig.phone}
          email={siteConfig.email}
          zone={siteConfig.zone}
        />
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
