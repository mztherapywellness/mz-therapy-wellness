import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MZ Therapy & Wellness | Bekam & Urutan Home Service Kota Bharu",
  description:
    "MZ Therapy & Wellness menyediakan perkhidmatan bekam dan urutan bergerak rumah ke rumah. Cover seluruh Kota Bharu & sekitar. Booking melalui WhatsApp 0133599766.",
  keywords: [
    "MZ Therapy & Wellness",
    "bekam Kota Bharu",
    "urutan Kota Bharu",
    "bekam rumah ke rumah",
    "urutan home service Kota Bharu",
  ],
  openGraph: {
    title: "MZ Therapy & Wellness | Bekam & Urutan Home Service",
    description:
      "Bekam & urutan terus ke rumah. Cover seluruh Kota Bharu & sekitar.",
    type: "website",
    locale: "ms_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "MZ Therapy & Wellness",
    description:
      "Bekam & urutan home service di Kota Bharu & sekitar.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
