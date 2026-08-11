import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mateo Vera Grimaldo — Full-Stack & AI/NLP Developer",
  description:
    "Ingeniero de Sistemas de la UIS. Desarrollo full-stack, sistemas backend robustos (Java/Spring, Python/FastAPI) e IA aplicada (NLP/BERT). Bucaramanga, Colombia.",
  metadataBase: new URL("https://mateovera.dev"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mateo Vera Grimaldo — Full-Stack & AI/NLP Developer",
    description:
      "Ingeniero de Sistemas de la UIS. Desarrollo full-stack, sistemas backend robustos (Java/Spring, Python/FastAPI) e IA aplicada (NLP/BERT).",
    type: "website",
    locale: "es_CO",
    url: "https://mateovera.dev",
    siteName: "Mateo Vera Grimaldo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
