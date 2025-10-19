import type React from "react"
import type { Metadata } from "next"
import { Baloo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _baloo = Baloo_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuraSpark",
  description: "Educational interactive website demonstrating concept visualization.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
