import type { ReactElement } from "react";
import type { ProjectMotif } from "@/data/featuredProjects";

type MotifProps = {
  accent: string;
};

function SpeechMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <circle cx="60" cy="60" r="28" stroke={accent} strokeWidth="2.5" opacity="0.35" />
      <circle cx="60" cy="60" r="18" stroke={accent} strokeWidth="2.5" opacity="0.55" />
      <circle cx="60" cy="60" r="8" fill={accent} />
      <path
        d="M88 42c8 8 12 18 12 28s-4 20-12 28"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M98 32c12 12 18 26 18 38s-6 26-18 38"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M32 42c-8 8-12 18-12 28s4 20 12 28"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M22 32C10 44 4 58 4 70s6 26 18 38"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function GavelMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <rect
        x="28"
        y="78"
        width="64"
        height="10"
        rx="2"
        fill={accent}
        opacity="0.35"
      />
      <rect
        x="22"
        y="88"
        width="76"
        height="8"
        rx="2"
        fill={accent}
        opacity="0.55"
      />
      <g transform="rotate(-35 58 48)">
        <rect x="48" y="28" width="20" height="36" rx="3" fill={accent} />
        <rect x="42" y="22" width="32" height="12" rx="3" fill={accent} opacity="0.85" />
        <rect x="55" y="64" width="6" height="28" rx="2" fill={accent} opacity="0.7" />
      </g>
      <circle cx="86" cy="36" r="6" stroke={accent} strokeWidth="2" opacity="0.7" />
      <circle cx="96" cy="48" r="4" stroke={accent} strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

function TipsMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <ellipse cx="48" cy="42" rx="18" ry="12" fill={accent} opacity="0.9" />
      <ellipse cx="48" cy="42" rx="18" ry="12" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
      <path d="M48 30v24" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="72" cy="58" rx="16" ry="11" fill={accent} opacity="0.7" />
      <ellipse cx="60" cy="78" rx="14" ry="10" fill={accent} opacity="0.5" />
      <path
        d="M78 28c8 4 14 12 16 22"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M88 22c10 6 18 16 20 28"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="94" cy="54" r="3" fill={accent} />
      <circle cx="102" cy="42" r="2.5" fill={accent} opacity="0.7" />
    </svg>
  );
}

function VaultMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <rect
        x="28"
        y="30"
        width="64"
        height="66"
        rx="8"
        stroke={accent}
        strokeWidth="3"
        fill={accent}
        fillOpacity="0.12"
      />
      <circle cx="60" cy="58" r="14" stroke={accent} strokeWidth="2.5" />
      <circle cx="60" cy="58" r="5" fill={accent} />
      <path d="M60 72v12" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="42" r="3" fill={accent} opacity="0.6" />
      <circle cx="78" cy="42" r="3" fill={accent} opacity="0.6" />
      <path
        d="M74 88h10M74 94h10"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M88 48l8-4M88 58l10 0M88 68l8 4"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function BuildingsMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <rect x="22" y="48" width="28" height="48" rx="2" fill={accent} opacity="0.55" />
      <rect x="46" y="28" width="32" height="68" rx="2" fill={accent} opacity="0.85" />
      <rect x="74" y="40" width="26" height="56" rx="2" fill={accent} opacity="0.45" />
      <rect x="52" y="36" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="64" y="36" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="52" y="48" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="64" y="48" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="52" y="60" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="64" y="60" width="6" height="6" fill="#fff" opacity="0.35" />
      <rect x="56" y="78" width="12" height="18" fill="#fff" opacity="0.25" />
      <path
        d="M20 100h84"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect x="28" y="56" width="5" height="5" fill="#fff" opacity="0.3" />
      <rect x="38" y="56" width="5" height="5" fill="#fff" opacity="0.3" />
    </svg>
  );
}

function CardMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <rect
        x="18"
        y="38"
        width="84"
        height="52"
        rx="8"
        fill={accent}
        fillOpacity="0.2"
        stroke={accent}
        strokeWidth="2.5"
      />
      <rect x="18" y="50" width="84" height="12" fill={accent} opacity="0.55" />
      <rect x="28" y="72" width="28" height="6" rx="2" fill={accent} opacity="0.7" />
      <circle cx="86" cy="76" r="7" stroke={accent} strokeWidth="2" opacity="0.8" />
      <circle cx="78" cy="76" r="7" stroke={accent} strokeWidth="2" opacity="0.5" />
      <path
        d="M60 22v10M54 26l6-6 6 6"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

function HomeMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <path
        d="M60 22L22 52v44h76V52L60 22z"
        stroke={accent}
        strokeWidth="3"
        fill={accent}
        fillOpacity="0.15"
        strokeLinejoin="round"
      />
      <rect x="50" y="68" width="20" height="28" fill={accent} opacity="0.7" />
      <rect x="34" y="58" width="14" height="12" rx="1" fill={accent} opacity="0.45" />
      <rect x="72" y="58" width="14" height="12" rx="1" fill={accent} opacity="0.45" />
      <circle cx="88" cy="34" r="8" stroke={accent} strokeWidth="2" opacity="0.6" />
      <path
        d="M88 30v8M84 34h8"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function BankMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <path
        d="M20 48L60 26l40 22"
        stroke={accent}
        strokeWidth="3"
        strokeLinejoin="round"
        fill={accent}
        fillOpacity="0.15"
      />
      <rect x="28" y="52" width="10" height="32" fill={accent} opacity="0.7" />
      <rect x="46" y="52" width="10" height="32" fill={accent} opacity="0.55" />
      <rect x="64" y="52" width="10" height="32" fill={accent} opacity="0.7" />
      <rect x="82" y="52" width="10" height="32" fill={accent} opacity="0.55" />
      <rect x="22" y="84" width="76" height="10" rx="2" fill={accent} opacity="0.85" />
      <circle cx="60" cy="40" r="5" fill={accent} />
    </svg>
  );
}

function SolanaMotif({ accent }: MotifProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" fill="none">
      <rect x="28" y="34" width="64" height="14" rx="7" fill={accent} opacity="0.9" />
      <rect x="28" y="53" width="64" height="14" rx="7" fill={accent} opacity="0.55" />
      <rect x="28" y="72" width="64" height="14" rx="7" fill={accent} opacity="0.35" />
      <path
        d="M36 41h8M76 60h8M36 79h8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

const MOTIFS: Record<ProjectMotif, (props: MotifProps) => ReactElement> = {
  speech: SpeechMotif,
  gavel: GavelMotif,
  tips: TipsMotif,
  vault: VaultMotif,
  buildings: BuildingsMotif,
  card: CardMotif,
  home: HomeMotif,
  bank: BankMotif,
  solana: SolanaMotif,
};

export default function ProjectMotifIcon({
  motif,
  accent,
}: {
  motif: ProjectMotif;
  accent: string;
}) {
  const Motif = MOTIFS[motif];
  return <Motif accent={accent} />;
}
