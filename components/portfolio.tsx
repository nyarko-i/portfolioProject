import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Audiophile (E-commerce platform)",
      description: "A modern e-commerce platform built with Next.js",
      image: "/images/projects/project2.png",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://audiophileecommerce2.netlify.app/",
      githubUrl: "https://github.com/nyarko-i/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "/images/projects/project3.png",
      technologies: ["React", "tailwind", "Jest"],
      liveUrl: "https://github.com/nyarko-i/TaskManagementApp",
      githubUrl: "https://github.com/nyarko-i/TaskManagementApp",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website for showcasing my skills.",
      image: "/images/projects/project4.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "shadcn"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "A social media platform with real-time messaging and posts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Platform",
      description:
        "An online learning platform with video streaming and quizzes.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
