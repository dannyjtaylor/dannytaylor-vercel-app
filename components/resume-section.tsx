import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Resumes</h2>
          <p className="text-muted-foreground">View or download my resumes! They're tailored for different roles :)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Software/DevOps/IT Resume</h3>
                <p className="text-sm text-muted-foreground">Software Engineering, Development, DevOps & IT Roles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761330485042/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761330485042/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" download>
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
                <h3 className="font-semibold text-lg">General CE Resume</h3>
                <p className="text-sm text-muted-foreground">General Computer Engineering Resume</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278813909/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278813909/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" download>
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
                <h3 className="font-semibold text-lg">Embedded Systems Resume</h3>
                <p className="text-sm text-muted-foreground">Embedded Engineering Roles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278868858/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278868858/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" download>
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
                <h3 className="font-semibold text-lg">Automotive Resume</h3>
                <p className="text-sm text-muted-foreground">Automotive Engineering Roles</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild className="flex-1 gap-2">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278838762/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  View PDF
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 bg-transparent">
                <a href="https://www.linkedin.com/in/dannyjtaylor/overlay/1761278838762/single-media-viewer/?profileId=ACoAAEa30iEB-l2Y78MS48KDaCulXJHxqG4x6VU" download>
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
