import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { getContactPage, getSiteConfig } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const contactPage = await getContactPage();
    return {
      title: contactPage.seo?.metaTitle ?? "Contact & devis gratuit | Boréal Bois",
      description: contactPage.seo?.metaDescription ?? contactPage.description,
    };
  } catch {
    return {
      title: "Contact & devis gratuit | Boréal Bois",
    };
  }
}

export default async function ContactPageRoute() {
  const [contactPage, siteConfig] = await Promise.all([
    getContactPage(),
    getSiteConfig(),
  ]);

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <SectionWrapper bg="forest" className="pt-32 pb-16 md:pt-40 md:pb-20">
          <Container>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-cream">
              {contactPage.title}
            </h1>
            <p className="mt-4 max-w-lg text-cream/70">
              {contactPage.description}
            </p>
          </Container>
        </SectionWrapper>

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
