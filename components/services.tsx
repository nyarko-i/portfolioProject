import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, Smartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive, fast, and scalable web applications using modern frameworks like React and Next.js.",
    },
    {
      icon: Layout,
      title: "UI/UX Design and Graphics Design",
      description:
        "Creating intuitive and beautiful user interfaces that provide excellent user experiences across all devices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing mobile-first applications and progressive web apps that work seamlessly on all devices.",
    },
    
  ]

  return (
    <section id="services" className="py-20">
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I offer a comprehensive range of services to help bring your digital ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
