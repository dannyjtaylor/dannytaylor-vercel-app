import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tv, Gamepad2, Film, Music, Sparkles } from "lucide-react"

const interests = {
  anime: [
    {
      name: "Mob Psycho 100",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1NueDFO0AIvAYo5NQmTxjqitW8NIqf.png",
    },
    {
      name: "Fullmetal Alchemist Brotherhood",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uqLvosx7hWNYJqRFtfit8WxWjZSrmc.png",
    },
    {
      name: "Jujutsu Kaisen",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gemgqRfMozs4dxFi3WMHEFrkYDWBZL.png",
    },
    {
      name: "Kaiju No. 8",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rgd57leck8hwl6RDd17DruyNcWO83G.png",
    },
    {
      name: "Demon Slayer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eXHQylQ2zkPNjUF9K6J420i6Fbh9Kj.png",
    },
    {
      name: "JoJo's Bizarre Adventure",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-usR7wXSP8fvm1qmea7Bfr2rw2eSMro.png",
    },
    {
      name: "Vinland Saga",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cAhEW7QXHGMCZ2CfbLFlBlCaVtt9UZ.png",
    },
    {
      name: "Attack on Titan",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jWOTsBlYIVw7mhFKiN0IN0Do8DJhUP.png",
    },
    {
      name: "Cowboy Bebop",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-RLXzfwEn58FmDOg4EjIPqI3TST6u7P.jpeg",
    },
  ],
  games: [
    {
      name: "VALORANT",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk5SkpFKTQTb5ikYvpBYFBzD3GiTwt.png",
    },
    {
      name: "Hollow Knight",
      image: "https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp",
    },
    {
      name: "Deltarune",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bp3UGexUy4Fp0OHg945RndEVESUpGa.png",
    },
    {
      name: "Metal Gear Solid",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bdRs2OeLxizFhiFY9GtK8k3NP5CSsN.png",
    },
    {
      name: "Borderlands",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uxa9n1PcABBCqIup3SaCb6agZoXdKL.png",
    },
    {
      name: "Persona 3/4/5",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8QEnLMV4weUk1KlTI1NQHDeom4OqNX.png",
    },
  ],
  movies: [
    {
      name: "Breaking Bad",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IAHmd1Owfx6T5n0G2w0LTizShCNsE6.png",
    },
    {
      name: "Better Call Saul",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LYH0pYRn8y91ENS8cUkbFkIIkl7rhG.png",
    },
    {
      name: "Back to the Future 1/2/3",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AAadPMgkFXRrZqCeZNbx0VR7ebr1GE.png",
    },
    {
      name: "The Boys",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8WhQiOmL9x4cRD4xxkzLbzSvvJUcLV.png",
    },
    {
      name: "Fallout",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-37FZIVBwDTdyUj3dxi8DApelDchhl4.png",
    },
    {
      name: "Look Back",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KDt3KK21NLm1cj3Drz8jRdwUll2eNB.png",
    },
    {
      name: "Howl's Moving Castle",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s62EqYMKiVLQ68ptv0YhoXvrdbUdNI.png",
    },
    {
      name: "Spirited Away",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OQTQuZAUgJhX3cJj57Vi6TcM1brCWO.png",
    },
  ],
  music: [
    {
      name: "Clairo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MxNNSO2nDqeqzueT62V6l1xKjXd5ns.png",
    },
    {
      name: "Billy Joel",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KuxjG94o33nEbKxIjiXmHaWtqNcT1T.png",
    },
    {
      name: "Daft Punk",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KOoppS4AlPxPm8Oocl722JeCaWl3S9.png",
    },
    {
      name: "Gorillaz",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-A8AcmduSykRJZQXZlTJU6uokZQftsB.jpeg",
    },
    {
      name: "Tame Impala",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vMTdvw0fexZqtdjE6v3QvoN5g39hG5.png",
    },
    {
      name: "TV Girl",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l7sDeTLnneRdOSDOMPWugxCDDpcrvh.png",
    },
    {
      name: "Mariya Takeuchi",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Dhey89LfyJ9U8evXt5K1SAsAlhWyc1.png",
    },
    {
      name: "Huey Lewis & The News",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vHYOIYPvgyN9KcxdhgUDFGc4TSra9M.png",
    },
    {
      name: "Wallows",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mPXO4A6bY89nA0KVygnScq6WmV5S4X.png",
    },
  ],
  general: [
    {
      name: "Streaming on Twitch",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KnLzGwLslRT48TXl2mXtbD7PB89na5.png",
      link: "https://twitch.tv/fierylights",
    },
    { name: "Problem Solving", image: "/engineering-problem-solving-concept.jpg" },
    { name: "Embedded Systems", image: "/embedded-systems-circuit-board-arduino.jpg" },
  ],
}

export function InterestsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">My Interests</h2>
        </div>

        <Tabs defaultValue="anime" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
            <TabsTrigger value="anime" className="gap-2">
              <Tv className="h-4 w-4" />
              <span className="hidden sm:inline">Anime</span>
            </TabsTrigger>
            <TabsTrigger value="games" className="gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span className="hidden sm:inline">Games</span>
            </TabsTrigger>
            <TabsTrigger value="movies" className="gap-2">
              <Film className="h-4 w-4" />
              <span className="hidden sm:inline">Shows & Movies</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger>
            <TabsTrigger value="general" className="gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">More</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="anime" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {interests.anime.map((item) => (
                <Card key={item.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[2/3] relative bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-center">{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="games" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {interests.games.map((item) => (
                <Card key={item.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[2/3] relative bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-center">{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="movies" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {interests.movies.map((item) => (
                <Card key={item.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[2/3] relative bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-center">{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {interests.music.map((item) => (
                <Card key={item.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-center">{item.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="general" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interests.general.map((item) => (
                <Card key={item.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-center">{item.name}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline block text-center mt-1"
                      >
                        {item.link}
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
