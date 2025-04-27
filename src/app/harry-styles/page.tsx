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
      <div className="relative z-20 min-h-screen flex flex-col items-center px-4" style={{ paddingTop: '66vh' }}>
        <button
          onClick={playAudio}
          aria-label="Play message"
          className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/80 hover:bg-white transition-all duration-300 rounded-full shadow-2xl hover:shadow-3xl backdrop-blur-sm transform hover:scale-110 active:scale-95 border-4 border-pink-300/60"
        >
          <span className="text-5xl md:text-6xl animate-float select-none">❤️</span>
        </button>
      </div>
    </main>
  )
} 