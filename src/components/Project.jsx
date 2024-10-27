import React, { useState } from 'react'
import { ExternalLink, Code } from 'lucide-react'

export default function Project({ bgImg, title, linkLive, linkCode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-64 overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h3 className="text-2xl font-bold mb-4 text-shadow">{title}</h3>
        <div className="flex space-x-4">
          <a
            href={linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
          <a
            href={linkCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <Code className="w-4 h-4 mr-2" />
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}