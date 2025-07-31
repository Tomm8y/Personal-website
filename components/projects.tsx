import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-commerce API",
      description:
        "Scalable REST API for e-commerce platform with payment integration, inventory management, and real-time notifications.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Microservices Architecture",
      description:
        "Distributed system with multiple microservices for user management, order processing, and analytics.",
      tech: ["Docker", "Kubernetes", "MongoDB", "RabbitMQ", "JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat System",
      description:
        "High-performance chat application with WebSocket connections, message queuing, and file sharing capabilities.",
      tech: ["Socket.io", "Node.js", "MongoDB", "AWS S3", "Nginx"],
      github: "#",
      demo: "#",
    },
    {
      title: "Data Analytics Pipeline",
      description: "ETL pipeline for processing large datasets with automated reporting and visualization dashboards.",
      tech: ["Python", "Apache Kafka", "Elasticsearch", "Docker", "Grafana"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-red-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                    asChild
                  >
                    <a href={project.github}>
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                    <a href={project.demo}>
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
