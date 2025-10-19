"use client"

import { motion } from "framer-motion"

export default function SideBySideComparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const comparisonData = [
    {
      aspect: "Primary Focus",
      promptEng: "Input quality and structure",
      contextEng: "Information completeness",
    },
    {
      aspect: "Main Goal",
      promptEng: "Optimize query formulation",
      contextEng: "Enhance model understanding",
    },
    {
      aspect: "Key Technique",
      promptEng: "Prompt refinement & testing",
      contextEng: "Context layering & enrichment",
    },
    {
      aspect: "Best For",
      promptEng: "Quick, specific queries",
      contextEng: "Complex, nuanced tasks",
    },
    {
      aspect: "Complexity",
      promptEng: "Low to medium",
      contextEng: "Medium to high",
    },
    {
      aspect: "Scalability",
      promptEng: "Highly scalable",
      contextEng: "Requires careful management",
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Aspect Column */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="bg-[rgba(255,230,92,0.2)] border-2 border-accent/30 rounded-2xl p-6 glow-border">
          <h3 className="text-3xl font-bold text-accent text-center">Aspect</h3>
        </div>
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[rgba(255,230,92,0.2)] border-2 border-accent/30 rounded-2xl p-6 min-h-24 flex items-center"
          >
            <p className="font-semibold text-foreground">{item.aspect}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Prompt Engineering Column */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent rounded-2xl p-6 glow-border">
          <h3 className="text-3xl font-bold text-accent text-center">Prompt Engineering</h3>
        </div>
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card border-2 border-accent/50 rounded-2xl p-6 min-h-24 flex items-center hover:border-accent transition-colors duration-300"
          >
            <p className="text-foreground text-sm leading-relaxed">{item.promptEng}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Context Engineering Column */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent rounded-2xl p-6 glow-border">
          <h3 className="text-3xl font-bold text-accent text-center">Context Engineering</h3>
        </div>
        {comparisonData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card border-2 border-accent/50 rounded-2xl p-6 min-h-24 flex items-center hover:border-accent transition-colors duration-300"
          >
            <p className="text-foreground text-sm leading-relaxed">{item.contextEng}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
