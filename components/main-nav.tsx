"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { MainNavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { blogPosts } from "@/data/blog-posts"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <NavigationMenu className="relative">
      <NavigationMenuList>
        {items?.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

          // Handle Background as a standalone item
          if (item.title === "Background") {
            return (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:text-blue-700 transition-colors",
                      isActive && "bg-blue-50 text-blue-700",
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          }

          return (
            <NavigationMenuItem key={item.title}>
              {item.title === "Experiences" && item.items ? (
                <>
                  {/* The page link and the menu button are siblings, so neither control sits inside the other */}
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "pr-1 hover:text-blue-700 transition-colors",
                        isActive && "bg-blue-50 text-blue-700",
                      )}
                    >
                      {item.title}
                    </Link>
                    <NavigationMenuTrigger
                      aria-label={`Open ${item.title} menu`}
                      className={cn("px-2 hover:text-blue-700", isActive && "bg-blue-50 text-blue-700")}
                    />
                  </div>
                  <NavigationMenuContent>
                    <div className="fixed left-1/2 transform -translate-x-1/2 w-[600px] p-4 bg-white rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        {/* Show only the latest 4 blog posts */}
                        {blogPosts.slice(0, 4).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/experiences/${post.slug}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700",
                              pathname === `/experiences/${post.slug}` && "bg-blue-50 text-blue-700",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{post.title}</div>
                            {post.subtitle && (
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{post.subtitle}</p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : item.items ? (
                <>
                  {/* The page link and the menu button are siblings, so neither control sits inside the other */}
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "pr-1 hover:text-blue-700 transition-colors",
                        isActive && "bg-blue-50 text-blue-700",
                      )}
                    >
                      {item.title}
                    </Link>
                    <NavigationMenuTrigger
                      aria-label={`Open ${item.title} menu`}
                      className={cn("px-2 hover:text-blue-700", isActive && "bg-blue-50 text-blue-700")}
                    />
                  </div>
                  <NavigationMenuContent>
                    <div className="fixed left-1/2 transform -translate-x-1/2 w-[600px] p-4 bg-white rounded-lg shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700",
                              pathname === subItem.href && "bg-blue-50 text-blue-700",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{subItem.title}</div>
                            {subItem.description && (
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:text-blue-700 transition-colors",
                      isActive && "bg-blue-50 text-blue-700",
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
