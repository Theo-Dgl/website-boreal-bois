import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Prestations } from "./collections/Prestations";
import { Realisations } from "./collections/Realisations";
import { Partenaires } from "./collections/Partenaires";
import { ContactSubmissions } from "./collections/ContactSubmissions";
import { SiteConfig } from "./globals/SiteConfig";
import { Homepage } from "./globals/Homepage";
import { PrestationsHub } from "./globals/PrestationsHub";
import { ValeursPage } from "./globals/ValeursPage";
import { RealisationsPage } from "./globals/RealisationsPage";
import { ContactPage } from "./globals/ContactPage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, "app/(payload)/admin"),
    },
    meta: {
      titleSuffix: " — Boréal Bois",
    },
    components: {
      graphics: {
        Logo: "@/components/admin/Logo#Logo",
        Icon: "@/components/admin/Icon#Icon",
      },
    },
  },
  collections: [
    Users,
    Media,
    Prestations,
    Realisations,
    Partenaires,
    ContactSubmissions,
  ],
  globals: [
    SiteConfig,
    Homepage,
    PrestationsHub,
    ValeursPage,
    RealisationsPage,
    ContactPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
