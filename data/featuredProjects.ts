export type ProjectMotif =
  | "speech"
  | "gavel"
  | "tips"
  | "vault"
  | "buildings"
  | "card"
  | "home"
  | "bank"
  | "solana";

export type ProjectVisual = {
  motif: ProjectMotif;
  tagline: string;
  badges: string[];
  gradientFrom: string;
  gradientTo: string;
  accent: string;
};

export type FeaturedProject = {
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  visual: ProjectVisual;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "YouSpeak",
    description:
      "We're building YouSpeak — Speak, Learn and Live the Language. A communications readiness app where AI meets conversation, community, and challenges for individuals, schools, and tutors. A year building it. I build the backend: 1,100+ backend commits in the last 9 months.",
    liveUrl: "https://www.youspeakhq.com/",
    visual: {
      motif: "speech",
      tagline: "Communications readiness",
      badges: ["AI", "Backend"],
      gradientFrom: "#312e81",
      gradientTo: "#7c3aed",
      accent: "#c4b5fd",
    },
  },
  {
    name: "AvaBid",
    description:
      "Auction dApp built for the ACES hackathon on Avalanche, later moved to Lisk. On-chain bidding with transparent settlement.",
    liveUrl: "https://auction-app-mauve.vercel.app",
    githubUrl: "https://github.com/Goodnessmbakara/auction-app",
    visual: {
      motif: "gavel",
      tagline: "On-chain auctions",
      badges: ["Avalanche", "Lisk", "2nd, ACES"],
      gradientFrom: "#7f1d1d",
      gradientTo: "#c2410c",
      accent: "#fdba74",
    },
  },
  {
    name: "ShardTip",
    description:
      "Micro-tipping dapp for sending SHM tips to creators on Shardeum Unstablenet. Built for the Shardeum PayFi Mini Hack.",
    liveUrl: "https://shard-tip.vercel.app/",
    visual: {
      motif: "tips",
      tagline: "Micro-tips for creators",
      badges: ["Shardeum", "1st, Shardeum PayFi"],
      gradientFrom: "#134e4a",
      gradientTo: "#0891b2",
      accent: "#5eead4",
    },
  },
  {
    name: "Keepr",
    description:
      "Digital inheritance product deployed on Lisk Sepolia. Enables secure, transparent, and automated inheritance management with smart contracts.",
    liveUrl: "https://kiipa.vercel.app/",
    githubUrl: "https://github.com/Goodnessmbakara/kiipa",
    visual: {
      motif: "vault",
      tagline: "Digital inheritance",
      badges: ["Lisk", "Smart contracts"],
      gradientFrom: "#0f172a",
      gradientTo: "#a16207",
      accent: "#fcd34d",
    },
  },
  {
    name: "EstateSync",
    description:
      "Estate expense management platform for Nigerian properties. Set up estates, invite stakeholders, allocate and track expenses, one-time or recurring. Role-based access for managers, homeowners, and tenants.",
    liveUrl: "https://estatesync.com.ng",
    visual: {
      motif: "buildings",
      tagline: "Estate expense ledger",
      badges: ["PropTech", "Nigeria"],
      gradientFrom: "#1e3a8a",
      gradientTo: "#059669",
      accent: "#6ee7b7",
    },
  },
  {
    name: "Tilt Pay",
    description:
      "Mobile payment app built on Solana blockchain. Instant, secure payments across online, in-store and peer-to-peer. No hardware costs, no hidden fees, just 1% on tap-to-pay. Universal currency with zero-fee transfers.",
    liveUrl: "https://tilt-pay.com",
    visual: {
      motif: "card",
      tagline: "Tap-to-pay on Solana",
      badges: ["Solana", "Payments"],
      gradientFrom: "#4c1d95",
      gradientTo: "#db2777",
      accent: "#f9a8d4",
    },
  },
  {
    name: "AliveHome",
    description:
      "Nigeria's first AI-powered real estate ecosystem designed to reduce fraud and improve transparency. Features verified listings, secure communication, and virtual tours.",
    liveUrl: "https://alivehome.co",
    visual: {
      motif: "home",
      tagline: "AI real estate trust",
      badges: ["AI", "Real estate"],
      gradientFrom: "#14532d",
      gradientTo: "#0369a1",
      accent: "#7dd3fc",
    },
  },
  {
    name: "Bucx",
    description:
      "Borderless banking solution powered by stablecoins. Open virtual USD accounts, receive payments instantly, and spend globally with your virtual card.",
    liveUrl: "https://bucx.app",
    visual: {
      motif: "bank",
      tagline: "Borderless stablecoin banking",
      badges: ["Stablecoins", "Fintech"],
      gradientFrom: "#0c4a6e",
      gradientTo: "#047857",
      accent: "#6ee7b7",
    },
  },
  {
    name: "Solana Fellowship Server",
    description:
      "Rust-based Solana development server for keypair generation, SPL token operations, and message signing. Selected for Superdevs Academy (Top 400/5000+).",
    githubUrl: "https://github.com/Goodnessmbakara/solana-fellowship-server",
    visual: {
      motif: "solana",
      tagline: "Rust Solana tooling",
      badges: ["Rust", "Solana", "Superdevs"],
      gradientFrom: "#1a0b2e",
      gradientTo: "#14f195",
      accent: "#9945ff",
    },
  },
];
