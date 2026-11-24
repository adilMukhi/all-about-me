import type React from "react"
import { WIKIDATA_ADIL_MUKHI, WIKIDATA_DR_INTERESTED } from "@/lib/site"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import StartAnimation from "@/components/start-animation-lazy"
import { ThemeProvider } from "@/components/theme-provider"
import SiteChat from "@/components/site-chat"
import TranslateRuntime from "@/components/translate-runtime"
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
  "414 executives",
  "2,200+ members",
  "129 countries and territories",
  "45+ events",
  "389,000+ youth impacted",
  "11 million+ reached",
  "$60,000+ in funding",
  "1,400+ mentor hours",
  "1,500 volunteers",
  "7,500 volunteer hours",
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
    default: "Adil Mukhi | Public Speaker, Consultant & Youth Advocate",
    template: "%s | Adil Mukhi",
  },
  description:
    "Public speaker, consultant, and youth advocate. Founder of Dr. Interested, a youth-led global community that has impacted 389,000+ youth in 129 countries.",
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
    "Ontario Medal for Young Volunteers",
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
    // No site-wide canonical: every page sets its own absolute canonical so it
    // never inherits "/" by accident.
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Adil Mukhi RSS Feed" }],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: "Adil Mukhi | Public Speaker, Consultant & Youth Advocate",
    description:
      "Adil Mukhi is a public speaker, consultant, and youth advocate. At 13 he started Dr. Interested, a youth-led global community of 2,200 members across 129 countries and territories that has impacted more than 389,000 young people.",
    siteName: "Adil Mukhi",
    authors: ["Adil Mukhi"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adil Mukhi, public speaker, consultant and youth advocate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adil Mukhi | Public Speaker, Consultant & Youth Advocate",
    description:
      "Public speaker, consultant, and youth advocate. Founder of Dr. Interested, a youth-led global community that has impacted 389,000+ youth in 129 countries.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
    <html lang="en-CA" className={`scroll-smooth ${inter.variable} ${fredoka.variable}`} suppressHydrationWarning>
      <head>
        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: (JSON.stringify([
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
              foundingDate: "2023-09",
              founder: {
                "@id": `${siteUrl}/#person`,
              },
              areaServed: "Worldwide",
              email: "adilm@drinterested.org",
              telephone: "+1 289 796 2566",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "speaking and consulting inquiries",
                  email: "adilm@drinterested.org",
                  url: "https://cal.com/adilm.0/15min",
                  availableLanguage: ["English", "French"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "business phone",
                  telephone: "+1 289 796 2566",
                  description: "Work number — hours vary; booking a call is the reliable option.",
                  availableLanguage: ["English", "French"],
                },
              ],
              description:
                "Dr. Interested is a youth-led global organization founded by Adil Mukhi. It serves as a platform for public speaking, advising, consulting, mentorship, and youth leadership across the Greater Toronto Area and worldwide. Stats from its 2026 Annual Impact Report (2025 and 2026 combined): 389,000+ youth impacted, 11 million+ reached, 129 countries and territories, $60,000+ in funding, 2,200+ members, 414 executives, 1,500 volunteers, 7,500 volunteer hours, 45+ events, and 1,400+ mentor hours.",
              knowsAbout: [
                "public speaking",
                "advising",
                "consulting",
                "youth leadership",
                "mentorship",
                "community engagement",
                "public health advocacy",
              ],
              sameAs: [WIKIDATA_DR_INTERESTED, "https://www.drinterested.org/", "https://linktr.ee/dr.interested"],
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
              image: [
                ["/pictures/adil-mukhi-formal-headshot.jpg", "Formal headshot of Adil Mukhi"],
                ["/pictures/adil-mukhi-queens-park-flags-portrait.jpg", "Adil Mukhi at Queen's Park, 2026"],
                ["/ontario-medal-young-volunteers-2026.jpg", "Adil Mukhi receiving the Ontario Medal for Young Volunteers at Queen's Park"],
                ["/pictures/adil-mukhi-tedx-speaking-1.png", "Adil Mukhi speaking at TEDx"],
                ["/pictures/adil-mukhi-portrait-closeup.jpg", "Portrait of Adil Mukhi"],
              ].map(([path, caption]) => ({
                "@type": "ImageObject",
                url: `${siteUrl}${encodeURI(path)}`,
                contentUrl: `${siteUrl}${encodeURI(path)}`,
                caption,
                creditText: "Adil Mukhi",
                creator: { "@type": "Person", name: "Adil Mukhi" },
                copyrightNotice: "© Adil Mukhi",
                license: `${siteUrl}/terms`,
                acquireLicensePage: `${siteUrl}/media-inquiries`,
              })),
              jobTitle: "Public Speaker, Consultant & Youth Advocate",
              email: "adilm@drinterested.org",
              telephone: "+1 289 796 2566",
              description:
                "Adil Mukhi is a public speaker, consultant, and youth advocate whose motto is \"With curiosity as my guide, I will never go wrong.\" At 13 he started Dr. Interested, a youth-led global community of 2,200 members across 129 countries and territories, backed by 328 executives and 600 volunteers, that has impacted more than 389,000 young people across 2025 and 2026 by helping them explore wellness careers, take part in policymaking, and find a community where they belong. Dr. Interested is listed as a civil society organization with the United Nations ECOSOC, and its policy submissions have been published by the UN Office of the High Commissioner for Human Rights. Adil is a Co-Knowledge Mobilization Champion on the SickKids OPTIMAL study of youth social media use, a member of the SickKids iKT Panel on school phone bans, and an advisor and co-author on the University of Toronto KPE RE.sport Delphi study. He received the Ontario Medal for Young Volunteers, was named one of Canada's Top 20 Changemakers Under 18 by Children First Canada, was a Global Youth Awards 2025 finalist, gave a TEDx talk, appeared on CBC, and spoke at the AI for Good Summit in Geneva with the 5Rights Foundation Youth Council.",
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
                "Ontario Medal for Young Volunteers (Province of Ontario, 2025)",
                "Top 20 Under 18 in Canada (Children First Canada, 2026)",
                "Canadian Choice Award, Non-Profit Organizations, Mississauga (Dr. Interested, 2026)",
                "Ontario Volunteer Service Award (x3, Province of Ontario, 2025 and 2026)",
                "City of Mississauga Civic Award (2025 and 2026)",
                "Award of Distinction (Peel District School Board, 2026)",
                "National Biology Scholar with Distinction (University of Toronto, 2026)",
                "Top 50 Youth across Canada (Children First Canada, 2025)",
                "Global Youth Awards Finalist, Empowerment Category (Legacy Project, 2025)",
                "Outstanding Youth Award (Results Canada, 2025)",
              ],
              memberOf: [
                {
                  "@type": "Organization",
                  name: "Dr. Interested",
                  url: `${siteUrl}/experience/drinterested`,
                  sameAs: WIKIDATA_DR_INTERESTED,
                },
                {
                  "@type": "Organization",
                  name: "5Rights Youth Council",
                  url: "https://5rightsfoundation.com/",
                },
              ],
              sameAs: [WIKIDATA_ADIL_MUKHI, ...siteAliases, ...socialProfiles],
              worksFor: {
                "@id": `${siteUrl}/#organization`,
              },
            },
          ])).replace(/</g, "\\u003c") }}
        />
        <meta name="p:domain_verify" content="10e6074a03407f2fd24aed7425a2acd9" />
        <meta name="theme-color" content="#0369a1" />
        {/* Without JavaScript, fade-in sections never animate in, so show them */}
        <noscript>
          <style>{`.opacity-0{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <link rel="alternate" type="application/rss+xml" title="Adil Mukhi RSS Feed" href={`${siteUrl}/rss.xml`} />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {socialProfiles.map((profile) => (
          <link key={profile} rel="me" href={profile} />
        ))}

        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KHTXF8N5');
          `}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16895913653" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={null}>
            <StartAnimation />
            {children}
          </Suspense>
          <SiteChat />
          <TranslateRuntime />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
