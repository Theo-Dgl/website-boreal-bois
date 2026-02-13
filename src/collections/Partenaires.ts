import type { CollectionConfig } from "payload";

export const Partenaires: CollectionConfig = {
  slug: "partenaires",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "sortOrder"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nom",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      admin: {
        description: "Texte de présentation du partenaire",
      },
    },
    {
      name: "url",
      type: "text",
      label: "Site web",
      admin: {
        description: "URL du site du partenaire (optionnel)",
      },
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo",
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
