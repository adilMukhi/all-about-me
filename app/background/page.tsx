import type { Metadata } from "next"
import { backgroundMetadata } from "@/app/page-metadata"
import ClientBackgroundPage from "./ClientBackgroundPage"

export const metadata: Metadata = backgroundMetadata

export default function BackgroundPage() {
  return <ClientBackgroundPage />
}
