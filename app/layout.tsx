import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import StartAnimation from "@/components/start-animation"
import { Suspense } from "react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fredoka = Fredoka({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: {
    default: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
    template: "%s | Adil Mukhi",
  },
  description:
    "Adil Mukhi is a student researcher and aspiring medical professional with experience in healthcare, research, and leadership. Explore his projects, publications, and achievements.",
  keywords: [
    "Adil Mukhi",
    "student researcher",
    "medical research",
    "healthcare",
    "Dr. Interested",
    "science",
    "medicine",
    "research",
    "portfolio",
    "projects",
    "skills",
    "IB student",
    "youth researcher",
  ],
  authors: [{ name: "Adil Mukhi", url: siteUrl }],
  creator: "Adil Mukhi",
  publisher: "Adil Mukhi",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
    description:
      "Adil Mukhi is a student researcher and aspiring medical professional with experience in healthcare, research, and leadership. Explore his projects, publications, and achievements.",
    siteName: "Adil Mukhi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
    description:
      "Adil Mukhi is a student researcher and aspiring medical professional with experience in healthcare, research, and leadership.",
    creator: "@adilm_0",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "portfolio",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${fredoka.variable}`}>
      <head>
        <meta name="p:domain_verify" content="10e6074a03407f2fd24aed7425a2acd9" />
        <meta name="theme-color" content="#0ea5e9" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/profile-pic.jpg" as="image" />
        <link rel="preload" href="/pixtin.jpg" as="image" />

        {/* Google Tag Manager - load with strategy="afterInteractive" for better performance */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KHTXF8N5');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16895913653" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16895913653');
          `}
        </Script>

        {/* Structured data for Person */}
        <Script id="structured-data-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "${siteUrl}/#person",
              "name": "Adil Mukhi",
              "url": "${siteUrl}",
              "image": "${siteUrl}/profile-pic.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/adil-mukhi",
                "https://github.com/adilMukhi",
                "https://x.com/adilm_0",
                "https://www.instagram.com/adilm.0",
                "https://linktr.ee/adilm.0"
              ],
              "jobTitle": "Student Researcher",
              "worksFor": {
                "@type": "Organization",
                "name": "Dr. Interested",
                "url": "https://linktr.ee/dr.interested"
              },
              "knowsAbout": ["Medical Research", "Healthcare", "Science", "Leadership", "Content Creation"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Glenforest Secondary School",
                "url": "https://glenforest.peelschools.org/"
              }
            }
          `}
        </Script>

        {/* Structured data for WebSite */}
        <Script id="structured-data-website" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "${siteUrl}/#website",
              "url": "${siteUrl}",
              "name": "Adil Mukhi - Student Researcher & Aspiring Medical Professional",
              "description": "Adil Mukhi is a student researcher and aspiring medical professional with experience in healthcare, research, and leadership.",
              "publisher": {
                "@id": "${siteUrl}/#person"
              },
              "inLanguage": "en-US"
            }
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHTXF8N5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense fallback={null}>
          <StartAnimation />
          {children}
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
