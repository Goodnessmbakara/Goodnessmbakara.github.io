import "./global-styles.css";
import type { Metadata, Viewport } from "next";

const TITLE = "Goodness Mbakara — Ideas are cheap. Execution ships.";
const DESCRIPTION =
  "The gap between an idea and a product is discipline. I close that gap with code, with teams, with deadlines that don't bend. Software engineer shipping proof of work, not proof of concept.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Goodness Mbakara, Software Engineer, Backend Engineer, Blockchain Developer, Django, FastAPI, Python, Solidity, Web3, Builder",
  authors: [{ name: "Goodness Mbakara" }],
  robots: "index, follow",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "GoodnessMbakara.eth",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sniglet:wght@400;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
