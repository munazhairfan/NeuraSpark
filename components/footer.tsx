"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-foreground/60 text-sm">© 2025 NeuraSpark. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
