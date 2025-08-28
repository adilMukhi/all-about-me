import type { Metadata } from "next"
import { writingPortfolioMetadata } from "../../page-metadata"

import Header from "@/components/header"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import { books, ltes, blogs, clubPublications } from "@/data/portfolio-items"

export const metadata: Metadata = writingPortfolioMetadata

function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex gap-4">
          <div className="w-24 h-32 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {book.image ? (
              <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
              {book.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mb-2">By: {book.authors || "Adil Mukhi et al"}</p>
            <CardDescription className="mb-2">
              {book.publisher} • {book.date}
            </CardDescription>
            {book.isbn && (
              <Badge variant="outline" className="text-xs">
                ISBN: {book.isbn}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
        <div className="space-y-3">
          {book.buyLinks?.onlineChannels && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Online Channels:</h4>
              <div className="flex flex-wrap gap-2">
                {book.buyLinks.onlineChannels.map((channel, index) => (
                  <Button key={index} size="sm" variant="outline" asChild>
                    <a href={channel.url} target="_blank" rel="noopener noreferrer">
                      {channel.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
          {book.buyLinks?.ebookChannels && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Ebook Channels:</h4>
              <div className="flex flex-wrap gap-2">
                {book.buyLinks.ebookChannels.map((channel, index) => (
                  <Button key={index} size="sm" variant="outline" asChild>
                    <a href={channel.url} target="_blank" rel="noopener noreferrer">
                      {channel.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
          {book.buyLinks?.customLinks && (
            <div className="space-y-2">
              {book.buyLinks.customLinks.map((customLink, index) => (
                <Button key={index} size="sm" asChild className="w-full">
                  <a href={customLink.url} target="_blank" rel="noopener noreferrer">
                    {customLink.name}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          )}
          {!book.buyLinks && book.link && (
            <Button size="sm" asChild className="w-full">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                View Publisher
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function PublicationCard({ pub }: { pub: (typeof ltes)[0] | (typeof clubPublications)[0] }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
          {pub.title}
        </CardTitle>
        <CardDescription>
          {pub.publisher} • {pub.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1">
        <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
        <Button size="sm" asChild className="self-start">
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            Read
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

function BlogCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <div className="flex gap-4">
              <div className="w-24 h-32 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                {blog.image ? (
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-2" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                  {blog.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-2">By: {blog.authors || "Adil Mukhi"}</p>
                <CardDescription className="mb-2">
                  {blog.publisher} • {blog.date}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{blog.description}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div>
              <h4 className="text-sm font-semibold mb-3">Articles:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {blog.blogArticles?.map((article, index) => (
                  <div key={index} className="text-sm p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-foreground">{article.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{article.subtitle}</div>
                    <div className="text-xs text-muted-foreground mt-1 flex justify-between">
                      <span>{article.date}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
              {blog.link && (
                <Button size="sm" asChild className="w-full mt-4">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    Read Full Blog
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default function WritingPortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-background">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to My Portfolios
                </Link>
              </Button>
            </div>

            <h1
              className="text-4xl font-bold tracking-tighter mb-8 sm:text-5xl"
              style={{ fontFamily: "Sour Gummy, latin" }}
            >
              Writing Portfolio
            </h1>
            <p className="text-muted-foreground max-w-3xl mb-16">
              A collection of my published works, research papers, and articles across various platforms and topics.
            </p>

            {books.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                  Books
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                  ))}
                </div>
              </div>
            )}

            {ltes.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                  LTEs & Op-EDs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ltes.map((lte, index) => (
                    <PublicationCard key={index} pub={lte} />
                  ))}
                </div>
              </div>
            )}

            {clubPublications.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                  Club Publications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {clubPublications.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} />
                  ))}
                </div>
              </div>
            )}

            {blogs.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Bubblegum Sans', cursive" }}>
                  Blogs
                </h2>
                <div className="space-y-6">
                  {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mb-12">
              <Card className="max-w-md mx-auto">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">Looking for my research publications?</p>
                  <Button asChild>
                    <Link href="/portfolio/research">
                      Check out my Research Portfolio
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Portfolios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <PageLayout />
    </>
  )
}
