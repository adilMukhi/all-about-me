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
const socialProfiles = [
  "https://www.linkedin.com/in/adil-mukhi",
  "https://www.instagram.com/adilm.0",
  "https://www.facebook.com/adilm.0/",
  "https://x.com/adilm_0",
  "https://bsky.app/profile/adilm0.bsky.social",
  "https://www.tiktok.com/@adilm.0",
  "https://www.youtube.com/@AdilMukhi",
]
const siteAliases = ["https://adilmukhi.vercel.app/", "https://adilm.drinterested.org/"]
const drInterestedStats = [
  "367 executives",
  "1,700 members",
  "106 countries",
  "20+ events",
  "160,000 impacted",
  "400+ mentor hours",
  "900 volunteers",
  "12,169 followers",
  "752 posts",
  "3,713,406 impressions",
  "Revenue $5,233.70",
  "Operating income: net loss of $81.01",
]
const personKeywords = [
  "youth advocacy",
  "public speaking",
  "public speaker",
  "speaker",
  "keynote speaker",
  "mental health",
  "digital rights",
  "research",
  "healthcare advocacy",
  "community leadership",
  "advising",
  "consulting",
  "workshop facilitation",
  "Greater Toronto Area",
  "Toronto speaker",
  "Mississauga speaker",
  "Ontario speaker",
  "global speaker",
  "education",
  "social impact",
  "service consulting",
]

