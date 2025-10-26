import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Smart City Student Intern",
    company: "City of Winter Haven Technology Services",
    location: "Winter Haven, FL",
    period: "July 2024 - Present",
    type: "Internship",
    responsibilities: [
      "Built an interactable web database utilizing Docker, Python, PostgreSQL, JavaScript, HTML, & CSS for 650+ employees",
      "Developed an internal AI to answer FAQs, dispense forms, & analyze data using Python, Docker, PostgreSQL & HTML/CSS/JS",
      "Created Main & Pause Menu, Loading Screen, & environment for Lake Elbert Digital Twin in Unreal Engine with ArcGIS",
      "Increased city security & implemented Kisi code readers, controllers, IDs, and 2FA hardware tokens for 650+ employees",
      "Used point cloud data to create Sketchup 3D models of city building floor plans for evacuation routes & projection mapping",
    ],
    skills: ["Git", "GitHub", "Docker", "Python", "PostgreSQL", "JavaScript", "HTML", "CSS", "Unreal Engine"],
  },
  {
    title: "Vice President of Professional Development",
    company: "SHPE FLPoly",
    location: "Lakeland, FL",
    period: "May 2025 - Present",
    type: "Leadership",
    responsibilities: [
      "Conducted LinkedIn, resume, mock interview, & GitHub workshops, creating portfolio websites for 80+ club members",
    ],
    skills: ["Networking", "Interpersonal Skills", "Leadership", "Professional Development"],
  },
  {
    title: "Research Assistant",
    company: "Florida Polytechnic University",
    location: "Lakeland, FL",
    period: "July 2024 - May 2025",
    type: "Part-time",
    responsibilities: [
      "Developed a Python program using NumPy to generate polynomials under constraints",
      "Investigated hybrid vehicle fuel efficiency, engine, & motor speed for passive & aggressive driving styles over 100km",
    ],
    skills: ["Python", "NumPy", "Precision Measuring", "Research"],
  },
  {
    title: "Education Assistant",
    company: "Florida Polytechnic University",
    location: "Lakeland, FL",
    period: "July 2024 - December 2024",
    type: "Part-time",
    responsibilities: [
      "Teacher's Assistant for 1 section of Precalculus Algebra & Trigonometry & 3 sections of Differential Equations",
    ],
    skills: ["Teaching", "Mathematics", "Mentoring"],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>
          <p className="text-lg text-muted-foreground">Professional roles and leadership positions</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {exp.type}
                </Badge>
              </div>

              <ul className="space-y-2 text-sm">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
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
