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
      title: "G-Client(Learning Management System)",
      description:
        "A full-featured and modern Learning Management System built with Next.js",
      image: "/images/projects/project8.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Custom API(Azure hosted)",
      ],
      liveUrl: "https://github.com/nyarko-i/G-Client",
      githubUrl: "https://github.com/nyarko-i/G-Client",
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
      title: "Risk Credit Score Design",
      description:
        "An AI powered fintech application designed for credit scorers, auditors and loan officers",
      image: "/images/projects/project6.png",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/proto/yIwQw2tDsQBdbaEdLsPMRI/Kelvin?page-id=0%3A1&node-id=18-114&viewport=99%2C76%2C0.37&t=ztEYQBbG6CeWCDbR-1&scaling=scale-down&content-scaling=fixed",
      githubUrl:
        "https://www.figma.com/proto/yIwQw2tDsQBdbaEdLsPMRI/Kelvin?page-id=0%3A1&node-id=18-114&viewport=99%2C76%2C0.37&t=ztEYQBbG6CeWCDbR-1&scaling=scale-down&content-scaling=fixed",
    },
    {
      title: "Church Management System Design",
      description:
        "A management system that helps churches with member management and finance records.",
      image: "/images/projects/project5.png",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/proto/9FkE2dTt04gAuiWotH8DJm/Church-Management-System?page-id=7%3A105&node-id=106-117&p=f&viewport=316%2C72%2C0.16&t=3ztaoAunr0ZXjfSV-1&scaling=scale-down&content-scaling=fixed",
      githubUrl:
        "https://www.figma.com/design/9FkE2dTt04gAuiWotH8DJm/Church-Management-System?node-id=7-105&t=jZqHF3khxq3z0pY2-1",
    },
    {
      title: "Bena's Bazzar",
      description:
        "A mobile app platform designed for odering your favorite outfit at your convinience",
      image: "/images/projects/project7.png",
      technologies: ["Figma"],
      liveUrl:
        "https://www.figma.com/proto/ZrzGOFZ7NS4EstqkoXpEuc/Bena-s-Bazzar?page-id=0%3A1&node-id=110-590&p=f&viewport=2100%2C673%2C0.58&t=ZtsamndnNgxFpfrx-1&scaling=scale-down&content-scaling=fixed",
      githubUrl:
        "https://www.figma.com/design/ZrzGOFZ7NS4EstqkoXpEuc/Bena-s-Bazzar?node-id=0-1&t=2aAFUk7gINw0g5ra-1",
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
          <div className="text-center mt-12 space-x-6 sm:space-y-6 md:space-y-6 ">
            <Button variant="outline" size="lg" className="cursor-pointer">
              <a
                href="https://github.com/nyarko-i"
                target="blank"
                rel="noopener noreferrer"
              >
                View All Projects
              </a>
              <ExternalLink className="w-4 h-4 ml-2 cursor-pointer" />
            </Button>
            <Button variant="outline" size="lg" className="cursor-pointer mt-4">
              <a
                href="https://github.com/nyarko-i"
                target="blank"
                rel="noopener noreferrer"
              >
                View All Design Projects
              </a>
              <ExternalLink className="w-4 h-4 ml-2 cursor-pointer" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
