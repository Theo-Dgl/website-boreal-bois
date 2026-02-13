import "dotenv/config";
import { getPayloadClient } from "./lib/payload";

const PRESTATIONS_SEED = [
  {
    slug: "ossature-bois",
    title: "Ossature bois — Agrandissement & Surélévation",
    shortDescription:
      "Agrandissez ou surélevez votre maison avec une structure bois légère et performante.",
    description:
      "Vous manquez d'espace ? L'ossature bois est la solution la plus légère, rapide et performante pour agrandir votre maison ou créer un étage supplémentaire. Chez Boréal Bois, c'est notre cœur de métier. Nous concevons des structures sur mesure, isolées avec des matériaux biosourcés (ouate de cellulose, fibre de bois, chanvre) et optimisées pour une étanchéité à l'air exemplaire, en partenariat avec un expert en maison passive.",
    features: [
      "Cœur de métier de Boréal Bois",
      "Isolation biosourcée haute performance",
      "Étanchéité à l'air maîtrisée (partenariat maison passive)",
      "Structure légère : idéale pour les surélévations",
      "Matériaux locaux, circuits courts",
    ],
    essences: "Douglas, mélèze, pin classe 4",
    ctaLabel: "Vous pensez à un agrandissement ? Parlons-en → Devis gratuit",
    sortOrder: 1,
    seo: {
      metaTitle: "Extension & surélévation ossature bois | Boréal Bois Lyon",
      metaDescription:
        "Agrandissement et surélévation en ossature bois à Lyon et Nord Isère. Isolation biosourcée, étanchéité à l'air, matériaux locaux. Devis gratuit.",
    },
  },
  {
    slug: "terrasses",
    title: "Terrasse bois extérieure",
    shortDescription:
      "Terrasses sur mesure : plain-pied, surélevée ou avec structure porteuse.",
    description:
      "Terrasse de plain-pied, surélevée, avec structure porteuse : chaque projet est différent et mérite une conception adaptée. Nous privilégions le pin traité classe 4, une essence performante en extérieur, plus écologique et souvent plus économique que les bois exotiques importés. Le résultat : une terrasse durable, belle et cohérente avec une démarche responsable.",
    features: [
      "Pin classe 4 : durable, écologique, économique",
      "Alternative responsable au bois exotique",
      "Conception sur mesure (plain-pied, surélevée, structure porteuse)",
      "Possibilité de combiner avec pergola ou balcon",
    ],
    essences: "Pin traité classe 4 (recommandé), bois exotique sur demande",
    ctaLabel: "Envie d'une terrasse bois ? Demandez votre devis gratuit",
    sortOrder: 2,
    seo: {
      metaTitle:
        "Terrasse bois sur mesure | Pin classe 4 écologique — Boréal Bois Lyon",
      metaDescription:
        "Terrasse bois extérieure sur mesure en région lyonnaise. Pin traité classe 4 : durable, écologique et économique. Alternative au bois exotique. Devis gratuit.",
    },
  },
  {
    slug: "pergolas",
    title: "Pergola bois",
    shortDescription:
      "Pergolas sur mesure avec végétalisation privilégiée pour un espace vivant.",
    description:
      "Adossée à votre maison ou autoportée dans votre jardin, nos pergolas bois sont conçues sur mesure pour s'intégrer à votre espace extérieur. Nous privilégions la végétalisation : plantes grimpantes, toiture végétalisée... C'est notre façon de compenser l'emprise au sol et de créer un espace vivant, pas juste une structure. Option canisses disponible pour une protection solaire naturelle.",
    features: [
      "Adossée ou autoportée, sur mesure",
      "Végétalisation privilégiée (compensation surface au sol)",
      "Option canisses pour protection solaire",
      "Essences durables sans traitement chimique",
    ],
    essences: "Douglas, mélèze, pin classe 4",
    ctaLabel: "Un projet de pergola ? Contactez-nous pour un devis gratuit",
    sortOrder: 3,
    seo: {
      metaTitle:
        "Pergola bois végétalisée sur mesure | Boréal Bois Lyon",
      metaDescription:
        "Pergola bois adossée ou autoportée, végétalisation privilégiée. Douglas, mélèze, pin classe 4. Artisan charpentier Lyon et Nord Isère. Devis gratuit.",
    },
  },
  {
    slug: "carport",
    title: "Carport / Abri de voiture",
    shortDescription:
      "Carport bois simple ou double, avec toiture végétalisée ou traditionnelle.",
    description:
      "Simple ou double, adossé ou autoporté, votre carport est conçu selon vos besoins et votre terrain. Nous proposons plusieurs options de couverture : toiture végétalisée pour un rendu naturel et écologique, ou tuiles sur charpente traditionnelle pour un look plus classique. Le chêne peut être utilisé pour des structures d'exception.",
    features: [
      "Simple ou double, adossé ou autoporté",
      "Toiture végétalisée ou tuiles/charpente traditionnelle",
      "Large choix d'essences dont le chêne",
      "Conception sur mesure adaptée à votre terrain",
    ],
    essences: "Douglas, mélèze, pin classe 4, chêne",
    ctaLabel: "Protégez vos véhicules avec style → Devis gratuit",
    sortOrder: 4,
    seo: {
      metaTitle:
        "Carport bois sur mesure | Toiture végétalisée — Boréal Bois Lyon",
      metaDescription:
        "Carport bois simple ou double, toiture végétalisée ou traditionnelle. Douglas, chêne, mélèze. Région lyonnaise et Nord Isère. Devis gratuit.",
    },
  },
  {
    slug: "isolation",
    title: "Isolation biosourcée",
    shortDescription:
      "Isolation murs et combles avec des matériaux sains et performants.",
    description:
      "Murs ou combles, nous réalisons votre isolation avec des matériaux biosourcés : ouate de cellulose (performante et économique), fibre de bois, chanvre, laines végétales recyclées. Des solutions qui allient performance thermique, confort et respect de l'environnement. En partenariat avec un expert en construction passive, nous garantissons une mise en œuvre soignée pour une étanchéité à l'air optimale.",
    features: [
      "Matériaux biosourcés : ouate de cellulose, fibre de bois, chanvre",
      "Isolation des murs et des combles",
      "Performance thermique et confort acoustique",
      "Partenariat expert maison passive",
      "Fournisseurs locaux, circuits courts",
    ],
    essences: "Ouate de cellulose, fibre de bois, chanvre, laines végétales",
    ctaLabel: "Améliorez le confort de votre maison → Devis gratuit",
    sortOrder: 5,
    seo: {
      metaTitle:
        "Isolation biosourcée murs & combles | Boréal Bois Lyon",
      metaDescription:
        "Isolation ouate de cellulose, fibre de bois, chanvre. Matériaux biosourcés performants et écologiques. Lyon et Nord Isère. Devis gratuit.",
    },
  },
  {
    slug: "charpente",
    title: "Charpente",
    shortDescription:
      "Création, rénovation et modification de charpente pour tous types de projets.",
    description:
      "Charpente traditionnelle, toiture plate, aménagement de combles : nous intervenons sur tous types de projets de charpente, en neuf comme en rénovation. Notre expertise couvre la création complète, la rénovation de charpentes existantes et la modification de structure pour aménager vos combles et gagner de l'espace habitable.",
    features: [
      "Création de charpente (traditionnelle, toiture plate)",
      "Rénovation de charpentes existantes",
      "Modification pour aménagement de combles",
      "Savoir-faire artisanal, 7 ans d'expérience",
    ],
    essences: "Douglas, mélèze, pin, chêne selon le projet",
    ctaLabel: "Un projet de charpente ? Parlons-en → Devis gratuit",
    sortOrder: 6,
    seo: {
      metaTitle:
        "Charpente création, rénovation, modification | Boréal Bois Lyon",
      metaDescription:
        "Charpentier professionnel : création, rénovation et modification de charpente pour aménagement de combles. Lyon et Nord Isère. Devis gratuit.",
    },
  },
  {
    slug: "abris",
    title: "Abri de jardin sur mesure",
    shortDescription:
      "Abris de jardin en ossature bois, entièrement conçus sur mesure.",
    description:
      "Nos abris de jardin sont réalisés en ossature bois, entièrement sur mesure. Toiture végétalisée possible, aménagement intérieur en option. Pas de kit industriel : chaque abri est conçu et fabriqué selon vos besoins et les dimensions de votre terrain.",
    features: [
      "Sur mesure, ossature bois",
      "Toiture végétalisée possible",
      "Aménagement intérieur en option",
      "Essences durables et locales",
    ],
    essences: "Douglas, mélèze, pin classe 4",
    ctaLabel: "Un abri de jardin unique ? Demandez votre devis",
    sortOrder: 7,
    seo: {
      metaTitle:
        "Abri de jardin bois sur mesure | Boréal Bois Lyon",
      metaDescription:
        "Abri de jardin en ossature bois sur mesure. Toiture végétalisée, essences locales. Artisan charpentier Lyon et Nord Isère. Devis gratuit.",
    },
  },
  {
    slug: "balcon",
    title: "Balcon bois",
    shortDescription:
      "Création ou rénovation de balcon bois avec structure porteuse et finitions.",
    description:
      "Structure porteuse, garde-corps, platelage : nous réalisons votre balcon bois sur mesure, en neuf ou en rénovation. Un prolongement naturel de votre espace de vie, conçu avec des essences durables.",
    features: [
      "Création ou rénovation",
      "Structure porteuse et finitions",
      "Essences adaptées à l'usage extérieur",
    ],
    essences: "Pin classe 4, douglas, mélèze",
    ctaLabel: "Un projet de balcon ? Contactez-nous",
    sortOrder: 8,
    seo: {
      metaTitle: "Balcon bois sur mesure | Boréal Bois Lyon",
      metaDescription:
        "Création et rénovation de balcon bois sur mesure. Structure porteuse, essences durables. Artisan charpentier Lyon et Nord Isère.",
    },
  },
  {
    slug: "ameublement",
    title: "Ameublement en bois brut",
    shortDescription:
      "Mobilier sur mesure en bois brut : plans de travail, meubles, tables.",
    description:
      "Plan de travail, meuble de salle de bain, table en bois massif : nous réalisons du mobilier sur mesure en bois brut. Des pièces uniques, fabriquées artisanalement, qui apportent du caractère à votre intérieur. À découvrir aussi sur notre Instagram.",
    features: [
      "Pièces uniques, fabriquées à la main",
      "Plans de travail, meubles SDB, tables",
      "Bois brut, finitions naturelles",
      "À découvrir sur Instagram",
    ],
    essences: "Selon le projet et vos envies",
    ctaLabel: "Une idée de meuble ? Parlons-en",
    sortOrder: 9,
    seo: {
      metaTitle: "Mobilier bois brut sur mesure | Boréal Bois Lyon",
      metaDescription:
        "Mobilier bois brut fait main : plans de travail, meubles salle de bain, tables. Pièces uniques artisanales. Lyon et Nord Isère.",
    },
  },
];

