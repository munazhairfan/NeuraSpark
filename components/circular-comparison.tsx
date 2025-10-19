"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FileCheck2, Speech, Bot} from "lucide-react";

export default function CircularComparison() {
  const [activeIndex, setActiveIndex] = useState(0)

  const concepts = [
    {
      title: "Prompt Engineering",
      description: "Focuses on input optimization",
      details: "Crafting precise, well-structured prompts to guide AI models toward desired outputs.",
      icon: <Speech className="w-8 h-8"/>,
    },
    {
      title: "Context Engineering",
      description: "Focuses on information richness",
      details: "Providing comprehensive background and constraints to enhance model understanding.",
      icon: <FileCheck2 className="w-8 h-8"/>,
    },
    {
      title: "Hybrid Approach",
      description: "Combines both strategies",
      details: "Using optimized prompts with rich context for maximum effectiveness.",
      icon: <Bot className="w-8 h-8"/>,
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Circular Display */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        {concepts.map((concept, index) => {
          const angle = (index / concepts.length) * 360
          const radius = 120

          return (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setActiveIndex(index)}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-accent text-accent-foreground scale-125 shadow-lg shadow-accent/50"
                    : "bg-card border-2 border-accent text-accent hover:scale-110"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {concept.icon}
              </motion.button>
            </motion.div>
          )
        })}

        {/* Center Circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/50 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Explore the <br></br>Circles</p>
          </div>
        </motion.div>
      </div>

      {/* Info Panel */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 max-w-md"
      >
        <div className="bg-card border-2 border-accent rounded-2xl p-8 glow-border">
          <div className="text-4xl mb-4">{concepts[activeIndex].icon}</div>
          <h3 className="text-2xl font-bold text-accent mb-2">{concepts[activeIndex].title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{concepts[activeIndex].description}</p>
          <p className="text-foreground leading-relaxed">{concepts[activeIndex].details}</p>
        </div>
      </motion.div>
    </div>
  )
}