const getValidUrl = (url: string): URL => {
  try {
    return new URL(url)
  } catch {
    return new URL("https://adilmukhi.vercel.app")
  }
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: {
    default: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    template: "%s | Adil Mukhi",
  },
  description:
    "Adil Mukhi is a youth advocate, public speaker, and changemaker. Founder of Dr. Interested reaching 60,000+ youth globally. TEDx speaker, Ontario Volunteer Service Award recipient, and advocate for mental health and youth empowerment.",
  keywords: [
    "Adil Mukhi",
    "youth advocate",
    "public speaker",
    "changemaker",
    "Dr. Interested",
    "Youth",
    "Mississauga",
    "Ontario",
    "Canada",
    "Glenforest",
    "Speaking",
    "Impactful youth in Canada",
    "TEDx speaker",
    "mental health advocate",
    "youth empowerment",
    "Ontario Volunteer Service Award",
    "Canadian Biology Olympiad",
    "Results Canada",
    "Children First Canada",
    "SickKids Hospital",
    "research volunteer",
    "youth leadership",
    "community service",
    "policy advocacy",
    "student researcher",
    "medical research",
    "healthcare advocacy",
    "youth mentorship",
    "advising",
    "facilitating",
    "workshops",
    "youth conferences",
  ],
  authors: [{ name: "Adil Mukhi", url: siteUrl }],
  creator: "Adil Mukhi",
  publisher: "Adil Mukhi",
  applicationName: "Adil Mukhi",
  metadataBase: getValidUrl(siteUrl),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Adil Mukhi RSS Feed" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    description:
      "Adil Mukhi is a youth advocate, public speaker, and changemaker. Founder of Dr. Interested reaching 60,000+ youth globally. TEDx speaker and advocate for mental health and youth empowerment.",
    siteName: "Adil Mukhi",
    authors: ["Adil Mukhi"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Mukhi - Youth Advocate, Public Speaker & Changemaker",
    description:
      "Youth advocate, public speaker, and changemaker. Founder of Dr. Interested reaching 60,000+ youth globally. TEDx speaker and mental health advocate.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: ["/og-image.png"],
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
  manifest: "/site.webmanifest",
  category: "portfolio",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`scroll-smooth ${inter.variable} ${fredoka.variable}`}>
      <head>
        <Script id="site-structured-data" type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "Adil Mukhi",
              alternateName: ["Adil Mukhi Personal Website", ...siteAliases],
              inLanguage: "en-CA",
              publisher: {
                "@id": `${siteUrl}/#person`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "Dr. Interested",
              alternateName: "Adil Mukhi",
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/pixtin.jpg`,
                caption: "Dr. Interested",
              },
              foundingDate: "2024",
              founder: {
                "@id": `${siteUrl}/#person`,
              },
              areaServed: "Worldwide",
              email: "adilm@drinterested.org",
              telephone: "+1-289-796-2566",
              contactPoint: {
                "@type": "ContactPoint",
                email: "adilm@drinterested.org",
                telephone: "+1-289-796-2566",
                contactType: "speaking and consulting inquiries",
                availableLanguage: ["English", "French"],
              },
              description:
                "Dr. Interested is a youth-led global organization founded by Adil Mukhi. It serves as a platform for public speaking, advising, consulting, mentorship, and youth leadership across the Greater Toronto Area and worldwide. Stats: 367 executives, 1,700 members, 106 countries, 20+ events, 160,000 impacted, 400+ mentor hours, 900 volunteers, 12,169 followers, 752 posts, and 3,713,406 impressions.",
              knowsAbout: [
                "public speaking",
                "advising",
                "consulting",
                "youth leadership",
                "mentorship",
                "community engagement",
                "public health advocacy",
              ],
              sameAs: [...siteAliases, ...socialProfiles],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteUrl}/#person`,
              name: "Adil Mukhi",
              givenName: "Adil",
              familyName: "Mukhi",
              url: siteUrl,
              mainEntityOfPage: siteUrl,
              image: {
                "@type": "ImageObject",
                url: `${siteUrl}/pictures/adil-mukhi-formal-headshot.jpg`,
                caption: "Adil Mukhi",
              },
              jobTitle: "Youth Advocate, Public Speaker, Advisor, Consultant & Founder",
              email: "adilm@drinterested.org",
              telephone: "+1-289-796-2566",
              description:
                "Adil Mukhi is a youth advocate, public speaker, advisor, consultant, founder of Dr. Interested, and community leader focused on mental health, education, social impact, and youth empowerment across the Greater Toronto Area and worldwide. Dr. Interested stats: 367 executives, 1,700 members, 106 countries, 20+ events, 160,000 impacted, 400+ mentor hours, 900 volunteers, 12,169 followers, 752 posts, 3,713,406 impressions, revenue $5,233.70, and operating income: net loss of $81.01.",
              knowsAbout: personKeywords,
              knowsLanguage: ["en", "fr"],
              nationality: { "@type": "Country", name: "Canada" },
              homeLocation: {
                "@type": "Place",
                name: "Mississauga, Ontario, Canada",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mississauga",
                  addressRegion: "ON",
                  addressCountry: "CA",
                },
              },
              hasOccupation: [
                { "@type": "Occupation", name: "Public Speaker", occupationLocation: { "@type": "City", name: "Mississauga" } },
                { "@type": "Occupation", name: "Youth Advocate" },
                { "@type": "Occupation", name: "Consultant" },
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Glenforest Secondary School",
                  url: "https://glenforest.peelschools.org/",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "University of Toronto, Temerty Faculty of Medicine",
                  url: "https://temertymedicine.utoronto.ca/",
                },
              ],
              award: [
                "Top 50 Youth across Canada (Children First Canada, 2025)",
                "Global Youth Awards Finalist – Empowerment Category (Legacy Project, 2025)",
                "Ontario Volunteer Service Award",
                "Civic Award of Recognition (City of Mississauga)",
                "Outstanding Youth Award",
              ],
              memberOf: [
                {
                  "@type": "Organization",
                  name: "Dr. Interested",
                  url: `${siteUrl}/experience/drinterested`,
                },
                {
                  "@type": "Organization",
                  name: "5Rights Youth Council",
                  url: "https://5rightsfoundation.com/",
                },
              ],
              sameAs: [...siteAliases, ...socialProfiles],
              worksFor: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          ])}
        </Script>
        <meta name="p:domain_verify" content="10e6074a03407f2fd24aed7425a2acd9" />
        <meta name="theme-color" content="#0ea5e9" />

        <link rel="alternate" type="application/rss+xml" title="Adil Mukhi RSS Feed" href={`${siteUrl}/rss.xml`} />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {socialProfiles.map((profile) => (
          <link key={profile} rel="me" href={profile} />
        ))}

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KHTXF8N5');
          `}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16895913653" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16895913653');
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
