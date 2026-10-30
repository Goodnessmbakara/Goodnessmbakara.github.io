export type WinLink = {
  label: string;
  href: string;
};

export type Win = {
  place: string;
  title: string;
  meta: string;
  detail: string;
  links: WinLink[];
};

export const wins: Win[] = [
  {
    place: "1st place",
    title: "Shardeum PayFi Mini Hack",
    meta: "Uyo, Nigeria · Aug 30, 2025",
    detail:
      "Built ShardTip — a micro-tipping dapp for SHM tips to creators on Shardeum Unstablenet.",
    links: [
      { label: "Proof", href: "https://x.com/0x_ikay/status/1971152785711432016" },
      {
        label: "Official results",
        href: "https://x.com/shardeum/status/1970775234266698155",
      },
      { label: "App", href: "https://shard-tip.vercel.app/" },
      { label: "Demo", href: "https://youtu.be/bHx0a72eYLE" },
    ],
  },
  {
    place: "Best Team",
    title: "FTLD × Lisk Smart Contract Developer Cohort",
    meta: "Team lead, Team Defy · Jul 2025",
    detail: "Led Team Defy to Best Team recognition in the cohort.",
    links: [
      {
        label: "Proof",
        href: "https://x.com/FTLDOfficial_/status/1942608996839346464",
      },
    ],
  },
  {
    place: "2nd place",
    title: "ACES hackathon — Avalanche Nigeria",
    meta: "May 2025",
    detail: "Built AvaBid, an auction dApp on Avalanche.",
    links: [
      {
        label: "Proof",
        href: "https://x.com/uniuyoaces/status/1937795685090198000",
      },
    ],
  },
  {
    place: "3rd place",
    title: "UniUyo Sui Buildathon",
    meta: "Team SkillsVerse · Mar 2025 · $200",
    detail: "Podium finish with Team SkillsVerse.",
    links: [
      {
        label: "Proof",
        href: "https://x.com/suioncampus/status/1898615885641769276",
      },
    ],
  },
  {
    place: "2nd place",
    title: "Neon EVM Developer Bootcamp",
    meta: "Jul 2025",
    detail: "Second place in the Neon EVM Developer Bootcamp.",
    links: [
      {
        label: "Proof",
        href: "https://x.com/Neon_EVM/status/1951264708939420046",
      },
    ],
  },
];

export const winsSummary =
  "Hackathon wins: Shardeum PayFi 1st, ACES 2nd, Neon EVM 2nd, Sui 3rd, FTLD × Lisk Best Team";

export const EXPAND_WINS_EVENT = "portfolio:expand-wins";
