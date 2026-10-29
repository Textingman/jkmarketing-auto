import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JKAuto — Auto Insurance Consulting | Car Selection, Insurance & Maintenance",
  description: "Expert auto insurance consulting helping you choose the right car, find the best coverage, and keep your vehicle running at its best. Serving Albuquerque, NM and beyond.",
  keywords: "auto insurance consulting, car selection, vehicle maintenance, car buying advice, insurance comparison, auto consultancy, Albuquerque",
  openGraph: {
    title: "JKAuto — Auto Insurance Consulting",
    description: "Expert guidance on selecting the right car, comparing auto insurance options, and maintaining your vehicle.",
    siteName: "JKAuto",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
