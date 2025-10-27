import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Presentation } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const leadershipRoles = [
  {
    title: "Vice President",
    organization: "Rotaract International",
    period: "August 2022 - Present",
    type: "Social Services",
    description:
      "In Rotaract, I participated in numerous volunteer and community projects. I've volunteered at a Veteran's Day breakfast, helped regulate traffic and pass out water at a local 5k race, and regulated traffic at the Winter Haven Christmas Parade each year. I've participated in Buddy Ball, where we go and help special needs children play a game of baseball! I also help out in our Adopt-a-Road program where we clean up Research Way by Florida Polytechnic University every two months. I am grateful to also participate in a mentorship program between the Florida Polytechnic University Rotaract Club and the Auburndale Rotary Club. Here I was paired with Alex Cam, the Vice President of Operations for Cams Catering and Mayor of Auburndale.",
    skills: ["Volunteering", "Community Involvement", "Professional Development"],
    motto: "Fellowship through service",
    speakers: [
      "Alex Cam - Mayor of Auburndale",
      "Jeff Tillman - City Manager of Auburndale",
      "Robert Green - Ex-Mayor and Ex-City Manager of Auburndale",
      "Hiep Nguyen - CIO/Smart City Officer for the City of Winter Haven",
      "Greg Recker, COO of Chastain Skillman",
      "Sam Sandusky, CEO of Big Sur Technology",
      "Publix",
      "Kimley-Horn",
      "Bank of America",
      "Rotary District 6890 District Governor 3x",
      "Buddy Ball League Representatives",
    ],
  },
  {
    title: "Vice President of Professional Development",
    organization: "Society of Hispanic Professional Engineers (SHPE)",
    period: "May 2024 - Present",
    type: "Professional Development",
    description:
      "• Conducted LinkedIn, resume, mock interview, soft skills, & GitHub workshops.\n• Created portfolio with v0 and Vercel websites for 80+ club members.\n• Led professional development initiatives to prepare members for career fairs and job applications, including SHPE National Convention 2024/2025.",
  },
  {
    title: "Duelist/IGL",
    organization: "Florida Polytechnic University VALORANT Varsity",
    period: "August 2024 - Present",
    type: "Esports",
    subtitle: "Jett One-Trick",
    description:
      "For our VALORANT team, I play the weekly matches against other schools like University of South Carolina, Florida Gulf Coast University, University of North Carolina at Chapel Hill, AVL, and University of Florida. I've been pretty consistent in being Match MVP, leading my team to victory with my strat calling and pivoting, as well as my positioning, movement, and reaction-time during the round.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FGCU%20130-WcrvjrXzRWduWbqsnWALA1V5sIFZAD.png",
  },
]

