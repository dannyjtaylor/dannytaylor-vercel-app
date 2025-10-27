import { Button } from "@/components/ui/button"
import { Github, Linkedin, Link2, CreditCard, ExternalLink } from "lucide-react"
import Link from "next/link"
import type React from "react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HaqPKtqnO2L7Jh7EQYuTZ6EXCrsxTD.png"
              alt="Daniel J. Taylor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Daniel J. Taylor</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans">
            Computer Engineering Senior, Electrical Engineering (4+1)
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="https://linkedin.com/in/dannyjtaylor" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="https://github.com/dannyjtaylor" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="https://dot.cards/danieljtaylor" target="_blank" rel="noopener noreferrer">
              <CreditCard className="h-5 w-5" />
              dot.card
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="https://dannyjtaylor.github.io" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
              Portfolio
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="https://twitch.tv/fierylights" target="_blank" rel="noopener noreferrer">
              <TwitchIcon className="h-5 w-5" />
              Twitch
            </Link>
          </Button>
          <Button asChild size="lg" className="gap-2">
            <Link href="https://linktr.ee/dtaylor6456" target="_blank" rel="noopener noreferrer">
              <Link2 className="h-5 w-5" />
              Linktree
            </Link>
          </Button>
        </div>

        <div className="pt-8 flex flex-col items-center gap-2">
          <p className="text-base text-muted-foreground font-medium">GPA: 4.0/4.0</p>
          <p className="text-base text-muted-foreground font-medium">Graduating May 2026 (BS) • May 2027 (MS)</p>
        </div>
      </div>
    </section>
  )
}

function TwitchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}
