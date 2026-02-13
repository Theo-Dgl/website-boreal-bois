import type { CollectionConfig } from "payload";

export const Prestations: CollectionConfig = {
  slug: "prestations",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "sortOrder"],
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug (URL)",
      admin: {
        description: "Identifiant URL (ex: terrasses, pergolas)",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      label: "Description courte",
      admin: {
        description: "Affichée sur la carte en page d'accueil",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Description complète",
      admin: {
        description: "Affichée sur la page détail de la prestation",
      },
    },
    {
      name: "features",
      type: "array",
      required: true,
      label: "Points forts",
      minRows: 1,
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
          label: "Point fort",
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Image",
    },
    {
      name: "essences",
      type: "text",
      label: "Essences utilisées",
      admin: {
        description: "Ex: Douglas, mélèze, pin classe 4, chêne",
      },
    },
    {
      name: "ctaLabel",
      type: "text",
      label: "Label CTA",
      defaultValue: "Demander un devis pour ce projet",
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 0,
      label: "Ordre d'affichage",
      admin: {
        description: "Les prestations sont triées par ordre croissant",
      },
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
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta description",
        },
      ],
    },
  ],
};
