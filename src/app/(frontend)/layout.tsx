import type { Metadata } from "next";
import { libreBaskerville, inter } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Boréal Bois -Aménagement Bois Extérieur",
    template: "%s | Boréal Bois",
  },
  description:
    "Artisan charpentier-menuisier en région lyonnaise. Terrasses, pergolas, abris et aménagements bois extérieur sur mesure.",
  keywords: [
    "terrasse bois",
    "pergola",
    "aménagement extérieur",
    "charpentier",
    "menuisier",
    "Lyon",
    "Nord Isère",
    "bois",
    "artisan",
  ],
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${libreBaskerville.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
