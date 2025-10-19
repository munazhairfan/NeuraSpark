"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="relative z-20 border-b border-border/50 bg-background/80 backdrop-blur-md top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold">
            <span className="text-accent">Neura</span>
            <span className="text-foreground">Spark</span>
          </h1>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          <a href="/" className="text-foreground/70 hover:text-accent transition-colors">
            Home
          </a>
          <a href="./concepts" className="text-foreground/70 hover:text-accent transition-colors">
            Concepts
          </a>
          <a href="./comparisons" className="text-foreground/70 hover:text-accent transition-colors">
            Comparison
          </a>
          <a href="./learn" className="text-foreground/70 hover:text-accent transition-colors">
            Learn
          </a>
        </nav>
      </div>
    </header>
  )
}
