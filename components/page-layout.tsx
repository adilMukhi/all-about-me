import type React from "react"
import SocialLinks from "@/components/social-links"
import Footer from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  includeSocialLinks?: boolean
}

export default function PageLayout({ children, includeSocialLinks = true }: PageLayoutProps) {
  return (
    <>
      {children}
      {includeSocialLinks && <SocialLinks />}
      <Footer />
    </>
  )
}

