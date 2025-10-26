import { blogPosts } from "@/data/blog-posts"
import { certificates } from "@/data/certificates"
import { educationData } from "@/data/education"
import { honorsAwards } from "@/data/honors-awards"
import { mediaItems } from "@/data/media-items"
import {
  portfolioItems,
  books,
  ltes,
  blogs,
  clubPublications,
  researchProjects,
  codingProjects,
  artProjects,
  sportsAchievements,
} from "@/data/portfolio-items"
import { volunteerWork } from "@/data/volunteer-work"
import { workExperiences } from "@/data/work-experience"

// Professional images from public/pictures
const professionalImages = [
  "/pictures/Adil Mukhi - Tedx 1 withbackground.png",
  "/pictures/adil-mukhi-camera-photographer.JPG",
  "/pictures/adil-mukhi-dr-interested-founder.JPG",
  "/pictures/adil-mukhi-formal-headshot.jpg",
  "/pictures/adil-mukhi-graduation.jpg",
  "/pictures/adil-mukhi-informal-portrait.jpg",
  "/pictures/adil-mukhi-lab-coat-medical-research.JPG",
  "/pictures/adil-mukhi-tedx-speaking-1.png",
  "/pictures/adil-mukhi-tedx-speaking-2.jpeg",
  "/pictures/adil-mukhi-tennis-sports.jpg",
]

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
}

// Infer proper MIME type from file extension for accurate SEO/media rendering
function getMimeTypeFromPath(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase()
  switch (ext) {
    case "jpg":
    case "jpeg":
      return "image/jpeg"
    case "png":
      return "image/png"
    case "webp":
      return "image/webp"
    case "gif":
      return "image/gif"
    case "svg":
      return "image/svg+xml"
    default:
      return "image/jpeg"
  }
}

// Generate compact SEO-friendly keywords from text + extras
function generateKeywords(text: string, extras: string[] = []): string {
  const stop = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "of",
    "to",
    "for",
    "in",
    "on",
    "with",
    "by",
    "at",
    "from",
  ])
  const words = (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !stop.has(w) && w.length > 2)
  const uniq = Array.from(new Set(["adil", "mukhi", ...words, ...extras.map((e) => e.toLowerCase())]))
  return uniq.slice(0, 20).join(", ")
}

// Build a polished SEO title from parts
function buildSeoTitle(main: string, context?: string): string {
  const base = "Adil Mukhi"
  return context ? `${base} — ${main} (${context})` : `${base} — ${main}`
}

