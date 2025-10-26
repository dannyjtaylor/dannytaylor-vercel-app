import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">My Resumes</h2>
          <p className="text-muted-foreground">View or download my resumes tailored for different opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Technical Resume</h3>
                <p className="text-sm text-muted-foreground">Engineering & Development Roles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="/Daniel_Taylor_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="/Daniel_Taylor_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">General Resume</h3>
                <p className="text-sm text-muted-foreground">All-Purpose Professional Resume</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="/Daniel_Taylor_Resume_General.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="/Daniel_Taylor_Resume_General.pdf" download>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
