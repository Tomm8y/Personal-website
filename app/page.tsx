import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Profile Picture */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/photo_1.jpg?height=192&width=192"
            alt="Tommy"
            width={192}
            height={192}
            className="rounded-full border-4 border-red-500 object-cover"
          />
        </div>

        {/* Logo/Brand */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-2">{"<TOMMY/>"}</h1>
          <div className="w-32 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tommy</h2>
          <p className="text-2xl md:text-3xl text-red-400">Backend Developer</p>
          <p className="text-lg text-gray-300 max-w-lg mx-auto">
            Crafting robust server-side solutions with passion and precision
          </p>
        </div>

        {/* Navigation */}
        <div className="pt-8">
          <Link
            href="/about"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Enter Portfolio
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 pt-4">
          <Link href="/about" className="text-red-400 hover:text-red-300 transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-red-400 hover:text-red-300 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-red-400 hover:text-red-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
