import { NextResponse } from "next/server"
import { blogPosts } from "@/data/blog-posts"
import { portfolioItems } from "@/data/portfolio-items"
import { mediaItems } from "@/data/media-items"
import { certificates } from "@/data/certificates"
import { educationData } from "@/data/education"
import { honorsAwards } from "@/data/honors-awards"
import { volunteerWork } from "@/data/volunteer-work"
import { workExperiences } from "@/data/work-experience"

// XML encoding function to escape special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return ""
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
      default:
        return c
    }
  })
}

const imageDescriptions: Record<string, string> = {
  // Professional photos
  "/pictures/adil-mukhi-tedx-speaking-1.jpg":
    "Adil Mukhi delivering a TEDx talk on healthcare innovation and medical research",
  "/pictures/adil-mukhi-tedx-speaking-2.jpg": "Adil Mukhi speaking at TEDx event about medicine and entrepreneurship",
  "/pictures/adil-mukhi-formal-headshot.jpg": "Professional headshot of Adil Mukhi, medical student and researcher",
  "/pictures/adil-mukhi-camera-photographer.jpg": "Adil Mukhi with camera, showcasing photography skills",
  "/pictures/adil-mukhi-dr-interested-founder.jpg":
    "Adil Mukhi, founder of Dr. Interested healthcare education platform",
  "/pictures/adil-mukhi-informal-portrait.jpg": "Casual portrait of Adil Mukhi",
  "/pictures/adil-mukhi-lab-coat-medical-research.jpg": "Adil Mukhi in lab coat conducting medical research",
  "/pictures/adil-mukhi-tennis-sports.jpg": "Adil Mukhi playing tennis, ROPSSAA quarter-finalist",
  "/pictures/adil-mukhi-graduation.jpg": "Adil Mukhi at graduation ceremony",

  // Blog post images
  "/blog/biochem (1).JPG": "Biochemistry Day at University of Toronto - lab experiments",
  "/blog/biochem (2).JPG": "Biochemistry Day - size exclusion chromatography demonstration",
  "/blog/biochem (3).JPG": "Biochemistry Day - student panel discussion",
  "/blog/biochem (4).JPG": "Biochemistry Day - graduate student labs tour",
  "/blog/biochem (5).JPG": "Biochemistry Day - epidemiology simulation activity",
  "/blog/biochem (6).JPG": "Biochemistry Day - hands-on laboratory work",

  "/blog/pharm (1).JPG": "PharmPath Program at Leslie Dan Faculty of Pharmacy",
  "/blog/pharm (2).JPG": "Pharmacy lab - pharmaceutical dispensing practice",
  "/blog/pharm (3).JPG": "PharmPath - learning pharmaceutical production techniques",
  "/blog/pharm (4).JPG": "Pharmacy lab - creating medicinal solutions",
  "/blog/pharm (5).JPG": "PharmPath - pediatric dosage calculation exercise",
  "/blog/pharm (6).JPG": "PharmPath - tablet production demonstration",
  "/blog/pharm (7).JPG": "PharmPath - pharmaceutical database training",
  "/blog/pharm (8).JPG": "PharmPath - hands-on drug preparation",
  "/blog/pharm (9).JPG": "PharmPath - faculty-led case study session",
  "/blog/pharm (10).JPG": "Leslie Dan Faculty of Pharmacy - PharmPath program",

  "/blog/tour (1).JPG": "University of Toronto campus tour - main library",
  "/blog/tour (2).JPG": "U of T campus - historic architecture",
  "/blog/tour (3).JPG": "University of Toronto - student facilities",
  "/blog/tour (4).JPG": "U of T campus - classroom buildings",
  "/blog/tour (5).JPG": "University of Toronto - campus grounds",
  "/blog/tour (6).JPG": "U of T - academic buildings tour",

  "/blog/kite (1).JPG": "KITE Research Institute - world's #1 rehab facility",
  "/blog/kite (2).JPG": "KITE Winter Lab - testing footwear on icy surfaces",
  "/blog/kite (3).JPG": "KITE Home Lab - accessibility research",
  "/blog/kite (4).JPG": "KITE Street Lab - urban mobility testing",
  "/blog/kite (5).JPG": "KITE Falls Lab - injury prevention research",
  "/blog/kite (6).JPG": "KITE Driving Simulation Lab",
  "/blog/kite (7).JPG": "KITE - rehabilitation technology research",
  "/blog/kite (8).JPG": "KITE labs - assistive device testing",
  "/blog/kite (9).JPG": "KITE Research Institute tour",

  "/blog/er-training (1).JPG": "ER training at Sunnybrook Health Sciences Centre",
  "/blog/er-training (2).JPG": "Emergency medicine - suturing practice",
  "/blog/er-training (3).JPG": "ER training - intubation technique",
  "/blog/er-training (4).JPG": "Sunnybrook trauma bay tour",
  "/blog/er-training (5).JPG": "ER training - ultrasound diagnostics",
  "/blog/er-training (6).JPG": "Emergency medicine - CPR practice",
  "/blog/er-training (7).JPG": "ER training - Stop the Bleed certification",
  "/blog/er-training (8).JPG": "Sunnybrook ER - hands-on medical training",
  "/blog/er-training (9).JPG": "Emergency medicine panel discussion",
  "/blog/er-training (10).JPG": "ER training - life-saving skills practice",
  "/blog/er-training (11).JPG": "Sunnybrook Health Sciences Centre - ER training day",

  "/blog/stem-symposiumOne.jpg": "Glenforest STEM Symposium - student presentations",
  "/blog/stem-symposiumTwo.jpg": "STEM Symposium - engineering projects showcase",
  "/blog/stem-symposiumThree.jpg": "Glenforest STEM - chemical experiments display",
  "/blog/stem-symposiumFour.jpg": "STEM Symposium - innovation and creativity",
  "/blog/stem-symposiumFive.jpg": "Glenforest STEM Symposium photography",

  "/blog/research (1).jpg": "Astrocytoma research - brain tumor analysis",
  "/blog/research (2).jpg": "Medical research - astrocytoma diagnosis",
  "/blog/research (3).jpg": "Certificate of Achievement - Gen Writers competition",

  "/blog/feature (1).jpg": "Rising Phenom Magazine feature - Adil Mukhi",
  "/blog/feature (2).jpg": "Rising Phenom - healthcare advocacy recognition",
  "/blog/feature (3).jpg": "Magazine feature - medical student achievements",
  "/blog/feature (4).jpg": "Rising Phenom Magazine - youth in healthcare",

  // Portfolio images
  "/RSVbook.png": "Doctor Defender Versus RSV - children's health education book",
  "/BornofEmbers.jpeg": "Born of Embers - national youth poetry anthology",
  "/echosofthedeep.jpeg": "Echoes of the Deep - published story collection",
  "/virusesunveiled.png": "Viruses Unveiled - West Nile Virus research blog",
  "/project2.jpg": "Astrocytoma research project - comprehensive overview",
  "/project3.jpg": "Stress and memory research - neurological study",
  "/emergency_overcrowding.png": "Emergency department overcrowding research poster",
  "/portfolio/research/copd.png": "COPD synbiotic therapy research",
  "/alzheimers_research.png": "AI in Alzheimer's diagnosis and treatment research",
  "/portfolio/research/booklet.jpg": "Mini-Medical Booklet - Heal for Health",
  "/portfolio/research/rrs.jpg": "School supplies and education research",
  "/portfolio/research/biomedizone.jpg": "Immunology research - vaccines to targeted therapies",
  "/portfolio/research/targeted.jpg": "Nanoparticles in targeted drug delivery research",
  "/portfolio/coding/drinterested.png": "Dr. Interested website - healthcare education platform",
  "/portfolio/coding/youthlaw.png": "Youth Law Advocacy website",
  "/portfolio/coding/explore3.png": "Explore3 case competition website",
  "/portfolio/coding/stemhiss.jpg": "StemHiss educational website",
  "/portfolio/coding/libsci.png": "LibSci Club website",
  "/portfolio/coding/personal.jpg": "Personal portfolio website",
  "/portfolio/coding/escape.jpg": "Escape the Algorithm - PyGame project",
  "/portfolio/art/moon (1).jpg": "Cosmos: From Olympus To The Moon - mythology art",
  "/portfolio/art/gifdesign.gif": "Hello It's Me - animated GIF design",
  "/portfolio/art/lantern1.jpg": "Buildings of Pakistan & UAE - sensory lantern art",
  "/portfolio/art/zine_design1.jpg": "A Train Ride Away - zine design",
  "/portfolio/art/clay_tictactoe1.jpg": "Easter/Navroz - clay tic-tac-toe cultural art",
  "/portfolio/sports/tennis.jpg": "ROPSSAA Tennis Quarter-Finalist achievement",

  // Certificate image descriptions
  "/redcross.jpg": "Canadian Red Cross First Aid & CPR/AED Level C certification",
  "/foodsafety.jpg": "Food Handler Certification - Food Safety Training Canada",
  "/highfive.jpg": "High-Five Training (PCHD) - child and youth development certification",
  "/betherecert.jpg": "Be There Certificate - mental health support training",
  "/aoda.jpg": "AODA & Ontario Human Rights Code certification",
  "/pals.jpg": "NHCPS PALS Pediatric Advanced Life Support certification",
  "/certificates/immigrant-mentalhealth-course.png":
    "Immigrant and Refugee Mental Health Course - University of Toronto",
  "/certificates/Fundamentals of Social Epidemiology Research.png":
    "Social Epidemiology Research fundamentals - UBC & U of T",
  "/certificates/googledatacert.png": "Google Data Analytics Professional Certificate",
  "/certificates/seedifferentcert.png": "See Different Principles of DEI Certificate - CCDI",
  "/SeeDifferentHonorableMention.png": "See Different Sticker Design Contest Honourable Mention",
  "/healthsafety.jpg": "Ministry of Labour Worker Health and Safety Awareness",
  "/certificates/results-canada-outstanding-youth.png": "Results Canada Outstanding Youth Award",
  "/MoreFeetOnTheGroundcourse.png": "MFOTG: Recognize, Respond, Refer and Reflect certification",
  "/certificates/international-health-leaders.png": "International Health Leaders Program Certificate of Recognition",
  "/certificates/medlife-leadership.png": "MEDLIFE Global Perspective Leadership Certificate",
  "/certificates/gen-writers-achievement.png": "Gen Writers x Sunshine 4 Cancer Kids Research Achievement",
  "/certificates/stembuddies-third-place.png": "STEMBuddies Summer Research Program Third Place Award",
  "/certificates/Certificate_of_Completion_Adil_Mukhi_Genetics_and_Beyond.png":
    "STEMBuddies Genetics & Beyond completion",
  "/certificates/biopage-appreciation.png": "Biopage Storytelling Writing Contest Silver Medal",
  "/certificates/voiceispower.png": "Your Voice is Power Runner Up - TakingITGlobal",
  "/certificates/stemhiss-accomplishment-vp.png": "STEMHiss Vice President Certificate of Accomplishment",
  "/certificates/stemhiss-accomplishment-scholar.png": "STEM History International Scholar Award - STEMHiss",
  "/certificates/dbnc-civic-engagement.png": "Outstanding Civic Engagement - Dixie Bloor Neighbourhood Centre",
  "/certificates/mitosisphere-semifinalist.png": "Mitosisphere Exam Semifinalist Certificate",
  "/certificates/ashg-dna-day-essay.png": "ASHG DNA Day Essay Contest participation",
  "/certificates/cosmic-us-honor-mention.png": "Cosmic Research Initiative Honorable Mention",
  "/certificates/hnp-contribution.png": "Human Nature Projects Earth Day Competition contribution",
  "/certificates/hnp-ontario-third-place.png": "HNP Ontario Earth Day Competition Third Place",
  "/certificates/biopage-appreciation-silver.png": "Biopage Silver Medal appreciation certificate",
  "/certificates/biomedizone-immunology-research.png": "BioMedizone Immunology Research Competition participation",
  "/certificates/medicine4youth-contribution.png": "Medicine4Youth Research Contribution Certificate",
  "/certificates/wicking-preventing-dementia.png": "University of Tasmania Preventing Dementia Course completion",
  "/certificates/hosa-maroon-leadership.png": "HOSA Canada Maroon Certification of Leadership",
  "/certificates/hosa-navy-leadership.png": "HOSA Canada Navy Certification of Leadership",
  "/certificates/young-canadians-parliament.png": "Young Canadians' Parliament graduation certificate",
  "/certificates/uhn-stem-pathways.png": "University Health Network STEM Pathways participation",
  "/certificates/aid4need-service-certification.png": "Aid4Need volunteer service certification",
  "/certificates/youthful-lawyers-legal-essay.png": "Youthful Lawyers International Legal Essay Competition",
  "/certificates/sketch-for-survival-junior.png": "Sketch for Survival Junior 2025 participation",
  "/certificates/blue-ocean-completion.png": "Blue Ocean Strategy completion certificate",
  "/certificates/dixie-bloor-participation.png": "Dixie Bloor Youth Employment Workshop participation",
  "/certificates/hnp-ontario-creativity-mention.png":
    "HNP Ontario Liberal Arts Competition Honourable Creativity Mention",
  "/certificates/project-scruto-participation.png": "Project Scruto Literary Competition participation",
  "/certificates/project-scruto-recognition.png": "Project Scruto Literary Competition consolation recognition",
  "/certificates/cosmic-us-participation.png": "Cosmic-US Research Initiative participation",
  "/certificates/aid4need-participation.png": "Aid4Need Healthcare Poster Contest participation",
  "/certificates/forest-of-reading-participation.png": "Forest of Reading Yellow Cedar Award participation",
  "/certificates/hnp-ontario-carbon-reduction.png": "HNP Ontario Earth Day Carbon Reduction Challenge",
  "/certificates/hosa-dental-professions.png": "HOSA Dental Professions Career Session completion",
  "/certificates/waterloo-gauss-contest-2023.png": "University of Waterloo Gauss Contest 2023 participation",
  "/certificates/waterloo-gauss-contest-2022.png": "University of Waterloo Gauss Contest 2022 participation",
  "/certificates/peel-coding-camp.png": "Peel District Summer Coding Camp completion",
  "/certificates/studysection-python.png": "StudySection Python Foundation certification",
  "/certificates/studysection-graphic-design.png": "StudySection Graphic Design Foundation certification",
  "/certificates/studysection-e-marketing.png": "StudySection E-Marketing Foundation certification",
  "/certificates/studysection-sql.png": "StudySection SQL Foundation certification",
  "/certificates/studysection-project-management.png": "StudySection Project Management Foundation certification",
  "/certificates/code-org-hour-of-code.png": "Code.org Hour of Code completion",
  "/certificates/studysection-english-grammar.png": "StudySection English Grammar Foundation certification",
  "/certificates/medschool-child-neurology.png": "MedSchoolCoach Child Neurology completion",
  "/certificates/medschool-general-surgery.png": "MedSchoolCoach General Surgery completion",
  "/certificates/medschool-emergency-medicine.png": "MedSchoolCoach Emergency Medicine completion",

  // Education image descriptions
  "/uoft-logo.jpg": "University of Toronto - Temerty Faculty of Medicine",
  "/gfss-logo.jpg": "Glenforest Secondary School",
  "/ib-logo.jpg": "International Baccalaureate",
  "/googledataanalytics.jpg": "Google Data Analytics Certification",
  "/socialepidemiology-uft-ubc.png": "Social Epidemiology Course - SickKids Hospital",
  "/young-canadians-paralament.png": "Young Canadians Parliament Certificate",
  "/uhn-logo.jpg": "University Health Network STEM Pathways",
  "/dbnc.jpg": "Dixie Bloor Neighbourhood Centre",
  "/wftw-autism.png": "Words for the World Autism Awareness Event",

  // Honors and awards image descriptions
  "/ovsa.png": "Ontario Volunteer Service Award (2-4 Years)",
  "/CBO.png": "Canadian Biology Olympiad Bronze Medal",
  "/ccc.jpg": "Canadian Computing Competition Distinction",
  "/beaver.jpg": "Beaver Computing Challenge Perfect Score",
  "/pq1.jpg": "Mitosisphere (p + q = 1) Exam Semifinalist",
  "/HSHRF.png": "High School Health Research Challenge Semifinalist",
  "/IMJO-cert.png": "International Medical Journalism Olympiad Honourable Mention",
  "/polar_expressions.png": "Polar Expressions Youth Poetry Anthologies Published Author",
  "/GYA-nomination.jpeg": "Global Youth Awards 2025 Nomination",
  "/Mississauga.jpg": "City of Mississauga Civic Award of Recognition Nomination",
  "/Congress Medical Leaders.png": "Congress of Future Medical Leaders Nomination",
  "/distinction.jpg": "Glenforest Academic Distinction Honors",
  "/tennis.jpg": "ROPSSAA Tennis Quarter-Finalist",
  "/valleys-grad.png": "Middle School Valedictorian - The Valleys",

  // Volunteer work image descriptions
  "/ismalivolunteers.jpg": "Ismaili Volunteers Junior Team Lead",
  "/sickkids.jpg": "The Hospital for Sick Children Auditory Research",
  "/healforhealth.jpg": "HEAL for Health Ontario Medical Writer",
  "/volunteeringpeel.png": "Volunteering Peel Community Events",
  "/floursihfoundation.jpg": "The Flourish Foundation Care Package Volunteer",
  "/ptyt.jpeg": "Power to the Youth Toronto Holiday Cards",
  "/peer-helpers.png": "Glenforest Secondary School Peer Helpers",

  // Work experience image descriptions
  "/drinterested.png": "Dr. Interested - Founder & Executive Director",
  "/ycrh.jpg": "Young Canadian Roundtable on Health",
  "/childernfirstcanada.jpg": "Children First Canada Youth Advisor",
  "/NYACofMDSC.png": "National Youth Advisory Council - Mood Disorders Society of Canada",
  "/uoftkpe_logo.jpg": "KPE Rethink Sport Collective - University of Toronto",
  "/results.jpg": "Results Canada National High School Group Lead",
  "/ecobrothers.png": "Eco Brothers Youth Council",
  "/WiF.png": "World In Focus Events Director",
  "/stemhiss.jpg": "StemHiss Vice-President",
  "/libscitech.png": "Liberation Science Director of Technology",
  "/medmind.png": "MedMind Head of Writing",
  "/HHI.jpg": "Harmony Health Initiative Assistant Director of Publications",
  "/neurogensis.jpg": "NeuroGenesis Director of R&D",
  "/athletic-council.jpg": "Glenforest Athletics Council",
  "/newcomersclub.png": "Glenforest Newcomers Club President",
  "/frenchclub.jpg": "Glenforest French Club Vice-President",
  "/stemfellowship.jpg": "Glenforest STEM Fellowship Vice-President",
  "/ibslgfss.jpg": "Glenforest IBSL Junior Exec",
  "/jammy.png": "Jammy UI/UX Design Intern",
  "/yla-logo.png": "Youth Law Advocacy Director of Technology",
  "/hieh.jpg": "Hope In Every Hand Director of Technology",
  "/bulleteen.png": "The Bullteen STEM Op-Ed Contributor",
  "/competifyhub.jpg": "CompetifyHub Math Question Writer",
  "/RRsouthlake.jpg": "Restoring Rainbows Southlake Research Aid",
}

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adilm.drinterested.org"

    const rssItems: string[] = []

    const professionalPhotos = [
      "/pictures/adil-mukhi-tedx-speaking-1.jpg",
      "/pictures/adil-mukhi-tedx-speaking-2.jpg",
      "/pictures/adil-mukhi-formal-headshot.jpg",
      "/pictures/adil-mukhi-camera-photographer.jpg",
      "/pictures/adil-mukhi-dr-interested-founder.jpg",
      "/pictures/adil-mukhi-informal-portrait.jpg",
      "/pictures/adil-mukhi-lab-coat-medical-research.jpg",
      "/pictures/adil-mukhi-tennis-sports.jpg",
      "/pictures/adil-mukhi-graduation.jpg",
    ]

    rssItems.push(`
      <item>
        <title>${escapeXml("Adil Mukhi - Professional Portfolio Photos")}</title>
        <link>${baseUrl}/about</link>
        <description>${escapeXml("Professional photos of Adil Mukhi including TEDx speaking, medical research, tennis, and formal portraits. Public speaker, Youth Advocate and Changemaker.")}</description>
        <pubDate>${new Date().toUTCString()}</pubDate>
        <guid>${baseUrl}/portfolio/professional-photos</guid>
        ${professionalPhotos
          .map(
            (photo) => `<media:content url="${baseUrl}${photo}" type="image/jpeg" medium="image">
          <media:title>${escapeXml(imageDescriptions[photo] || "Professional photo of Adil Mukhi")}</media:title>
          <media:description>${escapeXml(imageDescriptions[photo] || "Professional photo of Adil Mukhi - Public speaker, Youth Advocate and Changemaker")}</media:description>
        </media:content>`,
          )
          .join("\n        ")}
      </item>
    `)

    blogPosts?.forEach((post) => {
      const postUrl = `${baseUrl}/experiences/${post.slug}`
      const coverImageUrl = `${baseUrl}${post.image}`
      const images = post?.images || []

      // Validate date
      let pubDate = new Date()
      if (post.date) {
        const d = new Date(post.date)
        if (!isNaN(d.getTime())) pubDate = d
      }

      const mediaContent = [
        // Cover image
        `<media:content url="${escapeXml(coverImageUrl)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(post.title)} - Cover Image</media:title>
          <media:description>${escapeXml(imageDescriptions[post.image] || post.excerpt)}</media:description>
        </media:content>`,
        // Additional images
        ...images.map(
          (image) => `<media:content url="${escapeXml(baseUrl + image)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(post.title)} - ${escapeXml(imageDescriptions[image] || "Image")}</media:title>
          <media:description>${escapeXml(imageDescriptions[image] || post.excerpt)}</media:description>
        </media:content>`,
        ),
      ].join("\n        ")

      rssItems.push(`
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${escapeXml(postUrl)}</link>
          <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
          <description>${escapeXml(post.excerpt)}</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Blog</category>
          ${mediaContent}
          <content:encoded><![CDATA[
            <img src="${coverImageUrl}" alt="${post.title.replace(/"/g, "&quot;")}" />
            ${post.content}
          ]]></content:encoded>
        </item>
      `)
    })

    portfolioItems?.forEach((item) => {
      const itemImages = (item as any)?.images || ((item as any)?.image ? [(item as any).image] : [])

      // Validate date
      let pubDate = new Date()
      if ((item as any)?.date) {
        const d = new Date((item as any).date)
        if (!isNaN(d.getTime())) pubDate = d
      }

      if (itemImages.length > 0) {
        const mediaContent = itemImages
          .map((image: string) => {
            const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`
            return `<media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(item.title)} - ${escapeXml(imageDescriptions[image] || "Image")}</media:title>
          <media:description>${escapeXml(imageDescriptions[image] || item.description)}</media:description>
        </media:content>`
          })
          .join("\n        ")

        rssItems.push(`
          <item>
            <title>${escapeXml(item.title)}</title>
            <link>${(item as any)?.link || baseUrl}</link>
            <description>${escapeXml(item.description)}</description>
            <pubDate>${pubDate.toUTCString()}</pubDate>
            <category>${escapeXml((item as any)?.type || "Portfolio")}</category>
            <guid>${(item as any)?.link || `${baseUrl}/portfolio/${item.title.toLowerCase().replace(/\s+/g, "-")}`}</guid>
            ${mediaContent}
          </item>
        `)
      }
    })

    mediaItems?.forEach((item) => {
      // Validate date
      let pubDate = new Date()
      if ((item as any)?.date) {
        const d = new Date((item as any).date)
        if (!isNaN(d.getTime())) pubDate = d
      }
      rssItems.push(`
        <item>
          <title>${escapeXml(`Media Coverage: ${(item as any)?.title || "Untitled"}`)}</title>
          <link>${(item as any)?.url || baseUrl}</link>
          <description>${escapeXml(`${(item as any)?.description || ""} - Featured in ${(item as any)?.publication || ""}`)}</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Media</category>
          <guid>${(item as any)?.url || `${baseUrl}/media/${(item as any).title}`}</guid>
          <media:content url="${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg" type="image/jpeg" medium="image">
            <media:title>Adil Mukhi - Professional Headshot</media:title>
            <media:description>Professional headshot of Adil Mukhi, medical student and researcher</media:description>
          </media:content>
        </item>
      `)
    })

    certificates?.forEach((cert) => {
      const certUrl = `${baseUrl}/experiences#certificates`
      const imageUrl = `${baseUrl}${cert.image}`

      // Validate date
      let pubDate = new Date()
      if (cert.date) {
        const d = new Date(cert.date)
        if (!isNaN(d.getTime())) pubDate = d
      }

      rssItems.push(`
        <item>
          <title>${escapeXml(`Certificate: ${cert.name}`)}</title>
          <link>${escapeXml(cert.link || certUrl)}</link>
          <guid>${escapeXml(certUrl)}-${escapeXml(cert.slug || cert.name)}</guid>
          <description>${escapeXml(cert.description)} - Issued by ${escapeXml(cert.issuer)} on ${escapeXml(cert.date)}</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Certificate</category>
          <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
            <media:title>${escapeXml(cert.name)} - ${escapeXml(cert.issuer)}</media:title>
            <media:description>${escapeXml(imageDescriptions[cert.image] || cert.description)}</media:description>
          </media:content>
          <content:encoded><![CDATA[
            <img src="${imageUrl}" alt="${cert.name.replace(/"/g, "&quot;")}" />
            <h3>${cert.name}</h3>
            <p><strong>Issuer:</strong> ${cert.issuer}</p>
            <p><strong>Date:</strong> ${cert.date}</p>
            <p>${cert.description}</p>
            <p><strong>Skills:</strong> ${cert.skills.join(", ")}</p>
          ]]></content:encoded>
        </item>
      `)
    })

    educationData?.forEach((edu) => {
      const eduUrl = `${baseUrl}/experiences#education`
      const imageUrl = `${baseUrl}${edu.image}`
      const eduImages = (edu as any)?.images || []

      // Validate date
      let pubDate = new Date()
      if (edu.period) {
        const d = new Date(edu.period)
        if (!isNaN(d.getTime())) pubDate = d
      }

      const mediaContent = [
        `<media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(edu.degree)} - ${escapeXml(edu.institution)}</media:title>
          <media:description>${escapeXml(imageDescriptions[edu.image] || edu.description)}</media:description>
        </media:content>`,
        ...eduImages.map(
          (image: string) => `<media:content url="${escapeXml(baseUrl + image)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(edu.degree)} - Additional Image</media:title>
          <media:description>${escapeXml(imageDescriptions[image] || edu.description)}</media:description>
        </media:content>`,
        ),
      ].join("\n        ")

      rssItems.push(`
        <item>
          <title>${escapeXml(`Education: ${edu.degree}`)}</title>
          <link>${escapeXml(edu.link || eduUrl)}</link>
          <guid>${escapeXml(eduUrl)}-${escapeXml(edu.slug)}</guid>
          <description>${escapeXml(edu.description)} - ${escapeXml(edu.institution)} (${escapeXml(edu.period)})</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Education</category>
          ${mediaContent}
          <content:encoded><![CDATA[
            <img src="${imageUrl}" alt="${edu.degree.replace(/"/g, "&quot;")}" />
            <h3>${edu.degree}</h3>
            <p><strong>Institution:</strong> ${edu.institution}</p>
            <p><strong>Period:</strong> ${edu.period}</p>
            <p>${edu.longDescription || edu.description}</p>
          ]]></content:encoded>
        </item>
      `)
    })

    honorsAwards?.forEach((award) => {
      const awardUrl = `${baseUrl}/experiences#awards`
      const images = Array.isArray(award.image) ? award.image : [award.image]

      // Validate date
      let pubDate = new Date()
      if (award.year) {
        const d = new Date(award.year)
        if (!isNaN(d.getTime())) pubDate = d
      }

      const mediaContent = images
        .map((image) => {
          const imageUrl = `${baseUrl}${image}`
          return `<media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(award.title)} - ${escapeXml(award.issuer)}</media:title>
          <media:description>${escapeXml(imageDescriptions[image] || award.description)}</media:description>
        </media:content>`
        })
        .join("\n        ")

      rssItems.push(`
        <item>
          <title>${escapeXml(`Award: ${award.title}`)}</title>
          <link>${escapeXml(award.link || awardUrl)}</link>
          <guid>${escapeXml(awardUrl)}-${escapeXml(award.title)}</guid>
          <description>${escapeXml(award.description)} - Awarded by ${escapeXml(award.issuer)} in ${escapeXml(award.year)}</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Award</category>
          ${mediaContent}
          <content:encoded><![CDATA[
            <img src="${baseUrl + images[0]}" alt="${award.title.replace(/"/g, "&quot;")}" />
            <h3>${award.title}</h3>
            <p><strong>Issuer:</strong> ${award.issuer}</p>
            <p><strong>Year:</strong> ${award.year}</p>
            <p>${award.description}</p>
            <p><strong>Skills:</strong> ${award.skills.join(", ")}</p>
          ]]></content:encoded>
        </item>
      `)
    })

    volunteerWork?.forEach((volunteer) => {
      const volunteerUrl = `${baseUrl}/experiences#volunteer`
      const imageUrl = `${baseUrl}${volunteer.image}`

      // Validate date
      let pubDate = new Date()
      if (volunteer.period) {
        const d = new Date(volunteer.period)
        if (!isNaN(d.getTime())) pubDate = d
      }

      rssItems.push(`
        <item>
          <title>${escapeXml(`Volunteer: ${volunteer.role} at ${volunteer.organization}`)}</title>
          <link>${escapeXml(volunteer.link || volunteerUrl)}</link>
          <guid>${escapeXml(volunteerUrl)}-${escapeXml(volunteer.role)}</guid>
          <description>${escapeXml(volunteer.description)} - ${escapeXml(volunteer.organization)} (${escapeXml(volunteer.period)})</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Volunteer Work</category>
          <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
            <media:title>${escapeXml(volunteer.role)} - ${escapeXml(volunteer.organization)}</media:title>
            <media:description>${escapeXml(imageDescriptions[volunteer.image] || volunteer.description)}</media:description>
          </media:content>
          <content:encoded><![CDATA[
            <img src="${imageUrl}" alt="${volunteer.role.replace(/"/g, "&quot;")}" />
            <h3>${volunteer.role}</h3>
            <p><strong>Organization:</strong> ${volunteer.organization}</p>
            <p><strong>Period:</strong> ${volunteer.period}</p>
            <p>${volunteer.description}</p>
            <p><strong>Skills:</strong> ${volunteer.skills.join(", ")}</p>
          ]]></content:encoded>
        </item>
      `)
    })

    workExperiences?.forEach((work) => {
      const workUrl = `${baseUrl}/experiences#work`
      const imageUrl = `${baseUrl}${work.image}`
      const workImages = (work as any)?.images || []

      // Validate date
      let pubDate = new Date()
      if (work.period) {
        const d = new Date(work.period)
        if (!isNaN(d.getTime())) pubDate = d
      }

      const mediaContent = [
        `<media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(work.title)} - ${escapeXml(work.company)}</media:title>
          <media:description>${escapeXml(imageDescriptions[work.image] || work.description)}</media:description>
        </media:content>`,
        ...workImages.map(
          (image: string) => `<media:content url="${escapeXml(baseUrl + image)}" medium="image" type="image/jpeg">
          <media:title>${escapeXml(work.title)} - Additional Image</media:title>
          <media:description>${escapeXml(imageDescriptions[image] || work.description)}</media:description>
        </media:content>`,
        ),
      ].join("\n        ")

      rssItems.push(`
        <item>
          <title>${escapeXml(`Work: ${work.title} at ${work.company}`)}</title>
          <link>${escapeXml(work.link || workUrl)}</link>
          <guid>${escapeXml(workUrl)}-${escapeXml(work.slug)}</guid>
          <description>${escapeXml(work.description)} - ${escapeXml(work.company)} (${escapeXml(work.period)})</description>
          <pubDate>${pubDate.toUTCString()}</pubDate>
          <category>Work Experience</category>
          ${mediaContent}
          <content:encoded><![CDATA[
            <img src="${imageUrl}" alt="${work.title.replace(/"/g, "&quot;")}" />
            <h3>${work.title}</h3>
            <p><strong>Company:</strong> ${work.company}</p>
            <p><strong>Period:</strong> ${work.period}</p>
            <p>${work.longDescription || work.description}</p>
            ${(work as any).stats ? `<p><strong>Stats:</strong> ${(work as any).stats.join(", ")}</p>` : ""}
            <p><strong>Skills:</strong> ${work.skills.join(", ")}</p>
          ]]></content:encoded>
        </item>
      `)
    })

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:media="http://search.yahoo.com/mrss/" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml("Adil Mukhi - Medical Student, Researcher & Entrepreneur")}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml("Follow Adil Mukhi's journey in medicine, research, and entrepreneurship. Public speaker, Youth Advocate and Changemaker.")}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/pictures/adil-mukhi-formal-headshot.jpg</url>
      <title>${escapeXml("Adil Mukhi")}</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems.join("")}
  </channel>
</rss>`

    return new NextResponse(rssXml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "X-Robots-Tag": "index, follow",
        Vary: "User-Agent",
      },
    })
  } catch (error) {
    console.error("RSS feed generation failed:", error)
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>RSS Feed Error</title>
    <description>RSS feed temporarily unavailable</description>
  </channel>
</rss>`

    return new NextResponse(errorXml, {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
  }
}
