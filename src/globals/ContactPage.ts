import type { GlobalConfig } from "payload";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  label: "Page Contact",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Parlons de votre projet bois",
      label: "Titre (H1)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "Vous avez un projet de construction, d'aménagement ou de rénovation bois ? Contactez-nous pour en discuter. Devis gratuit, réponse garantie sous 24h.",
      label: "Description",
    },
    {
      name: "ctaLabel",
      type: "text",
      required: true,
      defaultValue: "Devis gratuit -Réponse sous 24h",
      label: "Label CTA",
    },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: "Balise title",
          defaultValue:
            "Contact & devis gratuit | Boréal Bois -Charpentier Lyon",
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta description",
          defaultValue:
            "Contactez Boréal Bois pour votre projet bois. Devis gratuit, réponse sous 24h. Charpentier constructeur bois à Lyon et Nord Isère.",
        },
      ],
    },
  ],
};
