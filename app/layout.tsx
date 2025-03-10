import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://adilmukhi.vercel.app"),
  title: "Adil Mukhi - Personal Website",
  description:
    "A showcase of my skills, projects, and experiences as a student and aspiring researcher in science, medicine, and research.",
  keywords: "Adil Mukhi, student researcher, science, medicine, research, portfolio, projects, skills",
  authors: [{ name: "Adil Mukhi" }],
  creator: "Adil Mukhi",
  publisher: "Adil Mukhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adilmukhi.vercel.app",
    title: "Adil Mukhi - Personal Website",
    description: "A showcase of my skills, projects, and experiences as a student and aspiring researcher.",
    siteName: "Adil Mukhi",
    images: [
      {
        url: "https://adilmukhi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adil Mukhi - Personal Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Mukhi - Personal Website",
    description: "A showcase of my skills, projects, and experiences as a student and aspiring researcher.",
    creator: "@adilm_0",
    images: ["https://adilmukhi.vercel.app/og-image.jpg"],
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
  alternates: {
    canonical: "https://adilmukhi.vercel.app",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="p:domain_verify" content="10e6074a03407f2fd24aed7425a2acd9" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="canonical" href="https://adilmukhi.vercel.app" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Google Tag Manager */}
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

        {/* Font imports with display=swap for better performance */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kirang+Haerang&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap" />

        {/* Structured data for better SEO */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Adil Mukhi",
              "url": "https://adilmukhi.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/adil-mukhi",
                "https://github.com/adilMukhi",
                "https://x.com/adilm_0",
                "https://www.instagram.com/adilm.0"
              ],
              "jobTitle": "Student Researcher",
              "knowsAbout": ["Science", "Medicine", "Research", "Content Creation"]
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Background blobs for visual interest */}
        <div aria-hidden="true" className="bg-blob bg-blob-1"></div>
        <div aria-hidden="true" className="bg-blob bg-blob-2"></div>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHTXF8N5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