const REALISATIONS_SEED = [
  {
    title: "Terrasse bois surélevée + balcon + pergola",
    category: "Terrasses" as const,
    sortOrder: 1,
  },
  {
    title: "Pergola bioclimatique végétalisée — Crémieu",
    category: "Pergolas" as const,
    sortOrder: 2,
  },
  {
    title: "Extension ossature bois — Morestel",
    category: "Abris" as const,
    sortOrder: 3,
  },
  {
    title: "Carport double toiture végétalisée — Lyon 6e",
    category: "Clôtures" as const,
    sortOrder: 4,
  },
  {
    title: "Terrasse pin classe 4 — Bourgoin-Jallieu",
    category: "Terrasses" as const,
    sortOrder: 5,
  },
  {
    title: "Charpente traditionnelle — La Tour-du-Pin",
    category: "Abris" as const,
    sortOrder: 6,
  },
];

const PARTENAIRES_SEED = [
  {
    name: "Les Ateliers DAR",
    description:
      "Entreprise générale du bâtiment, Les Ateliers DAR font appel à Boréal Bois pour toute la partie construction bois et charpente de leurs chantiers. Cette collaboration nous permet d'intervenir sur des projets complets, de la structure à la finition, avec la garantie d'un travail coordonné et professionnel.",
    url: "https://lesatelierdar.com",
    sortOrder: 1,
  },
  {
    name: "Valentin Pion — Expert maison passive",
    description:
      "Diplômé en construction de maison passive, Valentin est notre partenaire de référence sur l'étanchéité à l'air et la performance énergétique. Ensemble, nous concevons des projets d'ossature bois qui allient confort, durabilité et haute performance thermique.",
    url: "#",
    sortOrder: 2,
  },
];

