import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, Link2, CreditCard } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let's connect! :3</h2>
        </div>

        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a href="mailto:dannyengineers@outlook.com" className="text-accent hover:underline">
                  dannyengineers@outlook.com
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Location:</span> Sebring, FL (Open to Relocate)
              </p>
              <p>
                <span className="font-medium text-foreground">Status:</span> Graduating May 2026 (BS) • May 2027 (MS)
              </p>
            </div>
          </div>

          <div className="pt-6 border-t">
            <div className="flex flex-wrap gap-3 justify-center">
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
          </div>
        </Card>
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
