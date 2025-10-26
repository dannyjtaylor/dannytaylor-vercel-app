import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

const coursework = [
  // Core Engineering
  "Computer Architecture and Organization",
  "Microprocessors",
  "Digital Logic Design",
  "Digital Electronics",
  "Embedded Operating Systems",
  "Circuits 1",
  "Systems and Signals",

  // Programming & Software
  "Object Oriented Programming",
  "Introduction to Computation and Programming",
  "Computational Linear Algebra",
  "Discrete Mathematics",

  // Advanced Topics
  "Intro to Autonomous Vehicles",
  "Electric and Hybrid Vehicles",
  "Quantum Information and Computing",
  "Advanced Engineering Math",

  // Mathematics
  "Analytic Geometry and Calculus 1",
  "Analytic Geometry and Calculus 2",
  "Analytic Geometry and Calculus 3",
  "Differential Equations",
  "Elements of Topology I",
  "Probability and Statistics",

  // Physics & Science
  "Physics 1",
  "Physics 2",
  "Chemistry 1",

  // Design & Labs
  "Computer Engineering Design Lab 1",
  "Computer Engineering Lab 2",
  "Senior Design 1",
  "Engineering Skills and Design",
  "Electrical and Computer Engineering Skills and Design",

  // Professional Development
  "Technical Writing",
  "Legal, Ethical, and Management Issues in Technology",
  "Career Design for STEM Disciplines",
]

export function CourseworkSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Relevant Coursework</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Comprehensive education in computer engineering, embedded systems, and advanced mathematics
          </p>
        </div>

        <Card className="p-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {coursework.map((course) => (
              <Badge key={course} variant="secondary" className="text-sm py-2 px-3">
                {course}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
