import "./global-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goodness Mbakara — Software Engineer",
  description:
    "Software engineer and blockchain developer. Building scalable applications and Web3 solutions.",
  keywords:
    "Goodness Mbakara, Software Engineer, Backend Engineer, Blockchain Developer, Django, FastAPI, Python, Solidity, Web3",
  authors: [{ name: "Goodness Mbakara" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Goodness Mbakara — Software Engineer",
    description:
      "Software engineer and blockchain developer. Building scalable applications and Web3 solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodness Mbakara — Software Engineer",
    description:
      "Software engineer and blockchain developer. Building scalable applications and Web3 solutions.",
  },
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
          href="https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
