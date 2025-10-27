import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "PCAP - Certified Associate Python Programmer",
    issuer: "OpenEDG Python Institute",
    date: "July 2025",
    skills: ["Python (Programming Language)", "Object-Oriented Programming (OOP)", "Algorithm Development"],
  },
  {
    name: "CompTIA Tech+",
    issuer: "CompTIA",
    date: "October 2024",
    skills: ["IT Operations"],
  },
  {
    name: "PCEP - Certified Entry-Level Python Programmer",
    issuer: "OpenEDG Python Institute",
    date: "September 2024",
    skills: ["Python (Programming Language)"],
  },
  {
    name: "Cloud Practitioner Completion",
    issuer: "Amazon Web Services (AWS)",
    date: "June 2024",
    skills: ["Cloud Computing", "Amazon Web Services (AWS)"],
  },
  {
    name: "SOLIDWORKS",
    issuer: "Dassault Systèmes",
    date: "November 2023",
    skills: ["Computer-Aided Design (CAD)", "SOLIDWORKS"],
  },
]

export function CertificationsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">Issued {cert.date}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill} className="text-xs bg-primary text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
