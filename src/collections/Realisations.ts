import type { CollectionConfig } from "payload";

export const Realisations: CollectionConfig = {
  slug: "realisations",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "sortOrder"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
    },
    {
      name: "category",
      type: "select",
      required: true,
      label: "Catégorie",
      options: [
        { label: "Ossature bois", value: "Ossature bois" },
        { label: "Terrasses", value: "Terrasses" },
        { label: "Pergolas", value: "Pergolas" },
        { label: "Carports", value: "Carports" },
        { label: "Charpente", value: "Charpente" },
        { label: "Abris", value: "Abris" },
        { label: "Isolation", value: "Isolation" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Image",
    },
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 0,
      label: "Ordre d'affichage",
    },
  ],
};
