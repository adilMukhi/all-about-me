"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certificates } from "@/data/certificates"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Maximize2 } from "lucide-react"
import CertificatesModal from "./certificates-modal"

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const certificateSlug = urlParams.get("certificate")

      if (certificateSlug) {
        const certificate = certificates.find((cert) => cert.slug === certificateSlug)
        if (certificate) {
          setSelectedCertificate(certificate)
          setIsModalOpen(true)
        }
      }
    }

    handleUrlParams()
    window.addEventListener("popstate", handleUrlParams)
    return () => window.removeEventListener("popstate", handleUrlParams)
  }, [])

  const openModal = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
    const slug =
      certificate.slug ||
      certificate.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    const url = new URL(window.location.href)
    url.searchParams.set("certificate", slug)
    window.history.pushState(null, "", url.toString())
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
    const url = new URL(window.location.href)
    url.searchParams.delete("certificate")
    window.history.pushState(null, "", url.toString())
  }

  const mainCertificates = certificates.slice(0, 6)
  const additionalCertificates = certificates.slice(6)

  return (
    <section id="certificates" className="container py-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <h2
        className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Sour Gummy, latin" }}
      >
        Certificates
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {mainCertificates.map((cert, index) => (
          <Card key={index} className="card-hover-effect relative group cursor-pointer" onClick={() => openModal(cert)}>
            <Button
              size="sm"
              variant="secondary"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation()
                openModal(cert)
              }}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>

            <CardHeader>
              <CardTitle style={{ fontFamily: "'Bubblegum Sans', cursive" }}>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuer} | {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <p>{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {additionalCertificates.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Additional Certificates & Awards</h3>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {additionalCertificates.map((cert, index) => (
              <Card
                key={index + 6}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 relative group overflow-hidden aspect-square"
                onClick={() => openModal(cert)}
              >
                <div className="relative w-full h-full">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white text-center">
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{cert.name}</h4>
                    <p className="text-xs mb-3 line-clamp-3">{cert.description}</p>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        openModal(cert)
                      }}
                    >
                      <Maximize2 className="h-3 w-3 mr-1" />
                      Expand
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <CertificatesModal certificate={selectedCertificate} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
