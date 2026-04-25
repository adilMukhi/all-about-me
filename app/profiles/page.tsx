import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profilesMetadata } from "@/app/page-metadata"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"

const profileLinks = [
  { label: "Primary Website", href: "https://adilmukhi.vercel.app/" },
  { label: "Alternate Website", href: "https://adilm.drinterested.org/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adil-mukhi" },
  { label: "Instagram", href: "https://www.instagram.com/adilm.0" },
  { label: "Facebook", href: "https://www.facebook.com/adilm.0/" },
  { label: "X", href: "https://x.com/adilm_0" },
  { label: "Bluesky", href: "https://bsky.app/profile/adilm0.bsky.social" },
  { label: "TikTok", href: "https://www.tiktok.com/@adilm.0" },
  { label: "YouTube", href: "https://www.youtube.com/@AdilMukhi" },
]

export const metadata: Metadata = profilesMetadata

export default function ProfilesPage() {
  const profilePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/profiles#profile-page`,
    url: `${siteUrl}/profiles`,
    name: "Adil Mukhi Follow & Profiles",
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Adil Mukhi",
      url: siteUrl,
      sameAs: profileLinks.map((profile) => profile.href),
    },
  }

  return (
    <>
      <Header />
      <Script id="profile-page-structured-data" type="application/ld+json">
        {JSON.stringify(profilePageStructuredData)}
      </Script>
      <main className="min-h-screen bg-background page-transition">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-4xl">
            <SEOBreadcrumbs items={[{ label: "Profiles", href: "/profiles", active: true }]} />
            <h1 className="text-4xl font-bold tracking-tighter mb-6 sm:text-5xl md:text-6xl" style={{ fontFamily: "Sour Gummy, latin" }}>
              Follow & Profiles
            </h1>
            <p className="text-muted-foreground mb-10 text-lg">
              Official social media and website profiles for Adil Mukhi.
            </p>

            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>Official Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profileLinks.map((profile) => (
                    <li key={profile.href}>
                      <a
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center underline underline-offset-4 hover:text-primary transition-colors"
                      >
                        {profile.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
