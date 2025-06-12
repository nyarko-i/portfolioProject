import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Years Experience", value: "3+", icon: "⏱️" },
    { label: "Happy Clients", value: "25+", icon: "😊" },
    { label: "Technologies", value: "15+", icon: "⚡" },
  ]

  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Figma", "Git"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and personal info */}
            <div>
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto hover:scale-105 transition-transform">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Isaac working"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Im a passionate Frontend Developer with a keen eye for design and a love for creating seamless user
                    experiences. I specialize in building modern, responsive web applications using the latest
                    technologies.
                  </p>
                  <p>
                    When Im not coding, you will find me exploring new design trends, contributing to open-source
                    projects, or sharing my knowledge with the developer community through blog posts and tutorials.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
