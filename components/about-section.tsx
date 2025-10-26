import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Computer Engineering student passionate about embedded systems, AI, and autonomous vehicles. Currently
            pursuing dual degrees while working as a Smart City Intern.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NSH558bAZrdXOcm6DYb7UWPG1X0k0I.png"
              alt="Daniel presenting at a workshop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Florida Polytechnic University</p>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Science: Computer Engineering – Advanced Topics
                </p>
                <p className="text-sm text-muted-foreground">Graduating May 2026 • GPA: 4.0/4.0</p>
              </div>
              <div>
                <p className="font-semibold">Florida Polytechnic University</p>
                <p className="text-sm text-muted-foreground">Master of Science: Electrical Engineering</p>
                <p className="text-sm text-muted-foreground">Graduating May 2027</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Briefcase className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Smart City Student Intern</p>
                <p className="text-sm text-muted-foreground">City of Winter Haven Technology Services</p>
                <p className="text-sm text-muted-foreground">July 2024 – Present</p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                  <li>Built enterprise RAG chatbot serving 650+ employees</li>
                  <li>Automated workflows with Python & Docker</li>
                  <li>Implemented cybersecurity & 2FA systems</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