function generateRssFeed() {
  const baseUrl = "https://adilmukhi.com"
  const currentDate = new Date().toUTCString()

  let rssItems = ""

  // 1. Professional Images - Highest Priority
  professionalImages.forEach((image, index) => {
    const imageName = image.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp|gif|svg|JPG|JPEG|PNG|WEBP|GIF|SVG)/g, "")
    const prettyName = imageName
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    const mimeType = getMimeTypeFromPath(image)
    const stableSlug = imageName?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `image-${index}`
    const title = buildSeoTitle(prettyName || "Professional Image")
    const description = `Professional photograph of Adil Mukhi${prettyName ? ` — ${prettyName}` : ""}. Suitable for profiles, press, and speaking engagements.`
    const keywords = generateKeywords(prettyName || "professional image", ["professional", "portrait", "headshot", "portfolio", "speaker", "research", "STEM", "leadership"]) 

    rssItems += `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${baseUrl}</link>
      <guid isPermaLink="false">professional-image-${stableSlug}</guid>
      <pubDate>${currentDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <enclosure url="${baseUrl}${image}" type="${mimeType}" />
      <category>Professional Images</category>
      <media:content url="${baseUrl}${image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(title)}</media:title>
        <media:description>${escapeXml(description)}</media:description>
        <media:keywords>${escapeXml(keywords)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>
    </item>`
  })

  // 2. Blog Posts with Images
  blogPosts.forEach((post) => {
    const postDate = new Date(post.date).toUTCString()
    const description = stripHtml(post.content)
    const excerpt = (post.excerpt || description.substring(0, 500)) + (post.excerpt ? "" : "...")
    const mimeType = getMimeTypeFromPath(post.image || "")
    const kw = generateKeywords(`${post.title} ${post.subtitle || ""}`, ["blog", "article", "portfolio"]) 

    rssItems += `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/experiences/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/experiences/${post.slug}</guid>
      <pubDate>${postDate}</pubDate>
      <description>${escapeXml(excerpt)}</description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <category>Blog Post</category>
      <enclosure url="${baseUrl}${post.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${post.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(post.title)}</media:title>
        <media:description>${escapeXml(post.subtitle)}</media:description>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    // Add all images from the blog post
    if (post.images && post.images.length > 0) {
      post.images.forEach((img, idx) => {
        rssItems += `
      <media:content url="${baseUrl}${img}" type="image/jpeg" medium="image">
        <media:title>${escapeXml(post.title)} - Image ${idx + 1}</media:title>
      </media:content>`
      })
    }

    if (post.learnMoreUrl) {
      rssItems += `
      <atom:link href="${escapeXml(post.learnMoreUrl)}" rel="related" type="text/html" />`
    }

    rssItems += `
    </item>`
  })

  // 3. Certificates with Images
  certificates.forEach((cert) => {
  const certDate = new Date(cert.date).toUTCString()
  const mimeType = getMimeTypeFromPath(cert.image || "")
  const kw = generateKeywords(`${cert.name} ${cert.issuer}`, ["certificate", "education", ...cert.skills])

    rssItems += `
    <item>
      <title>${escapeXml(`Certificate: ${cert.name}`)}</title>
      <link>${baseUrl}/#certificates</link>
      <guid isPermaLink="false">cert-${cert.slug || cert.name.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${certDate}</pubDate>
      <description>${escapeXml(cert.description)}</description>
      <category>Certificate</category>
  <category>Education</category>`

    cert.skills.forEach((skill) => {
      rssItems += `
      <category>${escapeXml(skill)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${cert.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${cert.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(cert.name)}</media:title>
        <media:description>${escapeXml(`${cert.issuer} - ${cert.description}`)}</media:description>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>
      <author>Adil Mukhi</author>
      <dc:creator>Adil Mukhi</dc:creator>
    </item>`
  })

  // 4. Education
  educationData.forEach((edu) => {
  const eduDate = new Date(edu.period.split(" - ")[0]).toUTCString()
  const mimeType = getMimeTypeFromPath(edu.image || "")
  const kw = generateKeywords(`${edu.degree} ${edu.institution}`, ["education"]) 

    rssItems += `
    <item>
      <title>${escapeXml(`Education: ${edu.degree}`)}</title>
      <link>${baseUrl}/#education</link>
      <guid isPermaLink="false">edu-${edu.slug}</guid>
      <pubDate>${eduDate}</pubDate>
      <description>${escapeXml(`${edu.degree} at ${edu.institution} (${edu.period}). ${edu.description}`)}</description>
      <category>Education</category>
      <enclosure url="${baseUrl}${edu.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${edu.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(edu.institution)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    if (edu.images && edu.images.length > 0) {
      edu.images.forEach((img, idx) => {
        rssItems += `
      <media:content url="${baseUrl}${img}" type="${getMimeTypeFromPath(img)}" medium="image">
        <media:title>${escapeXml(edu.degree)} - Image ${idx + 1}</media:title>
      </media:content>`
      })
    }

    rssItems += `
    </item>`
  })

  // 5. Honors & Awards with Images
  honorsAwards.forEach((award) => {
  const awardDate = new Date(award.year).toUTCString()
  const kw = generateKeywords(`${award.title} ${award.issuer || ""}`, ["award", "achievement", ...award.skills])

    rssItems += `
    <item>
      <title>${escapeXml(`Award: ${award.title}`)}</title>
      <link>${baseUrl}/#honors-awards</link>
      <guid isPermaLink="false">award-${award.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${awardDate}</pubDate>
      <description>${escapeXml(`${award.description} (${award.issuer}, ${award.year})`)}</description>
      <category>Award</category>
  <category>Achievement</category>`

    award.skills.forEach((skill) => {
      rssItems += `
      <category>${escapeXml(skill)}</category>`
    })

    // Handle single or multiple images
    if (Array.isArray(award.image)) {
      award.image.forEach((img, idx) => {
        rssItems += `
      <media:content url="${baseUrl}${img}" type="${getMimeTypeFromPath(img)}" medium="image">
        <media:title>${escapeXml(award.title)} - Image ${idx + 1}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
      })
    } else {
      rssItems += `
      <enclosure url="${baseUrl}${award.image}" type="${getMimeTypeFromPath(award.image)}" />
      <media:content url="${baseUrl}${award.image}" type="${getMimeTypeFromPath(award.image)}" medium="image">
        <media:title>${escapeXml(award.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
    }

    rssItems += `
    </item>`
  })

  // 6. Media Features
  mediaItems.forEach((media) => {
  const mediaDate = new Date(media.date).toUTCString()

    rssItems += `
    <item>
      <title>${escapeXml(`Media Feature: ${media.title}`)}</title>
      <link>${escapeXml(media.link)}</link>
      <guid isPermaLink="true">${escapeXml(media.link)}</guid>
      <pubDate>${mediaDate}</pubDate>
      <description>${escapeXml(`Featured in ${media.publication}: "${media.quote}"`)}</description>
      <category>Media</category>
      <category>${escapeXml(media.type)}</category>
      <category>${escapeXml(media.publication)}</category>
    </item>`
  })

  // 7. Research Projects with Images and DOIs
  researchProjects.forEach((project) => {
  const projectDate = new Date(parseInt(project.year), 0, 1).toUTCString()
  const mimeType = getMimeTypeFromPath(project.image || "")
  const kw = generateKeywords(`${project.title} ${project.institution || ""}`, ["research", ...project.tags])

    rssItems += `
    <item>
      <title>${escapeXml(`Research: ${project.title}`)}</title>
      <link>${baseUrl}/portfolio/research</link>
      <guid isPermaLink="false">research-${project.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${projectDate}</pubDate>
      <description>${escapeXml(`${project.description} (${project.institution}, ${project.year})`)}</description>
      <category>Research</category>
      <category>${escapeXml(project.institution)}</category>`

    project.tags.forEach((tag) => {
      rssItems += `
      <category>${escapeXml(tag)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${project.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${project.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(project.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    // Add DOI links
    if (project.doiLinks && project.doiLinks.length > 0) {
      project.doiLinks.forEach((doi) => {
        rssItems += `
      <atom:link href="${escapeXml(doi.url)}" rel="related" type="text/html" />
      <prism:doi>${escapeXml(doi.doiNumber)}</prism:doi>`
      })
    }

    // Add other links
    if (project.otherLinks && project.otherLinks.length > 0) {
      project.otherLinks.forEach((link) => {
        rssItems += `
      <atom:link href="${escapeXml(link.url)}" rel="related" type="text/html" />`
      })
    }

    rssItems += `
    </item>`
  })

  // 8. Books with Images and ISBNs
  books.forEach((book) => {
  const bookDate = new Date(book.date).toUTCString()
  const mimeType = getMimeTypeFromPath(book.image || "")
  const kw = generateKeywords(`${book.title} ${book.publisher || ""}`, ["book", "publication", ...(book.authors ? [book.authors] : [])])

    rssItems += `
    <item>
      <title>${escapeXml(`Book: ${book.title}`)}</title>
      <link>${escapeXml(book.link)}</link>
      <guid isPermaLink="false">book-${book.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${bookDate}</pubDate>
      <description>${escapeXml(`${book.description} Published by ${book.publisher}.`)}</description>
      <category>Book</category>
      <category>Publication</category>
  <dc:creator>${escapeXml(book.authors || "Adil Mukhi")}</dc:creator>`

    if (book.isbn) {
      rssItems += `
      <prism:isbn>${escapeXml(book.isbn)}</prism:isbn>`
    }

    if (book.image) {
      rssItems += `
      <enclosure url="${baseUrl}${book.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${book.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(book.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
    }

    // Add buy links
    if (book.buyLinks) {
      if (book.buyLinks.onlineChannels) {
        book.buyLinks.onlineChannels.forEach((channel) => {
          rssItems += `
      <atom:link href="${escapeXml(channel.url)}" rel="alternate" type="text/html" />`
        })
      }
      if (book.buyLinks.ebookChannels) {
        book.buyLinks.ebookChannels.forEach((channel) => {
          rssItems += `
      <atom:link href="${escapeXml(channel.url)}" rel="alternate" type="text/html" />`
        })
      }
      if (book.buyLinks.customLinks) {
        book.buyLinks.customLinks.forEach((link) => {
          rssItems += `
      <atom:link href="${escapeXml(link.url)}" rel="alternate" type="text/html" />`
        })
      }
    }

    rssItems += `
    </item>`
  })

  // 9. Letters to the Editor
  ltes.forEach((lte) => {
  const lteDate = new Date(lte.date).toUTCString()

    rssItems += `
    <item>
      <title>${escapeXml(`Letter to the Editor: ${lte.title}`)}</title>
      <link>${escapeXml(lte.link)}</link>
      <guid isPermaLink="true">${escapeXml(lte.link)}</guid>
      <pubDate>${lteDate}</pubDate>
      <description>${escapeXml(`Published in ${lte.publisher}: ${lte.description}`)}</description>
      <category>Letter to the Editor</category>
      <category>Publication</category>
      <category>${escapeXml(lte.publisher)}</category>
      <dc:creator>${escapeXml(lte.authors || "Adil Mukhi")}</dc:creator>
    </item>`
  })

  // 10. Blogs
  blogs.forEach((blog) => {
  const blogDate = new Date(blog.date).toUTCString()
  const mimeType = getMimeTypeFromPath(blog.image || "")
  const kw = generateKeywords(`${blog.title} ${blog.publisher || ""}`, ["blog", "publication"]) 

    // Parent blog item
    rssItems += `
    <item>
      <title>${escapeXml(`Blog: ${blog.title}`)}</title>
      <link>${escapeXml(blog.link)}</link>
      <guid isPermaLink="true">${escapeXml(blog.link)}</guid>
      <pubDate>${blogDate}</pubDate>
      <description>${escapeXml(blog.description)}</description>
      <category>Blog</category>
      <category>${escapeXml(blog.publisher)}</category>`

    if (blog.image) {
      rssItems += `
      <enclosure url="${baseUrl}${blog.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${blog.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(blog.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
    }

    rssItems += `
    </item>`

    // Add individual blog articles as separate sibling items (not nested)
    if (blog.blogArticles && blog.blogArticles.length > 0) {
      blog.blogArticles.forEach((article) => {
        const artKw = generateKeywords(`${article.title} ${article.subtitle || ""}`, ["blog", "article", blog.title])
        rssItems += `
    <item>
      <title>${escapeXml(article.title)}</title>
      <description>${escapeXml(article.subtitle)}</description>
      <category>Blog Article</category>
      <media:keywords>${escapeXml(artKw)}</media:keywords>
    </item>`
      })
    }
  })

  // 11. Club Publications
  clubPublications.forEach((pub) => {
  const pubDate = new Date(pub.date).toUTCString()
  const kw = generateKeywords(`${pub.title} ${pub.publisher || ""}`, ["publication", "club"]) 

    rssItems += `
    <item>
      <title>${escapeXml(pub.title)}</title>
      <link>${escapeXml(pub.link)}</link>
      <guid isPermaLink="true">${escapeXml(pub.link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(pub.description)}</description>
      <category>Publication</category>
      <category>${escapeXml(pub.publisher)}</category>
      <dc:creator>${escapeXml(pub.authors || "Adil Mukhi")}</dc:creator>`

    if (pub.image) {
      const mimeType = getMimeTypeFromPath(pub.image)
      rssItems += `
      <enclosure url="${baseUrl}${pub.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${pub.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(pub.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
    }

    rssItems += `
    </item>`
  })

  // 12. Coding Projects with Screenshots
  codingProjects.forEach((project) => {
    const kw = generateKeywords(project.title, ["coding", "project", ...project.tags])
    rssItems += `
    <item>
      <title>${escapeXml(`Coding Project: ${project.title}`)}</title>
      <link>${escapeXml(project.demoLink)}</link>
      <guid isPermaLink="false">coding-${project.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${currentDate}</pubDate>
      <description>${escapeXml(project.description)}</description>
      <category>Coding</category>
      <category>Project</category>`

    project.tags.forEach((tag) => {
      rssItems += `
      <category>${escapeXml(tag)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${project.image}" type="${getMimeTypeFromPath(project.image)}" />
      <media:content url="${baseUrl}${project.image}" type="${getMimeTypeFromPath(project.image)}" medium="image">
        <media:title>${escapeXml(project.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>
      <atom:link href="${escapeXml(project.codeLink)}" rel="alternate" type="text/html" />
    </item>`
  })

  // 13. Art Projects with Images
  artProjects.forEach((project) => {
    const kw = generateKeywords(project.title, ["art", ...project.tags])
    rssItems += `
    <item>
      <title>${escapeXml(`Art: ${project.title}`)}</title>
      <link>${baseUrl}/portfolio/art-sports</link>
      <guid isPermaLink="false">art-${project.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${currentDate}</pubDate>
      <description>${escapeXml(project.description)}</description>
      <category>Art</category>`

    project.tags.forEach((tag) => {
      rssItems += `
      <category>${escapeXml(tag)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${project.image}" type="${getMimeTypeFromPath(project.image)}" />
      <media:content url="${baseUrl}${project.image}" type="${getMimeTypeFromPath(project.image)}" medium="image">
        <media:title>${escapeXml(project.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    // Add all images from the art project
    if (project.images && project.images.length > 0) {
      project.images.forEach((img, idx) => {
        rssItems += `
      <media:content url="${baseUrl}${img}" type="${getMimeTypeFromPath(img)}" medium="image">
        <media:title>${escapeXml(project.title)} - Image ${idx + 1}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
      })
    }

    rssItems += `
    </item>`
  })

  // 14. Sports Achievements with Images/Videos
  sportsAchievements.forEach((achievement) => {
    const kw = generateKeywords(achievement.title, ["sports", "achievement", ...achievement.tags])
    rssItems += `
    <item>
      <title>${escapeXml(`Sports: ${achievement.title}`)}</title>
      <link>${baseUrl}/portfolio/art-sports</link>
      <guid isPermaLink="false">sports-${achievement.title.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${currentDate}</pubDate>
      <description>${escapeXml(achievement.description)}</description>
      <category>Sports</category>
      <category>Achievement</category>`

    achievement.tags.forEach((tag) => {
      rssItems += `
      <category>${escapeXml(tag)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${achievement.image}" type="${getMimeTypeFromPath(achievement.image)}" />
      <media:content url="${baseUrl}${achievement.image}" type="${getMimeTypeFromPath(achievement.image)}" medium="image">
        <media:title>${escapeXml(achievement.title)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    if (achievement.videoId) {
      rssItems += `
      <media:content url="https://www.youtube.com/watch?v=${achievement.videoId}" type="video/youtube" medium="video">
        <media:title>${escapeXml(achievement.title)} - Video</media:title>
      </media:content>`
    }

    rssItems += `
    </item>`
  })

  // 15. Volunteer Work with Images
  volunteerWork.forEach((work) => {
  const workDate = new Date(work.period.split(" – ")[0]).toUTCString()
  const mimeType = getMimeTypeFromPath(work.image || "")
  const kw = generateKeywords(`${work.role} ${work.organization}`, ["volunteer", "experience", ...work.skills])

    rssItems += `
    <item>
      <title>${escapeXml(`Volunteer: ${work.role} at ${work.organization}`)}</title>
      <link>${baseUrl}/#volunteer-work</link>
      <guid isPermaLink="false">volunteer-${work.role.replace(/\s+/g, "-").toLowerCase()}-${work.organization.replace(/\s+/g, "-").toLowerCase()}</guid>
      <pubDate>${workDate}</pubDate>
      <description>${escapeXml(`${work.role} at ${work.organization} (${work.period}). ${work.description}`)}</description>
      <category>Volunteer Work</category>
      <category>${escapeXml(work.organization)}</category>`

    work.skills.forEach((skill) => {
      rssItems += `
      <category>${escapeXml(skill)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${work.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${work.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(work.organization)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>
    </item>`
  })

  // 16. Work Experience with Images
  workExperiences.forEach((work) => {
    const workDate = new Date(work.period.split("–")[0]).toUTCString()
    const mimeType = getMimeTypeFromPath(work.image || "")
    const kw = generateKeywords(`${work.title} ${work.company}`, ["work", "experience", ...work.skills])

    rssItems += `
    <item>
      <title>${escapeXml(`Work Experience: ${work.title} at ${work.company}`)}</title>
      <link>${baseUrl}/#work-experience</link>
      <guid isPermaLink="false">work-${work.slug}</guid>
      <pubDate>${workDate}</pubDate>
      <description>${escapeXml(`${work.title} at ${work.company} (${work.period}). ${work.description}`)}</description>
      <category>Work Experience</category>
      <category>${escapeXml(work.company)}</category>`

    work.skills.forEach((skill) => {
      rssItems += `
      <category>${escapeXml(skill)}</category>`
    })

    rssItems += `
      <enclosure url="${baseUrl}${work.image}" type="${mimeType}" />
      <media:content url="${baseUrl}${work.image}" type="${mimeType}" medium="image">
        <media:title>${escapeXml(work.company)}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`

    // Add additional images if available
    if (work.images && work.images.length > 0) {
      work.images.forEach((img, idx) => {
        rssItems += `
      <media:content url="${baseUrl}${img}" type="${getMimeTypeFromPath(img)}" medium="image">
        <media:title>${escapeXml(work.title)} - Image ${idx + 1}</media:title>
        <media:keywords>${escapeXml(kw)}</media:keywords>
        <media:rating>nonadult</media:rating>
      </media:content>`
      })
    }

    rssItems += `
    </item>`
  })

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:prism="http://prismstandard.org/namespaces/basic/2.0/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Adil Mukhi - Portfolio & Achievements</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Comprehensive RSS feed featuring blog posts, research projects, certificates, awards, publications, work experience, volunteer work, and professional images from Adil Mukhi's portfolio.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg</url>
      <title>Adil Mukhi</title>
      <link>${baseUrl}</link>
    </image>
    <category>Personal Portfolio</category>
    <category>Medical Research</category>
    <category>Healthcare</category>
    <category>STEM</category>
    <category>Youth Leadership</category>
    <category>Advocacy</category>
    <managingEditor>adilmukhii@gmail.com (Adil Mukhi)</managingEditor>
    <webMaster>adilmukhii@gmail.com (Adil Mukhi)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Adil Mukhi. All rights reserved.</copyright>
    <generator>Next.js RSS Generator</generator>
${rssItems}
  </channel>
</rss>`

  return rssFeed
}

export async function GET() {
  const feed = generateRssFeed()

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
