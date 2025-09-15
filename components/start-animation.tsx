"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const introNavItems = [
  { key: "Home", label: "Home" },
  { key: "Background", label: "Background" },
  { key: "Media", label: "Media" },
  { key: "Services", label: "Services" },
  { key: "Portfolios", label: "Portfolios" },
  { key: "Experiences", label: "Experiences" },
]

const quips = ["something cool", "ideas into pixels", "your experience", "a little magic", "the good stuff"]

const WedgeShape = ({
  index,
  total,
  radius = 120,
  innerRadius = 40,
  label,
}: {
  index: number
  total: number
  radius?: number
  innerRadius?: number
  label: string
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
    <g>
      <path d={pathData} fill="white" stroke="#3b82f6" strokeWidth="3" />
      <text
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-bold text-sm fill-blue-600 select-none"
        transform={`rotate(${(textAngle * 180) / Math.PI}, ${textX}, ${textY})`}
      >
        {label}
      </text>
    </g>
  )
}

export default function StartAnimation() {
  const [showIntro, setShowIntro] = useState(true)
  const [dots, setDots] = useState(".")
  const [quip, setQuip] = useState(quips[0])

  useEffect(() => {
    setQuip(quips[Math.floor(Math.random() * quips.length)])
  }, [])

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")
    if (hasSeenIntro) {
      setShowIntro(false)
      return
    }

    const timer = setTimeout(() => {
      setTimeout(() => {
        setShowIntro(false)
        sessionStorage.setItem("hasSeenIntro", "true")
      }, 1000)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)
    return () => clearInterval(id)
  }, [])

  if (!showIntro) return null

  return (
    <div className="fixed inset-0 bg-background z-50">
      <h1 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-4xl font-fredoka text-blue-600 select-none">
        Hi, I'm Adil Mukhi!
      </h1>

      {/* Outer ring (perfectly centered) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.svg
          width="420"
          height="420"
          viewBox="-210 -210 420 420"
          preserveAspectRatio="xMidYMid meet"
          className="block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        >
          {introNavItems.map((item, index) => (
            <motion.g
              key={item.key}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.6 + index * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              <WedgeShape index={index} total={introNavItems.length} radius={160} innerRadius={55} label={item.label} />
            </motion.g>
          ))}
        </motion.svg>
      </div>

      {/* Avatar stays centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500"
        >
          <Image
            src="/pixtin.jpg"
            alt="Avatar"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Loading text moved lower (like the name) */}
      <p className="absolute top-[80%] left-1/2 -translate-x-1/2 text-lg font-medium text-gray-700">
        Loading {quip}
        {dots}
      </p>
    </div>
  )
}
