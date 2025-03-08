export type NavItem = {
  title: string
  href: string
  description?: string
  items?: NavItem[]
}

export type MainNavItem = NavItem

export type NavConfig = {
  mainNav: MainNavItem[]
}

