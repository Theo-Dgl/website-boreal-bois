import type { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "project", "createdAt"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nom",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email",
    },
    {
      name: "phone",
      type: "text",
      label: "Téléphone",
    },
    {
      name: "project",
      type: "select",
      label: "Type de projet",
      options: [
        { label: "Terrasse", value: "terrasse" },
        { label: "Pergola", value: "pergola" },
        { label: "Abri de jardin / Carport", value: "abri" },
        { label: "Clôture / Brise-vue", value: "cloture" },
        { label: "Autre", value: "autre" },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Message",
    },
  ],
};
