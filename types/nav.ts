export type NavItem = {
  title: string
  href: string
  description?: string
  items?: NavItem[]
}

export type MainNavItem = {
  title: string
  href: string
  description?: string
  disabled?: boolean
  items?: MainNavItem[]
}

