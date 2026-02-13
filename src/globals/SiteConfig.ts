import type { GlobalConfig } from "payload";

export const SiteConfig: GlobalConfig = {
  slug: "site-config",
  label: "Configuration du site",
  admin: {
    group: "Contenu global",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
      defaultValue: "Boréal Bois",
      label: "Nom de l'entreprise",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "Téléphone",
    },
    {
      name: "email",
      type: "email",
      required: true,
      label: "Email",
    },
    {
      name: "zone",
      type: "text",
      required: true,
      defaultValue: "Région lyonnaise (ouest et nord) & Nord Isère",
      label: "Zone d'intervention",
    },
    {
      name: "instagram",
      type: "text",
      label: "Lien Instagram",
    },
    {
      name: "ctaBanner",
      type: "group",
      label: "Bandeau CTA global",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          defaultValue:
            "Un projet bois en tête ? Parlons-en. Devis gratuit, réponse sous 24h.",
          label: "Texte",
        },
        {
          name: "buttonLabel",
          type: "text",
          required: true,
          defaultValue: "Demander un devis",
          label: "Label du bouton",
        },
      ],
    },
  ],
};
