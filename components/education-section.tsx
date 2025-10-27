import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const courseworkByYear = [
  {
    year: "Freshman Year",
    fall: ["Calculus 1", "Technical Writing", "Chemistry 1/Chemistry 1 Lab", "Physics 1/Physics 1 Lab"],
    spring: [
      "Introduction to Computation and Programming (C)",
      "Calculus 2",
      "Concepts and Methods for Engineering and Computer Science",
      "Legal, Ethical, and Management Issues in Technology",
    ],
  },
  {
    year: "Sophomore Year",
    fall: [
      "Discrete Math",
      "Computational Linear Algebra",
      "Object Oriented Programming (OOP)",
      "Circuits 1",
      "Engineering Skills and Design",
      "Differential Equations",
      "Physics 2/Physics 2 Lab",
    ],
    spring: [
      "Electrical and Computer Engineering Skills and Design",
      "Circuits 2",
      "Digital Logic Design",
      "Calculus 3",
      "Probability and Statistics",
    ],
  },
  {
    year: "Junior Year",
    fall: [
      "Data Structures and Algorithms",
      "Digital Electronics",
      "Computer Engineering Design Lab 1",
      "Intro to Autonomous Vehicles",
      "Microprocessors",
    ],
    spring: [
      "Computer Engineering Design Lab 2",
      "Electric and Hybrid Vehicles",
      "Computer Architecture and Organization",
      "Elements of Topology 1",
    ],
  },
  {
    year: "Senior Year",
    fall: [
      "Quantum Information and Computing",
      "Embedded Operating Systems",
      "Systems and Signals",
      "Advanced Engineering Math (Master's Degree)",
      "Senior Design 1 (Capstone)",
    ],
    spring: [
      "VLSI Design",
      "Advanced Digital Signal Processing (Master's Degree)",
      "Smart Grid and Cyber Physical Security",
      "Senior Design 2 (Capstone)",
    ],
  },
]

export function EducationSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div>
              <p className="font-semibold text-lg">Florida Polytechnic University</p>
              <p className="text-sm text-muted-foreground">
                Bachelor of Science: Computer Engineering – Advanced Topics
              </p>
              <p className="text-base text-muted-foreground font-medium mt-2">Graduating May 2026 • GPA: 4.0/4.0</p>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <p className="font-semibold text-lg">Florida Polytechnic University</p>
              <p className="text-sm text-muted-foreground">
                Master of Science: Electrical Engineering – Computer Engineering Focus
              </p>
              <p className="text-base text-muted-foreground font-medium mt-2">Graduating May 2027 • GPA: 4.0/4.0</p>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">Relevant Coursework</h3>
          {courseworkByYear.map((yearData) => (
            <Card key={yearData.year} className="overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b">
                <h4 className="text-lg font-bold">{yearData.year}</h4>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2 font-semibold text-base">Fall Semester</TableHead>
                      <TableHead className="w-1/2 font-semibold text-base">Spring Semester</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="align-top">
                        <ul className="space-y-2">
                          {yearData.fall.map((course, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="text-accent mt-1 text-xs">▸</span>
                              <span className="text-sm">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell className="align-top">
                        <ul className="space-y-2">
                          {yearData.spring.map((course, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="text-accent mt-1 text-xs">▸</span>
                              <span className="text-sm">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
