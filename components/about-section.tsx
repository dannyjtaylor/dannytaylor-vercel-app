export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance space-y-4">
            <p>
              Hey, I'm Danny! I'm currently a Computer Engineering student at Florida Polytechnic University, and I'm
              also in the 4+1 program there for Electrical Engineering. At Florida Poly, I'm the VP of our Rotaract
              Chapter, and the VP of Professional Development for our SHPE chapter! I also play on our VALORANT team.
            </p>
            <p>
              At work, I'm a Smart City Student Intern, where I am free to solve problems with general IT work, develop
              Software Engineering projects for the Municipality of Winter Haven, explore AI & DevSecOps tools, make
              games in Unreal Engine, and continue my learning within the world of computers.
            </p>
            <p>
              On my own, I like to go to the gym, stream games on Twitch, watch shows with my friends, and work on
              personal projects. (Including this landing page and my Discord bot!)
            </p>
            <p>
              I'm keeping my options open to all Computer Engineering, Software Engineering/Development, Embedded
              Engineering, Automotive, IT, and Quantum Computing opportunities. Looking forward to getting to know you &
              the team! :3
            </p>
            <p>
             P.S.: Ask me about my Capstone Project and Discord bot!
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQGIOMeXH_t3SQ/feedshare-shrink_2048_1536/B4EZn.vxCeIMA0-/0/1760915568849?e=1763596800&v=beta&t=fucX3GVdroGTtECW0A4eUipMBBXN5lhCgZra09Ffhxg"
              alt="Daniel presenting at a workshop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
