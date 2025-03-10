import type { Metadata } from "next"
import { artSportsPortfolioMetadata } from "../../page-metadata"
import ArtSportsPortfolioPageClient from "./client"

export const metadata: Metadata = artSportsPortfolioMetadata

export default function ArtSportsPortfolioPage() {
  return <ArtSportsPortfolioPageClient />
}

