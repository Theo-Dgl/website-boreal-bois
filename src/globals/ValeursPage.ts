import type { GlobalConfig } from "payload";

export const ValeursPage: GlobalConfig = {
  slug: "valeurs-page",
  label: "Page Nos valeurs",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Construire en bois, construire responsable",
      label: "Titre (H1)",
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
      defaultValue:
        "Chez Boréal Bois, l'écologie n'est pas un argument marketing, c'est une conviction. Elle guide chaque choix, de l'essence du bois au fournisseur, en passant par les techniques de mise en œuvre.",
      label: "Introduction",
    },
    {
      name: "sections",
      type: "array",
      required: true,
      label: "Sections",
      minRows: 1,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Titre (H2)",
        },
        {
          name: "content",
          type: "textarea",
          required: true,
          label: "Contenu",
        },
      ],
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
            "Nos valeurs écologiques | Essences locales, biosourcé -Boréal Bois",
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta description",
          defaultValue:
            "Douglas sans traitement chimique, isolation biosourcée, circuits courts, végétalisation. Découvrez l'engagement écologique de Boréal Bois.",
        },
      ],
    },
  ],
};
