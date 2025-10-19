"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FlippingCardProps {
  frontTitle: string
  frontDescription: string
  backContent: string
}

export default function FlippingCard({ frontTitle, frontDescription, backContent }: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-80 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full bg-card border-2 border-accent rounded-2xl p-8 flex flex-col justify-center items-center text-center glow-border"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">{frontTitle}</h3>
          <p className="text-muted-foreground text-lg">{frontDescription}</p>
          <p className="text-xs text-muted-foreground mt-6">Click to flip</p>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full bg-card border-2 border-accent rounded-2xl p-8 flex flex-col justify-center items-center glow-border"
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <p className="text-foreground text-base leading-relaxed">{backContent}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
