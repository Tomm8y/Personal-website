"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-white">Backend</span> <span className="text-red-500">Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Building robust, scalable server-side solutions with modern technologies
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
        <div className="flex justify-center space-x-6 pt-8">
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-red-500 cursor-pointer" onClick={() => scrollToSection("about")} />
      </div>
    </section>
  )
}
