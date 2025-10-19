"use client"
import Hero from "@/components/hero"
import AnimatedBlobs from "@/components/animated-blobs"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated background blobs */}
      <AnimatedBlobs />

      {/* Hero Section */}
      <Hero />
    </main>
  )
}
