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
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-black">
      <img 
        src="https://www.thesun.co.uk/wp-content/uploads/2025/04/harry-styles-performs-onstage-coachella-950488617_a3f14f.jpg?w=1880"
        alt="Harry Styles"
        className="w-full h-screen object-contain absolute top-0 left-0 z-0"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
      <button
        onClick={playAudio}
        className="z-10 px-8 py-4 bg-white/80 hover:bg-white/90 transition-all rounded-xl shadow-lg backdrop-blur-sm"
      >
        <p className="text-xl font-semibold text-black">Hey Anna! 👋</p>
        <p className="text-lg text-black/80">Ich habe dir etwas zu sagen. Klick mich!</p>
      </button>
    </main>
  )
} 