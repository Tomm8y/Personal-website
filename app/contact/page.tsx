import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-red-600">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-500">
            {"<Tommy/>"}
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-red-400 hover:text-red-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-red-400 hover:text-red-300 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-red-400 hover:text-red-300 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-red-500 font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Get In <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Ready to discuss your next backend project? Let's connect and build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-red-900/20 p-8 rounded-lg border-2 border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">@</span>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold">Email</p>
                    <p className="text-gray-300">tomm8yy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⏰</span>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold">Availability</p>
                    <p className="text-gray-300">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 p-8 rounded-lg border-2 border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Services</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Backend API Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Database Design & Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">System Architecture Consulting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Performance Optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Code Review & Mentoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="space-y-8">
            <div className="bg-red-900/20 p-8 rounded-lg border-2 border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tomm8yy@gmail.com"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-semibold">Email</div>
                </a>
                <a
                  href="https://t.me/Tomm9y"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">💼</div>
                  <div className="font-semibold">Telegram</div>
                </a>
                <a
                  href="https://github.com/Tomm8y"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🐙</div>
                  <div className="font-semibold">GitHub</div>
                </a>
                <a
                  href="https://x.com/tomm8yy?t=rUZDuD6A7a6kbJaLeyKiPA&s=09"
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center transition-colors"
                >
                  <div className="text-2xl mb-2">🐦</div>
                  <div className="font-semibold">Twitter</div>
                </a>
              </div>
            </div>

            <div className="bg-red-900/20 p-8 rounded-lg border-2 border-red-600">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Let's Collaborate</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on challenging projects and collaborate with talented teams. Whether you need
                a backend developer or technical consultant, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:tomm8yy@gmail.com"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Email
                </a>
                <a
                  href="#"
                  className="block w-full border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
