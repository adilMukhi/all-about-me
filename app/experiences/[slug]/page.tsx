import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Adil Mukhi`,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      publishedTime: post.date,
      authors: ["Adil Mukhi"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-12 page-transition">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: "Experiences", href: "/experiences" },
            { label: post.title, href: `/experiences/${post.slug}`, active: true },
          ]}
        />
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg?height=800&width=1200"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
            {post.title}
          </h1>
          <p className="text-lg text-gray-200">{post.date}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">{post.subtitle}</h2>
      </div>

      <article className="prose max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
          aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
          eu aliquam nisl nisl eu nisl.
        </p>

        <h3>The Beginning of My Journey</h3>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
          auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        </p>

        <p>
          <strong>Key insights I've gained:</strong>
        </p>
        <ul>
          <li>Nulla quis lorem ut libero malesuada feugiat</li>
          <li>Curabitur non nulla sit amet nisl tempus convallis</li>
          <li>Pellentesque in ipsum id orci porta dapibus</li>
          <li>Vivamus magna justo, lacinia eget consectetur sed</li>
        </ul>

        <blockquote>
          "The most important thing is to never stop questioning. Curiosity has its own reason for existing." - Albert
          Einstein
        </blockquote>

        <h3>Challenges and Opportunities</h3>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor
          volutpat. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis
          quis ac lectus.
        </p>
      </article>

      <div className="mt-12 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/experiences" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Experiences
          </Link>
        </Button>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Share this post:</span>
          <div className="flex space-x-2">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://adilmukhi.com/experiences/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
              aria-label="Share on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://adilmukhi.com/experiences/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
              aria-label="Share on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://adilmukhi.com/experiences/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
              aria-label="Share on LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.subtitle,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Adil Mukhi",
            },
          }),
        }}
      />
    </div>
  )
}

