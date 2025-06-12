import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:isaac@example.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl hover:ring-primary/40 transition-all">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Isaac's profile"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full ring-4 ring-background" />
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground mb-4">Hi there, I am Isaac</p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Frontend Developer</span>
            <span className="block text-primary">& UI Designer</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications with modern technologies. Passionate about clean code, great
            user experiences, and bringing ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group hover:scale-105 transition-transform">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
