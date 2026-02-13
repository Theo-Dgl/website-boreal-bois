import { getPayloadClient } from "./payload";

export interface PrestationData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: Array<{ feature: string } | string>;
  image: { url?: string; alt?: string } | string;
  essences?: string | null;
  ctaLabel?: string | null;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  } | null;
}

export interface RealisationData {
  id: string;
  title: string;
  category: string;
  image: { url?: string; alt?: string } | string;
}

export interface PartenaireData {
  name: string;
  description?: string | null;
  url?: string | null;
  logo?: { url?: string; alt?: string } | string | null;
}

export interface SiteConfigData {
  companyName: string;
  phone: string;
  email: string;
  zone: string;
  instagram?: string | null;
  ctaBanner: {
    text: string;
    buttonLabel: string;
  };
}

export interface HomepageData {
  hero: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    content: string;
  };
  valuesPreview?: {
    items?: Array<{ text: string }>;
  };
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export interface ContactPageData {
  title: string;
  description: string;
  ctaLabel: string;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export interface ValeursPageData {
  title: string;
  intro: string;
  sections: Array<{ title: string; content: string }>;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export interface PrestationsHubData {
  title: string;
  description: string;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export interface RealisationsPageData {
  title: string;
  description: string;
  seo?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
}

export async function getSiteConfig(): Promise<SiteConfigData> {
  const payload = await getPayloadClient();
  const config = await payload.findGlobal({ slug: "site-config" });
  return {
    companyName: config.companyName,
    phone: config.phone,
    email: config.email,
    zone: config.zone,
    instagram: config.instagram,
    ctaBanner: config.ctaBanner,
  };
}

export async function getHomepage(): Promise<HomepageData> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "homepage" });
  return {
    hero: data.hero,
    about: data.about,
    valuesPreview: data.valuesPreview,
    seo: data.seo,
  };
}

export async function getContactPage(): Promise<ContactPageData> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "contact-page" });
  return {
    title: data.title,
    description: data.description,
    ctaLabel: data.ctaLabel,
    seo: data.seo,
  };
}

export async function getValeursPage(): Promise<ValeursPageData> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "valeurs-page" });
  return {
    title: data.title,
    intro: data.intro,
    sections: data.sections,
    seo: data.seo,
  };
}

export async function getPrestationsHub(): Promise<PrestationsHubData> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "prestations-hub" });
  return {
    title: data.title,
    description: data.description,
    seo: data.seo,
  };
}

export async function getRealisationsPage(): Promise<RealisationsPageData> {
  const payload = await getPayloadClient();
  const data = await payload.findGlobal({ slug: "realisations-page" });
  return {
    title: data.title,
    description: data.description,
    seo: data.seo,
  };
}

export async function getAllPrestations(): Promise<PrestationData[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "prestations",
    sort: "sortOrder",
    limit: 100,
  });

  return result.docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    shortDescription: doc.shortDescription,
    description: doc.description,
    features: doc.features,
    image: doc.image,
    essences: doc.essences,
    ctaLabel: doc.ctaLabel,
    seo: doc.seo,
  }));
}

export async function getPrestationBySlug(
  slug: string,
): Promise<PrestationData | null> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "prestations",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const doc = result.docs[0];
  if (!doc) return null;

  return {
    slug: doc.slug,
    title: doc.title,
    shortDescription: doc.shortDescription,
    description: doc.description,
    features: doc.features,
    image: doc.image,
    essences: doc.essences,
    ctaLabel: doc.ctaLabel,
    seo: doc.seo,
  };
}

export async function getPrestationSlugs(): Promise<string[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "prestations",
    sort: "sortOrder",
    limit: 100,
  });

  return result.docs.map((doc) => doc.slug);
}

export async function getAllRealisations(): Promise<RealisationData[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "realisations",
    sort: "sortOrder",
    limit: 100,
  });

  return result.docs.map((doc) => ({
    id: String(doc.id),
    title: doc.title,
    category: doc.category,
    image: doc.image,
  }));
}

export async function getAllPartenaires(): Promise<PartenaireData[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "partenaires",
    sort: "sortOrder",
    limit: 100,
  });

  return result.docs.map((doc) => ({
    name: doc.name,
    description: doc.description,
    url: doc.url,
    logo: doc.logo,
  }));
}
