import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

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
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">Computer Engineering Student</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Building autonomous systems, AI applications, and embedded solutions at Florida Polytechnic University
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="https://github.com/dannyjtaylor" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
            <Link href="https://linkedin.com/in/dannyjtaylor" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
            <Link href="mailto:dannyengineers@outlook.com">
              <Mail className="h-5 w-5" />
              Email
            </Link>
          </Button>
        </div>

        <div className="pt-8 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">GPA: 4.0/4.0</p>
          <p className="text-sm text-muted-foreground">Graduating May 2026 (BS) • May 2027 (MS)</p>
        </div>
      </div>
    </section>
  )
}
