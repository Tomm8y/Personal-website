"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Let's Work Together</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need a backend developer
                for your team or want to discuss a project, feel free to reach out.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-red-500" size={24} />
                <span className="text-gray-300">john.doe@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-500" size={24} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-500" size={24} />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
          <Card className="bg-gray-900 border-red-500/20">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black border-red-500/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black border-red-500/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-black border-red-500/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  required
                />
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
