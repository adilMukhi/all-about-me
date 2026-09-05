import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import { Separator } from "@/components/ui/separator"
import SocialLinks from "@/components/social-links"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilmukhi.vercel.app"
const LAST_UPDATED = "September 5, 2026"

export const metadata: Metadata = {
  title: "Biography of Adil Mukhi",
  description:
    "Approved short, medium, and long biographies of Adil Mukhi — youth advocate, TEDx speaker, and founder of Dr. Interested — for use in articles, event programs, and introductions.",
  alternates: { canonical: `${siteUrl}/media-inquiries/biography` },
  openGraph: {
    type: "website",
    siteName: "Adil Mukhi",
    title: "Biography of Adil Mukhi",
    description:
      "Approved short, medium, and long biographies of Adil Mukhi for media and event use.",
    url: `${siteUrl}/media-inquiries/biography`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Biography of Adil Mukhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography of Adil Mukhi",
    description: "Approved short, medium, and long biographies of Adil Mukhi for media and event use.",
    creator: "@adilm_0",
    site: "@adilm_0",
    images: [`${siteUrl}/og-image.png`],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/media-inquiries/biography#webpage`,
  url: `${siteUrl}/media-inquiries/biography`,
  name: "Biography of Adil Mukhi",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-CA",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Media Inquiries", item: `${siteUrl}/media-inquiries` },
      { "@type": "ListItem", position: 3, name: "Biography", item: `${siteUrl}/media-inquiries/biography` },
    ],
  },
}

const oneLiner =
  "Adil Mukhi is a Mississauga-based youth advocate, TEDx speaker, and founder of Dr. Interested, an organization that has reached more than 160,000 people across 106 countries."

const shortBio =
  "Adil Mukhi is a youth advocate, public speaker, and changemaker from the Greater Toronto Area. He is the founder and Executive Director of Dr. Interested, a youth-run organization that has reached over 160,000 people across 106 countries through mentorship, research, and career-exploration programming. A TEDx speaker and Ontario Volunteer Service Award recipient, Adil works at the intersection of youth empowerment, mental health, education, and civic participation."

const mediumBio =
  "Adil Mukhi is a Mississauga, Ontario-based youth advocate, public speaker, and changemaker. He founded Dr. Interested at age 13 to widen access to healthcare career exploration after pandemic lockdowns narrowed opportunities for students; today the organization has reached more than 160,000 people across 106 countries, with over 1,700 members and 367 executives running mentorship programs, research initiatives, and events such as the MedExplore Conference at the University of Toronto Mississauga.\n\nBeyond Dr. Interested, Adil has served as a youth advisor and council member with organizations including SickKids, Children First Canada, Results Canada, the Mood Disorders Society of Canada, and the 5Rights Foundation, contributing to national conversations on youth social media use, mental health, and the digital rights of children. His Play-to-Heal work explores how sport, mental health, and policy intersect, including recommendations submitted to the Future of Sport in Canada Commission.\n\nA TEDx speaker, published poet, and Canadian Biology Olympiad medallist, Adil has been recognized as one of Children First Canada's Top 50 youth in Canada, a Global Youth Awards finalist, and a recipient of the Ontario Volunteer Service Award and the City of Mississauga Civic Award of Recognition."

