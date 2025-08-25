"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

interface NavItem {
  key: string
  path?: string
  subItems?: NavItem[]
}

const navigationItems: NavItem[] = [
  { key: "home", path: "/" },
  {
    key: "background",
    subItems: [
      { key: "education", path: "/background/education" },
      { key: "skills", path: "/background/skills" },
    ],
  },
  {
    key: "experiences",
    subItems: [
      { key: "blog-title-1", path: "/experiences/blog-title-1" },
      { key: "blog-title-2", path: "/experiences/blog-title-2" },
    ],
  },
  {
    key: "portfolio",
    subItems: [
      { key: "projects", path: "/portfolio/projects" },
      { key: "writing", path: "/portfolio/writing" },
      { key: "research", path: "/portfolio/research" },
    ],
  },
]

const WedgeShape = ({
  index,
  total,
  radius = 120,
  innerRadius = 40,
  label,
  onClick,
  className = "",
}: {
  index: number
  total: number
  radius?: number
  innerRadius?: number
  label: string
  onClick: () => void
  className?: string
}) => {
  const anglePerWedge = (2 * Math.PI) / total
  const startAngle = index * anglePerWedge - Math.PI / 2
  const endAngle = (index + 1) * anglePerWedge - Math.PI / 2

  const x1 = Math.cos(startAngle) * innerRadius
  const y1 = Math.sin(startAngle) * innerRadius
  const x2 = Math.cos(startAngle) * radius
  const y2 = Math.sin(startAngle) * radius
  const x3 = Math.cos(endAngle) * radius
  const y3 = Math.sin(endAngle) * radius
  const x4 = Math.cos(endAngle) * innerRadius
  const y4 = Math.sin(endAngle) * innerRadius

  const largeArcFlag = anglePerWedge > Math.PI ? 1 : 0

  const pathData = [
    `M ${x1} ${y1}`,
    `L ${x2} ${y2}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x3} ${y3}`,
    `L ${x4} ${y4}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}`,
    "Z",
  ].join(" ")

  const textAngle = startAngle + anglePerWedge / 2
  const textRadius = (radius + innerRadius) / 2
  const textX = Math.cos(textAngle) * textRadius
  const textY = Math.sin(textAngle) * textRadius

  return (
    <g className={`cursor-pointer ${className}`} onClick={onClick}>
      <path
        d={pathData}
        fill="white"
        stroke="black"
        strokeWidth="3"
        className="hover:fill-gray-100 transition-colors"
      />
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold text-sm fill-black pointer-events-none select-none"
        transform={`rotate(${(textAngle * 180) / Math.PI}, ${textX}, ${textY})`}
      >
        {label}
      </text>
    </g>
  )
}

export default function RadialNavigation() {
  const [isIntroComplete, setIsIntroComplete] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [showIntro, setShowIntro] = useState(true)
  const { language, setLanguage, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (hasSeenIntro) {
      setShowIntro(false)
      setIsIntroComplete(true)
      return
    }

    const timer = setTimeout(() => {
      setIsIntroComplete(true)
      setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem("hasSeenIntro", "true")
      }, 1000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en"
    setLanguage(newLanguage)
    console.log("[v0] Language changed to:", newLanguage)
  }

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      router.push(item.path)
      setIsExpanded(false)
      setExpandedItem(null)
    } else if (item.subItems) {
      setExpandedItem(expandedItem === item.key ? null : item.key)
    }
  }

  const handleSubItemClick = (subItem: NavItem) => {
    if (subItem.path) {
      router.push(subItem.path)
      setIsExpanded(false)
      setExpandedItem(null)
    }
  }

  const getSubItemPosition = (parentIndex: number, subIndex: number, totalSubs: number) => {
    const spacing = 140
    const totalWidth = (totalSubs - 1) * spacing
    const startX = -totalWidth / 2
    return {
      x: startX + subIndex * spacing,
      y: 280,
    }
  }

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-black relative z-10"
          >
            <Image src="/avatar.png" alt="Avatar" width={96} height={96} className="w-full h-full object-cover" />
          </motion.div>

          <motion.svg
            width="400"
            height="400"
            viewBox="-200 -200 400 400"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          >
            {navigationItems.map((item, index) => (
              <motion.g
                key={item.key}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <WedgeShape
                  index={index}
                  total={navigationItems.length}
                  radius={150}
                  innerRadius={50}
                  label={t(item.key)}
                  onClick={() => {}}
                />
              </motion.g>
            ))}
          </motion.svg>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isExpanded ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-black hover:border-gray-600 transition-colors"
          >
            <Image src="/avatar.png" alt="Avatar" width={48} height={48} className="w-full h-full object-cover" />
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Globe size={18} />
            <span className="font-semibold text-sm">{language === "en" ? "FR" : "EN"}</span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/10 backdrop-blur-md z-40"
              onClick={() => {
                setIsExpanded(false)
                setExpandedItem(null)
              }}
            />

            <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
              <div className="relative pointer-events-auto">
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => {
                    setIsExpanded(false)
                    setExpandedItem(null)
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center z-10 overflow-hidden hover:border-gray-600 transition-colors"
                >
                  <Image src="/avatar.png" alt="Avatar" width={64} height={64} className="w-full h-full object-cover" />
                </motion.button>

                <motion.svg
                  width="500"
                  height="500"
                  viewBox="-250 -250 500 500"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {navigationItems.map((item, index) => (
                    <motion.g
                      key={item.key}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <WedgeShape
                        index={index}
                        total={navigationItems.length}
                        radius={200}
                        innerRadius={60}
                        label={t(item.key)}
                        onClick={() => handleNavClick(item)}
                        className="hover:opacity-80"
                      />
                    </motion.g>
                  ))}
                </motion.svg>

                {navigationItems.map((item, index) => {
                  const isExpanded = expandedItem === item.key
                  if (!item.subItems || !isExpanded) return null

                  return (
                    <div key={`${item.key}-subs`}>
                      {item.subItems.map((subItem, subIndex) => {
                        const subPosition = getSubItemPosition(index, subIndex, item.subItems!.length)

                        return (
                          <motion.button
                            key={subItem.key}
                            initial={{ scale: 0, x: 0, y: 0 }}
                            animate={{
                              scale: 1,
                              x: subPosition.x,
                              y: subPosition.y,
                            }}
                            exit={{ scale: 0 }}
                            transition={{
                              delay: subIndex * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            onClick={() => handleSubItemClick(subItem)}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 border-2 border-black rounded-lg px-4 py-2 font-semibold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap shadow-md"
                          >
                            {t(subItem.key)}
                          </motion.button>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
