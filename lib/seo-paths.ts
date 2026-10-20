import { certificates, type Certificate } from "@/data/certificates"
import { educationData, type Education } from "@/data/education"
import { honorsAwards, type Award } from "@/data/honors-awards"
import { mediaItems, type MediaItem } from "@/data/media-items"
import { workExperiences, type WorkExperience } from "@/data/work-experience"
import { volunteerWork, type VolunteerWork } from "@/data/volunteer-work"

import { slugify } from "@/lib/slugify"

export { slugify }

export const drInterestedExperiencePath = "/experience/drinterested"


export function getWorkExperiencePath(experience: WorkExperience) {
  if (experience.company === "Dr. Interested") {
    return drInterestedExperiencePath
  }

  return `/experience/${experience.slug}`
}

export function getWorkExperienceBySlug(slug: string) {
  return workExperiences.find((experience) => experience.slug === slug)
}

export function getCertificatePath(certificate: Certificate) {
  return `/certificates/${certificate.slug || slugify(certificate.name)}`
}

export function getCertificateBySlug(slug: string) {
  return certificates.find((certificate) => (certificate.slug || slugify(certificate.name)) === slug)
}

export function getEducationPath(education: Education) {
  return `/education/${education.slug}`
}

export function getEducationBySlug(slug: string) {
  return educationData.find((education) => education.slug === slug)
}

export function getVolunteerPath(volunteer: VolunteerWork) {
  return `/volunteer/${slugify(`${volunteer.role}-${volunteer.organization}`)}`
}

export function getVolunteerBySlug(slug: string) {
  return volunteerWork.find((volunteer) => slugify(`${volunteer.role}-${volunteer.organization}`) === slug)
}

export function getHonorPath(award: Award) {
  return `/honors/${slugify(`${award.title}-${award.issuer}`)}`
}

export function getHonorBySlug(slug: string) {
  return honorsAwards.find((award) => slugify(`${award.title}-${award.issuer}`) === slug)
}

export function getMediaPath(item: MediaItem) {
  return `/media/${slugify(`${item.title}-${item.publication}`)}`
}

export function getMediaBySlug(slug: string) {
  return mediaItems.find((item) => slugify(`${item.title}-${item.publication}`) === slug)
}
// Search results show about 155 characters of a description, so longer text is cut at a word break
export function metaDescription(text: string, max = 155) {
  // Drop markup, then any stray angle brackets, so no fragment of a tag can survive
  const clean = text.replace(/<[^>]*>/g, " ").replace(/[<>]/g, "").replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s-]+$/, "")}…`
}

// Search results show about 60 characters of a title; long titles skip the "| Adil Mukhi" suffix so the meaningful part fits
export function seoTitle(title: string) {
  return title.length > 47 ? { absolute: title } : title
}
