"use client"

import { motion } from "framer-motion"

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Blob 1 - Neon Yellow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.25 70 / 0.8) 0%, oklch(0.92 0.25 70 / 0) 70%)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Neon Yellow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.25 70 / 0.6) 0%, oklch(0.92 0.25 70 / 0) 70%)",
          bottom: "20%",
          right: "10%",
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 - Neon Yellow */}
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.25 70 / 0.5) 0%, oklch(0.92 0.25 70 / 0) 70%)",
          top: "50%",
          right: "20%",
        }}
        animate={{
          x: [0, 60, -100, 0],
          y: [0, -60, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Subtle background glow shapes */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.25 70 / 0.4) 0%, oklch(0.92 0.25 70 / 0) 70%)",
          bottom: "10%",
          left: "20%",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Additional subtle glow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, oklch(0.92 0.25 70 / 0.3) 0%, oklch(0.92 0.25 70 / 0) 70%)",
          top: "30%",
          left: "50%",
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 60, -80, 0],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
