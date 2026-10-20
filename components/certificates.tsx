"use client"

import CollectionGrid from "@/components/collection-grid"
import CertificatesModal from "@/components/certificates-modal"
import { certificates, type Certificate } from "@/data/certificates"
import { getCertificatePath } from "@/lib/seo-paths"

const slugOf = (certificate: Certificate) => getCertificatePath(certificate).split("/").pop() as string

// Certificates, used on the Background page and on /certificates
export default function CertificatesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <CollectionGrid<Certificate>
      heading="Certificates"
      sectionId={showHeading ? "certificates-list" : undefined}
      showHeading={showHeading}
      groups={[
        { items: certificates.slice(0, 6) },
        { title: "Additional Certificates", items: certificates.slice(6) },
      ]}
      param="certificate"
      getSlug={slugOf}
      getHref={getCertificatePath}
      toCard={(certificate) => ({
        title: certificate.name,
        subtitle: certificate.issuer,
        date: certificate.date,
        description: certificate.description,
        image: certificate.image,
        imageAlt: `${certificate.name} certificate`,
        fit: "contain",
        tags: certificate.skills,
        sourceUrl: certificate.link?.startsWith("http") ? certificate.link : undefined,
      })}
      renderModal={({ item, isOpen, onClose, pageHref }) => (
        <CertificatesModal certificate={item} isOpen={isOpen} onClose={onClose} pageHref={pageHref} />
      )}
    />
  )
}
