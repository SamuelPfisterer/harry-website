'use client'

import { useState } from 'react'

export default function HarryStyles() {
  const [audio] = useState(() => typeof window !== 'undefined' ? new Audio('https://jyrujzmpicrqjcdwfwwr.supabase.co/storage/v1/object/public/anna//harrystyles_wishes.mp3') : null)

  const playAudio = () => {
    if (audio) {
      audio.currentTime = 0
      audio.play().catch(error => {
        console.error('Audio playback failed:', error)
      })
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Background image with subtle zoom effect */}
      <img 
        src="https://www.thesun.co.uk/wp-content/uploads/2025/04/harry-styles-performs-onstage-coachella-950488617_a3f14f.jpg?w=1880"
        alt="Harry Styles"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />

      {/* Content container */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in">
            Für Anna ❤️
          </h1>
          <p className="text-xl text-white/90">Von Harry Styles</p>
        </div>
        
        <button
          onClick={playAudio}
          className="group relative px-8 py-4 bg-white/90 hover:bg-white transition-all duration-300 
                   rounded-2xl shadow-2xl hover:shadow-3xl backdrop-blur-sm 
                   transform hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-0 
                        group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
          <p className="text-xl font-semibold text-gray-800 mb-1">Hey Anna! 👋 ❤️</p>
          <p className="text-lg text-gray-600">Ich habe dir etwas zu sagen. Klick mich!</p>
        </button>
      </div>
    </main>
  )
} 