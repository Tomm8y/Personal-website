import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-red-500">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate backend developer with 5+ years of experience building scalable web applications and
              APIs. I specialize in creating efficient, secure, and maintainable server-side solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across multiple programming languages and frameworks, with a strong focus on
              performance optimization, database design, and cloud architecture.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">5+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <Card className="bg-black border-red-500/20">
              <CardContent className="p-6 flex items-center space-x-4">
                <Code className="text-red-500" size={32} />
                <div>
                  <h3 className="font-semibold text-white">Clean Code</h3>
                  <p className="text-gray-400">Writing maintainable and scalable code</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-red-500/20">
              <CardContent className="p-6 flex items-center space-x-4">
                <Database className="text-red-500" size={32} />
                <div>
                  <h3 className="font-semibold text-white">Database Design</h3>
                  <p className="text-gray-400">Optimized database architecture</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-red-500/20">
              <CardContent className="p-6 flex items-center space-x-4">
                <Server className="text-red-500" size={32} />
                <div>
                  <h3 className="font-semibold text-white">API Development</h3>
                  <p className="text-gray-400">RESTful and GraphQL APIs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
