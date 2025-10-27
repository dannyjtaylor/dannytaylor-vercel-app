import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Daniel J. Taylor | Computer Engineering Portfolio",
  description:
    "Computer Engineering student at Florida Polytechnic University. Building autonomous systems, AI applications, and embedded solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <div className="min-h-screen bg-background/95 backdrop-blur-sm">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
