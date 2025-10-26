import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Wrench, Award } from "lucide-react"

export function SkillsSection() {
  const skills = {
    languages: ["Python", "C/C++", "Verilog", "SystemVerilog", "AVR C", "HTML", "CSS", "JavaScript", "MATLAB", "SQL"],
    frameworks: ["LangChain", "ChromaDB", "FastAPI", "Docker", "PostgreSQL", "Git", "Qiskit", "PyTesseract"],
    hardware: [
      "Arduino Uno R3",
      "Raspberry Pi 5",
      "Intel FPGA DE10-Lite",
      "STM Nucleo-F446RE",
      "ARM Cortex M4F",
      "3D Printing",
    ],
    tools: [
      "STM32CubeIDE",
      "Arduino IDE",
      "Atmel Studio",
      "Questa",
      "Intel Quartus Prime",
      "SOLIDWORKS",
      "Simulink",
      "Multisim",
      "Logisim",
      "Onshape",
      "VMWare",
      "GitLab",
      "Kubernetes",
    ],
    certifications: ["Python Certified Associate Programmer (PCAP)", "PCEP", "CompTIA Tech+", "SOLIDWORKS (CSWA)"],
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building embedded systems, AI applications, and full-stack solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Cpu className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Cpu className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Hardware</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.hardware.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Wrench className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Tools & Software</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.certifications.map((cert) => (
              <Badge key={cert} variant="default">
                {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
