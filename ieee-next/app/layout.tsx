
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Ieee.eec.np"),

  title: {
    default: "IEEE EEC Student Branch",
    template: "%s | IEEE EEC Student Branch",
  },

  description:
    "Explore IEEE EEC Student Branch at Everest Engineering College, Nepal. Discover student activities, technical events, workshops, projects, and opportunities in engineering and technology.",

  applicationName: "IEEE EEC Student Branch",
  creator: "IEEE EEC Student Branch",
  publisher: "IEEE EEC Student Branch",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "IEEE EEC Student Branch",
    title: "IEEE EEC Student Branch",
    description:
      "Discover technical events, workshops, student projects, and engineering opportunities at IEEE EEC Student Branch.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE EEC Student Branch",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IEEE EEC Student Branch",
    description:
      "Explore technology, engineering events, workshops, and student projects at IEEE EEC Student Branch.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>{children}</div>
      </body>
    </html>
  );
}
