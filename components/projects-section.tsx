"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Enterprise RAG Chatbot",
    date: "September 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lXh8CnOlLuPntVPPy2f1yWRLdZgrHG.png",
    description:
      "An internal AI assistant supporting over 650 city employees across 11 departments. Built with GPT-4o, Python, Docker, PostgreSQL, HTML, CSS, and JavaScript, the assistant enables natural language access to guides, manuals, forms, and employee data.",
    highlights: [
      "Implemented document ingestion for multiple formats (.pdf, .docx, .ppt, .txt) using LangChain and ChromaDB",
      "Designed custom REST API endpoints (/ask, /talk, /transcribe, /post, /get) to streamline FAQ resolution",
      "Integrated OpenAI Whisper and ElevenLabs for speech-to-text and text-to-speech capabilities",
    ],
    tech: ["OpenAI", "LangChain", "ChromaDB", "Docker", "PostgreSQL", "FastAPI"],
  },
  {
    title: "32-bit RISC-V Processor",
    date: "April 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qR4jd2wmRm3Q24BcjpnXjlf8GvaoiD.png",
    description:
      "Designed & simulated a fully functional 32-bit RISC-V processor in Logisim, implementing core components including RAM, ROM, ALU, control logic, & both instruction and data memory to execute assembly instructions.",
    highlights: [
      "Prototyped & verified the processor on an Intel DE10-Lite FPGA using Verilog & SystemVerilog with 100% accuracy",
      "Expanded capabilities with 12 custom instructions & VGA output",
      "Developed real-time memory visualization system showcasing instruction execution through Fibonacci sequence up to Fib(15)",
    ],
    tech: ["Verilog", "SystemVerilog", "Logisim", "FPGA", "VGA"],
    additionalImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LqfXoLGKF6TANEUlYt9ycKuHDvaOWp.png",
        label: "Simulation in Logisim",
      },
    ],
  },
  {
    title: "Tesla Model A",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-onMD1pdY2yyAe9oBKYGAOLIkmoeALk.png",
    description:
      "Autonomous electric vehicle featuring a 3D-printed PLA chassis and powered by DC motors, MOSFETs, & 9V batteries on a breadboard platform.",
    highlights: [
      "Implemented PWM control for all-wheel drive using AVR C on Arduino Uno R3",
      "Real-time 180° object detection via 3 ultrasonic sensors & LED indicators",
      "Vehicle stops within 0.5 seconds of detecting obstacles",
    ],
    tech: ["AVR C", "PWM", "Arduino", "MOSFETs", "Ultrasonic Sensors", "3D Printing"],
  },
  {
    title: "4-bit Arithmetic Logic Unit (ALU)",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-XuKThrBaJSwCHJ7bl5gP1WPz0O8CoW.jpeg",
    description:
      "Circuit capable of executing XOR, AND, OR, XNOR, NAND, NOR, magnitude comparison, and binary addition for two 4-bit inputs.",
    highlights: [
      "Verified in Multisim with 100% accuracy before physical construction",
      "Built on breadboard using 13 logic gate IC chips, four 8x1 multiplexers, and five LEDs",
      "Achieved 100% functional accuracy across all operations",
    ],
    tech: ["Digital Logic", "IC Chips", "Multiplexers", "Multisim"],
  },
  {
    title: "Dannybase (CRUD Web App)",
    date: "July 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-4fcanBxBIERwirORABHSW8nq8Qf2UW.png",
    description:
      "Developed a full-stack CRUD application for the City of Winter Haven to streamline employee management across 11 departments with an Excel-like interface. Note: All information displayed is public data as this was developed for the municipality of Winter Haven, Florida.",
    highlights: [
      "Featured manual input and bulk import/export capabilities for employee data",
      "RESTful endpoints like /put enabled seamless record updates",
      "Hosted internally via uvicorn and Docker Compose, empowering 650+ employees",
    ],
    tech: ["PostgreSQL", "Python", "FastAPI", "Docker", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "CI/CD Pipeline from Scratch",
    date: "June 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-m1kbmQWEPL6SYSCRwCmdKJSHjlX35L.png",
    description:
      "Emulated enterprise-grade deployment workflows using GitLab Runner, Docker, Kubernetes, and Prometheus.",
    highlights: [
      "Designed multi-stage pipeline with security scanning, build, test, audit, and image creation",
      "Dual deployment phases to test and production VMs",
      "Post-deployment monitoring orchestrated via shell scripting on Ubuntu servers",
    ],
    tech: ["GitLab Runner", "Docker", "Kubernetes", "Prometheus", "Ubuntu", "VMWare"],
  },
  {
    title: "Autonomous Vehicle Simulator",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%283%29-bbJtiLpUf1jo84gHv2rdHsmajAQ7Wc.png",
    description: "Simulink simulation of an autonomous vehicle that replicates real-world driving dynamics.",
    highlights: [
      "Modeled longitudinal & lateral controllers (PID, Pure Pursuit, & Stanley)",
      "Tested on reference path of Interstate 4",
      "Successfully executed three lane changes and highway exit maneuvers",
    ],
    tech: ["Simulink", "MATLAB", "PID", "Pure Pursuit", "Stanley Controller"],
  },
  {
    title: "60 Second Stopwatch",
    date: "April 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-38KfWOd47Lvpg5sKw5x1NgC9qTnI18.png",
    description:
      "Built a 60-second stopwatch circuit using sequential logic on a breadboard, designed to count from 0 to 59 and reset automatically.",
    highlights: [
      "Featured pause, resume, and reset functionality using D-flip flops",
      "Generated clock signal using 555 timer configured as astable multivibrator",
      "Seven-segment BCD displays for output",
    ],
    tech: ["Sequential Logic", "555 Timer", "D-Flip Flops", "Multisim"],
    videoUrl: "https://youtube.com/shorts/eNe7oX2Upe8?feature=share",
    additionalImages: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PtzWkbRGNtwqbIFmnwvtycjlXyXwNM.png",
        label: "Multisim simulation of the complete stopwatch circuit",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JO0fnjT8IGG6FYZtlQKimWfIBI0T9A.png",
        label: "555 timer circuit configuration",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clock%20signal-v6TnzcBRPhvFitT2vmgQuakcpkPRBj.png",
        label:
          "The clock signal for the stopwatch. Generated as a square wave from the 555 timer/astable multivibrator.",
      },
    ],
  },
]

function VideoModal({ videoUrl, onClose }: { videoUrl: string; onClose: () => void }) {
  // Convert YouTube Shorts URL to embed URL
  const getEmbedUrl = (url: string) => {
    const shortMatch = url.match(/youtube\.com\/shorts\/([^?]+)/)
    if (shortMatch) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`
    }
    return url
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl font-bold">
          ✕ Close
        </button>
        <iframe
          src={getEmbedUrl(videoUrl)}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">From autonomous systems to enterprise AI applications</p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-muted max-h-96">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {project.videoUrl && (
                  <Button onClick={() => setVideoModalUrl(project.videoUrl!)} className="gap-2">
                    <Play className="h-4 w-4" />
                    Watch Demo
                  </Button>
                )}

                <ul className="space-y-2 text-sm">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.additionalImages && (
                  <div className="space-y-3 pt-4 border-t">
                    {project.additionalImages.map((img, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">{img.label}</p>
                        <div className="aspect-video relative bg-muted rounded-lg overflow-hidden max-h-96">
                          <img
                            src={img.src || "/placeholder.svg"}
                            alt={img.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {videoModalUrl && <VideoModal videoUrl={videoModalUrl} onClose={() => setVideoModalUrl(null)} />}
    </section>
  )
}
