import { certificates, type Certificate } from "@/data/certificates"
import { educationData, type Education } from "@/data/education"
import { honorsAwards, type Award } from "@/data/honors-awards"
import { mediaItems, type MediaItem } from "@/data/media-items"
import { workExperiences, type WorkExperience } from "@/data/work-experience"
import { volunteerWork, type VolunteerWork } from "@/data/volunteer-work"

export const drInterestedExperiencePath = "/experience/drinterested"

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['".]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

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