const workshops = [
  {
    tabLabel: "Master",
    title: "Master Sword Your LinkedIn",
    theme: "Legend of Zelda",
    description:
      "A Legend of Zelda inspired LinkedIn workshop! I did it in a Zero-to-Hero style, so I walked through the account making process, what each part of the account should have and what it looks like. I also showed how to make posts, and how to meaningfully connect with peers, professors, and recruiters!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JeFT0zO89ur9yyWBtCHlXSejl88FtJ.png",
  },
  {
    tabLabel: "Signal",
    title: "Signal Boost - Making and Amplifying Your Resume",
    theme: "Computer Engineering",
    description:
      "A Computer Engineering inspired Resume workshop! Same as the LinkedIn one, I did it in a Zero-to-Hero style. I walked my chapter through the entire resume making process, gave ATS-friendly templates for them to follow, and showcased some advanced tech to capture the eyes of recruiters, and to fill up your whitespace.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9QpMCYnGNeK7S9EtvaMk6OOoOF7QCo.png",
  },
  {
    tabLabel: "Introduction (2)",
    title: "Introduction to GitHub",
    theme: "SHPE x Computer Society",
    description:
      "Join SHPE x Computer Society for an interactive GitHub Workshop! Learn how to set up a repository, host a portfolio website with GitHub Pages, and showcase your projects professionally—perfect for beginners and those with some experience alike.\n\nA Git & GitHub workshop I spoke for where I showcased the power of v0 when making a portfolio website. I also talked about how GitHub will host a website for you for free on GitHub Pages!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Uv4JGJ6v5Z858cEzbJM5qthZ5rgwVo.png",
  },
  {
    tabLabel: "Resume",
    title: "Resume Round-Up",
    theme: "Western/Cowboy",
    description:
      "This was a Resume workshop where I conducted a personal resume review of all the attendees. I gave tips on how to make their resume look more appealing, how to min/max whitespace, and how to quantify their experience. This was so they'd be ready for our university's Career Fair.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6NTOJtknoWlhb2wKfJzoPBdLtRt0XP.png",
  },
  {
    tabLabel: "Clutch",
    title: "Clutch or Choke - Mock Interviews and Elevator Pitches",
    theme: "Street Fighter",
    description:
      "A Street Fighter inspired workshop to get my SHPE members to win the '1v1' against a recruiter/hiring manager. I walked them through the typical interview process, behavior vs. technical, had them make their elevator pitches from scratch, and give them real practice using it by giving them mock interviews! My members had the chance to practice them on each other, our chapter's eboard members and I, as well as some professionals from the SHPE Tampa Bay Professional Chapter!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JxvVfIQZXcuvxow8S3NKiRdXNknaha.png",
  },
  {
    tabLabel: "Push",
    title: "Push to Talk - Soft Skills & Recruiters Workshop",
    theme: "VALORANT",
    description:
      "A VALORANT inspired workshop where my SHPE members learned about how important soft skills are, and tips for talking to recruiters on LinkedIn or at career fairs like the STAR (or STARt!) Method, and the 333 Rule. This workshop also was a collab with Bank of America, as the second half of the meeting we got to hear about their experience at their last few SHPE National Conventions, and how they navigated the professional world.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x0LguXZ6wadsvKBT9RkRdXUNsZ1R3r.png",
  },
  {
    tabLabel: "Introduction (1)",
    title: "Introduction to GitHub",
    theme: "SHPE",
    description:
      "This was a workshop I spoke for where I talked about the importance of Git as a version control system. I talked about CLI syntax and what each command did as well as the concept behind it. I also showed how to use GitHub, GitHub Desktop, and GitHub Pages. I had my members use v0 to make themself their own personal website, which can then be hosted on GitHub Pages.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h41eR8O1Vm62BKGAYjSTTrXxXSOHk4.png",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Leadership and Professional Development</h2>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Leadership Roles</h3>
          {leadershipRoles.map((role, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              {role.image && (
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden max-h-96">
                  <img
                    src={role.image || "/placeholder.svg"}
                    alt={role.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-semibold">{role.title}</h4>
                    <p className="text-muted-foreground">{role.organization}</p>
                    {role.subtitle && <p className="text-sm text-muted-foreground italic mt-1">{role.subtitle}</p>}
                    {role.motto && <p className="text-sm text-muted-foreground italic mt-1">{role.motto}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-muted-foreground">{role.period}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {role.type}
                </Badge>
              </div>

              <p className="text-sm leading-relaxed whitespace-pre-line">{role.description}</p>

              {role.skills && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {role.skills.map((skill) => (
                    <Badge key={skill} className="text-xs bg-primary text-primary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}

              {role.speakers && (
                <div className="space-y-2 pt-2">
                  <h5 className="font-semibold text-sm">Speakers</h5>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    {role.speakers.map((person, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{person}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Presentation className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Workshops Given</h3>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-7 max-w-5xl mx-auto">
              {workshops.map((workshop, index) => (
                <TabsTrigger key={index} value={index.toString()} className="text-xs px-2">
                  <span className="hidden sm:inline">{workshop.tabLabel}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {workshops.map((workshop, index) => (
              <TabsContent key={index} value={index.toString()} className="mt-8">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                      <img
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4 flex flex-col justify-center">
                      <div>
                        <h4 className="font-semibold text-2xl leading-tight">{workshop.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{workshop.theme}</p>
                      </div>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{workshop.description}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
