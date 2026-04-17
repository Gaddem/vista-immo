import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISTA IMMO — Immobilier de Prestige",
  description:
    "Agence immobilière premium spécialisée dans les biens d'exception. Vente, location et estimation de propriétés de prestige.",
  keywords: "immobilier, prestige, vente, location, estimation, villa, appartement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