const longBio = [
  "Adil Mukhi is a youth advocate, public speaker, advisor, and consultant from the Greater Toronto Area, currently completing the International Baccalaureate program at Glenforest Secondary School in Mississauga, Ontario. His work is guided by a simple philosophy — “with curiosity as my guide, I will never go wrong” — and by the belief that meaningful change begins when young people are given the opportunity and support to lead.",
  "Adil is the founder and Executive Director of Dr. Interested, which he started in Grade 9 at the age of 13. He had felt that career education was limited during the pandemic, and built Dr. Interested to give students hands-on exposure to healthcare and research careers through workshops, mentorship, research programs, and events. The organization has since grown into a global, youth-run initiative reaching more than 160,000 people across 106 countries, with over 1,700 members, 367 executives, hundreds of mentorship hours, and more than 20 events, including its MedExplore Conference hosted at the University of Toronto Mississauga.",
  "Adil contributes to research and policy well beyond his own organization. He has worked with the Hospital for Sick Children as a Co–Knowledge Mobilization Champion and youth advisor, contributing to work connected to the CIHR-funded OPTIMAL Project on youth social media use, and has held youth advisory and leadership roles with Children First Canada, Results Canada, the Aga Khan Foundation Canada, the Mood Disorders Society of Canada's National Youth Advisory Council, the Young Canadian Roundtable on Health, and the University of Toronto's KPE Rethink Sport Collective. As a Canadian Youth Ambassador for the 5Rights Foundation, he has spoken publicly about children's rights in the digital world, including with the UN Office of the High Commissioner for Human Rights.",
  "A cornerstone of Adil's advocacy is the Play-to-Heal movement, which examines how sport, mental health, and policy intersect. He has mentored young athletes, contributed to national research on youth well-being, and signed onto recommendations submitted in person to the Future of Sport in Canada Commission. He is also a competitive tennis player.",
  "Adil is a TEDx speaker and a frequent guest on podcasts and panels. His recognitions include selection as one of Children First Canada's Top 50 youth across Canada, finalist standing at the Global Youth Awards, the Ontario Volunteer Service Award, the City of Mississauga Civic Award of Recognition, and the Peel District School Board Award of Distinction. In academics and the arts he has earned Silver and Bronze medals at the Canadian Biology Olympiad, National Biology Scholar with Distinction status, a Distinction in the Canadian Computing Competition, and publication in two national youth poetry anthologies archived by Library and Archives Canada.",
  "Adil is available for interviews, commentary, speaking engagements, and consulting. Media inquiries can be directed to adilm@drinterested.org.",
]

const BioBlock = ({
  label,
  hint,
  children,
}: {
  label: string
  hint: string
  children: ReactNode
}) => (
  <div className="rounded-lg bg-card p-6 shadow-sm">
    <div className="flex items-baseline justify-between gap-3">
      <h2 className="text-lg font-semibold text-primary">{label}</h2>
      <span className="text-xs text-muted-foreground">{hint}</span>
    </div>
    <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted-foreground">{children}</div>
  </div>
)

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-background page-transition">
      <Script id="biography-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Header />

      <AnimatedSection>
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-3xl">
            <SEOBreadcrumbs
              items={[
                { label: "Media Inquiries", href: "/media-inquiries" },
                { label: "Biography", href: "/media-inquiries/biography", active: true },
              ]}
            />
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary"
              style={{ fontFamily: "'Sour Gummy', var(--font-fredoka), Fredoka, 'Trebuchet MS', system-ui, sans-serif" }}
            >
              Biography of Adil Mukhi
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
              Approved biographies for articles, event programs, and introductions. Please use these versions as written,
              or trim from the end. Questions or a custom length?{" "}
              <a href="mailto:adilm@drinterested.org" className="text-primary underline underline-offset-2">
                adilm@drinterested.org
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>
      </AnimatedSection>

      <Separator />

      <AnimatedSection delay={100}>
        <section className="py-16">
          <div className="container max-w-3xl space-y-6">
            <BioBlock label="One-liner" hint="~30 words">
              <p>{oneLiner}</p>
            </BioBlock>

            <BioBlock label="Short bio" hint="~65 words">
              <p>{shortBio}</p>
            </BioBlock>

            <BioBlock label="Medium bio" hint="~180 words">
              {mediumBio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </BioBlock>

            <BioBlock label="Long bio" hint="~430 words">
              {longBio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </BioBlock>

            <div className="rounded-lg border-l-2 border-primary/20 bg-muted/50 p-4 text-[15px] leading-7 text-muted-foreground">
              <h2 className="font-semibold text-foreground">Style notes</h2>
              <ul className="mt-2 space-y-1 list-disc pl-5 marker:text-primary">
                <li>Name on first reference: <strong>Adil Mukhi</strong>. Subsequent references: <strong>Adil</strong> (or <strong>Mukhi</strong> in AP style).</li>
                <li>Pronouns: he/him.</li>
                <li>Organization name: <strong>Dr. Interested</strong> (with the period).</li>
                <li>Title: <strong>founder and Executive Director of Dr. Interested</strong>.</li>
                <li>Location: Mississauga, Ontario / Greater Toronto Area.</li>
              </ul>
            </div>

            <p className="text-[15px] text-muted-foreground">
              For more detail, see the{" "}
              <Link href="/background" className="text-primary underline underline-offset-2">
                full background
              </Link>{" "}
              and{" "}
              <Link href="/media" className="text-primary underline underline-offset-2">
                media coverage
              </Link>
              . Need photos?{" "}
              <Link href="/media-inquiries/headshots" className="text-primary underline underline-offset-2">
                Headshots &amp; images &rarr;
              </Link>
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <SocialLinks />
      </AnimatedSection>
      <Footer />
    </main>
  )
}
