import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HOSPITAL_INFO } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebsiteSchema,getHospitalSchema } from "@/lib/jsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unityonehealthcentre.com"),
  title: {
    template: `%s | ${HOSPITAL_INFO.name}`,
    default: `${HOSPITAL_INFO.name} | Multispeciality Hospital & Polyclinic in Nadiad, Gujarat`,
  },
  description:
    "Unityone Health Centre provides emergency care, expert general care, orthopedics, and modern diagnostic facilities under one roof.",
  keywords: [
    "Unityone Health Centre",
    "Unityone Health Centre Nadiad", 
    "Multispeciality Polyclinic",
    "Hospital in Nadiad",
    "Unityone",
    "Polyclinic in Nadiad",
    "Unityone hospital",
    "Unityone nadiad",
    "Orthopedic surgeon",
    "Polyclinic consultation",
    "doctors in Nadiad",
  ],
  authors: [{ name: "Unityone Health Centre Medical Team" }],
  creator: HOSPITAL_INFO.name,
  publisher: HOSPITAL_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.unityonehealthcentre.com",
    siteName: HOSPITAL_INFO.name,
    title: "Unityone Health Centre | Multispeciality Hospital in Nadiad, Gujarat",
    description:
      "Modern multispeciality healthcare delivered with expertise, technology, and compassion.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Unityone Health Centre Nadiad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unityone Health Centre | Multispeciality Hospital in Nadiad",
    description: "Emergency Care & Advanced Multispeciality Consultation",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05EDD6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={getHospitalSchema()} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}