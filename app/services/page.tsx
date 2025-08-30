import type { Metadata } from "next"
import { servicesMetadata } from "@/app/page-metadata"
import ClientServicesPage from "./ClientServicesPage"

export const metadata: Metadata = servicesMetadata

export default function ServicesPage() {
  return <ClientServicesPage />
}