async function seed() {
  const payload = await getPayloadClient();

  console.log("Seeding prestations...");
  for (const prestation of PRESTATIONS_SEED) {
    const existing = await payload.find({
      collection: "prestations",
      where: { slug: { equals: prestation.slug } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      console.log(`  Skipping "${prestation.title}" (already exists)`);
      continue;
    }

    await payload.create({
      collection: "prestations",
      data: {
        ...prestation,
        features: prestation.features.map((feature) => ({ feature })),
      },
    });
    console.log(`  Created "${prestation.title}"`);
  }

  console.log("Seeding realisations...");
  for (const realisation of REALISATIONS_SEED) {
    const existing = await payload.find({
      collection: "realisations",
      where: { title: { equals: realisation.title } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      console.log(`  Skipping "${realisation.title}" (already exists)`);
      continue;
    }

    await payload.create({
      collection: "realisations",
      data: realisation,
    });
    console.log(`  Created "${realisation.title}"`);
  }

  console.log("Seeding partenaires...");
  for (const partenaire of PARTENAIRES_SEED) {
    const existing = await payload.find({
      collection: "partenaires",
      where: { name: { equals: partenaire.name } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      console.log(`  Skipping "${partenaire.name}" (already exists)`);
      continue;
    }

    await payload.create({
      collection: "partenaires",
      data: partenaire,
    });
    console.log(`  Created "${partenaire.name}"`);
  }

  console.log("Seeding globals...");

  await payload.updateGlobal({
    slug: "site-config",
    data: {
      companyName: "Boréal Bois",
      phone: "06 00 00 00 00",
      email: "contact@borealbois.fr",
      zone: "Région lyonnaise (ouest et nord) & Nord Isère",
      ctaBanner: {
        text: "Un projet bois en tête ? Parlons-en. Devis gratuit, réponse sous 24h.",
        buttonLabel: "Demander un devis",
      },
    },
  });
  console.log("  Updated site-config");

  await payload.updateGlobal({
    slug: "homepage",
    data: {
      hero: {
        title:
          "Charpentier constructeur bois — Région lyonnaise & Nord Isère",
        description:
          "Boréal Bois, c'est la construction bois pensée autrement : des matériaux choisis, un savoir-faire artisanal et une vraie démarche écologique. De la charpente à la terrasse, on construit du solide, du durable et du beau.",
        ctaPrimary: "Demander un devis gratuit",
        ctaSecondary: "Découvrir nos réalisations",
      },
      about: {
        title: "Qui sommes-nous",
        content:
          "Fondé par un charpentier formé en France et forgé au Canada, Boréal Bois allie maîtrise technique et conviction écologique. Avec 7 ans d'expérience en charpente et construction bois, nous intervenons sur la région lyonnaise et le Nord Isère pour des projets sur mesure, du petit aménagement extérieur à l'extension en ossature bois.\n\nNotre approche : des essences sélectionnées (douglas, mélèze, pin classe 4, chêne), des matériaux biosourcés pour l'isolation, et un circuit court avec des fournisseurs locaux. Pas de langue de bois, juste du bon bois.",
      },
      valuesPreview: {
        items: [
          { text: "Essences locales et durables" },
          { text: "Matériaux biosourcés" },
          { text: "Circuits courts" },
          { text: "Végétalisation des toitures" },
        ],
      },
      seo: {
        metaTitle:
          "Boréal Bois | Charpentier constructeur bois — Lyon & Nord Isère",
        metaDescription:
          "Charpentier constructeur bois en région lyonnaise. Ossature bois, terrasse, pergola, carport, isolation biosourcée. Devis gratuit, matériaux écologiques, circuits courts.",
      },
    },
  });
  console.log("  Updated homepage");

  await payload.updateGlobal({
    slug: "valeurs-page",
    data: {
      title: "Construire en bois, construire responsable",
      intro:
        "Chez Boréal Bois, l'écologie n'est pas un argument marketing, c'est une conviction. Elle guide chaque choix, de l'essence du bois au fournisseur, en passant par les techniques de mise en œuvre.",
      sections: [
        {
          title: "Des essences choisies, pas subies",
          content:
            "Nous privilégions le douglas, naturellement durable et qui ne nécessite aucun traitement chimique. Pour les usages extérieurs exposés, le pin traité classe 4 offre une alternative performante, économique et bien plus responsable que les bois exotiques importés à l'autre bout du monde. Le mélèze et le chêne complètent notre palette selon les projets.",
        },
        {
          title: "Circuits courts et fournisseurs locaux",
          content:
            "Nos bois et matériaux proviennent de fournisseurs locaux. Moins de transport, plus de traçabilité, et un soutien direct à la filière bois régionale.",
        },
        {
          title: "Isolation biosourcée",
          content:
            "Ouate de cellulose, fibre de bois, chanvre, laines végétales : nous isolons avec des matériaux performants, sains et à faible empreinte carbone. Parce qu'une maison bien construite, c'est aussi une maison bien isolée.",
        },
        {
          title: "Végétalisation des toitures",
          content:
            "Quand c'est possible, nous proposons la végétalisation des toitures de nos pergolas, carports et abris. C'est notre façon de compenser la surface au sol exploitée et de redonner un peu de vert au projet.",
        },
      ],
    },
  });
  console.log("  Updated valeurs-page");

  console.log("Seed complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
