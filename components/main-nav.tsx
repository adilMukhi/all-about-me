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
    <NavigationMenu>
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
                      "hover:text-blue-500 transition-colors",
                      isActive && "bg-blue-50 text-blue-500",
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
                  <NavigationMenuTrigger className={cn("hover:text-blue-500", isActive && "bg-blue-50 text-blue-500")}>
                    <Link href={item.href} className="hover:text-blue-500 transition-colors">
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[850px] p-4">
                      <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
                        {/* Show only the latest 3 blog posts */}
                        {blogPosts.slice(0, 3).map((post) => (
                          <Link
                            key={post.slug}
                            href={`/experiences/${post.slug}`}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500",
                              pathname === `/experiences/${post.slug}` && "bg-blue-50 text-blue-500",
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
                  <NavigationMenuTrigger className={cn("hover:text-blue-500", isActive && "bg-blue-50 text-blue-500")}>
                    <Link href={item.href} className="hover:text-blue-500 transition-colors">
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[850px] p-4">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500",
                                  pathname === subItem.href && "bg-blue-50 text-blue-500",
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                {subItem.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:text-blue-500 transition-colors",
                      isActive && "bg-blue-50 text-blue-500",
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

