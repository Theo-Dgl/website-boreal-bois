import type { GlobalConfig } from "payload";

export const RealisationsPage: GlobalConfig = {
  slug: "realisations-page",
  label: "Page Réalisations",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue:
        "Nos réalisations en construction et aménagement bois",
      label: "Titre (H1)",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue:
        "Découvrez nos projets : terrasses, pergolas, carports, charpentes, extensions en ossature bois et plus encore. Chaque réalisation est unique, conçue sur mesure avec des matériaux sélectionnés.",
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
            "Nos réalisations bois | Portfolio charpente & aménagement -Boréal Bois",
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta description",
          defaultValue:
            "Découvrez nos réalisations : terrasses, pergolas, carports, charpentes, extensions ossature bois. Projets sur mesure en région lyonnaise.",
        },
      ],
    },
  ],
};
