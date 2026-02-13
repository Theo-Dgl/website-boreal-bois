import type { GlobalConfig } from "payload";

const seoFields = [
  {
    name: "seo",
    type: "group" as const,
    label: "SEO",
    fields: [
      {
        name: "metaTitle",
        type: "text" as const,
        label: "Balise title",
      },
      {
        name: "metaDescription",
        type: "textarea" as const,
        label: "Meta description",
      },
    ],
  },
];

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Page d'accueil",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "hero",
      type: "group",
      label: "Hero",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue:
            "Charpentier constructeur bois — Région lyonnaise & Nord Isère",
          label: "Titre (H1)",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue:
            "Boréal Bois, c'est la construction bois pensée autrement : des matériaux choisis, un savoir-faire artisanal et une vraie démarche écologique. De la charpente à la terrasse, on construit du solide, du durable et du beau.",
          label: "Accroche",
        },
        {
          name: "ctaPrimary",
          type: "text",
          required: true,
          defaultValue: "Demander un devis gratuit",
          label: "CTA principal",
        },
        {
          name: "ctaSecondary",
          type: "text",
          required: true,
          defaultValue: "Découvrir nos réalisations",
          label: "CTA secondaire",
        },
      ],
    },
    {
      name: "about",
      type: "group",
      label: "Qui sommes-nous",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Qui sommes-nous",
          label: "Titre",
        },
        {
          name: "content",
          type: "textarea",
          required: true,
          defaultValue:
            "Fondé par un charpentier formé en France et forgé au Canada, Boréal Bois allie maîtrise technique et conviction écologique. Avec 7 ans d'expérience en charpente et construction bois, nous intervenons sur la région lyonnaise et le Nord Isère pour des projets sur mesure, du petit aménagement extérieur à l'extension en ossature bois.\n\nNotre approche : des essences sélectionnées (douglas, mélèze, pin classe 4, chêne), des matériaux biosourcés pour l'isolation, et un circuit court avec des fournisseurs locaux. Pas de langue de bois, juste du bon bois.",
          label: "Texte",
        },
      ],
    },
    {
      name: "valuesPreview",
      type: "group",
      label: "Valeurs en un coup d'œil",
      fields: [
        {
          name: "items",
          type: "array",
          label: "Valeurs",
          minRows: 1,
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Valeur",
            },
          ],
        },
      ],
    },
    ...seoFields,
  ],
};
