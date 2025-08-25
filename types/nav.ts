export type MainNavItem = {
  title: string
  href: string
  description?: string
  disabled?: boolean
  items?: MainNavItem[]
}

export type NavConfig = {
  mainNav: MainNavItem[]
}
