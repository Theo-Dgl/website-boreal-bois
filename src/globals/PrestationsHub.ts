import type { GlobalConfig } from "payload";

export const PrestationsHub: GlobalConfig = {
  slug: "prestations-hub",
  label: "Page Prestations (hub)",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Nos prestations en construction et aménagement bois",
      label: "Titre (H1)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "De la structure de votre maison à l'aménagement de votre jardin, Boréal Bois intervient sur tous vos projets bois. Chaque réalisation est pensée sur mesure, avec des matériaux sélectionnés pour leur durabilité et leur faible impact environnemental.",
      label: "Description",
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
            "Nos prestations bois | Ossature, terrasse, pergola, carport — Boréal Bois Lyon",
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta description",
          defaultValue:
            "Découvrez nos prestations : ossature bois, terrasse, pergola, carport, charpente, isolation biosourcée. Artisan charpentier région lyonnaise et Nord Isère.",
        },
      ],
    },
  ],
};
