'use client'

import { useEffect } from 'react'

export default function HarryStyles() {
  useEffect(() => {
    const audio = new Audio('https://jyrujzmpicrqjcdwfwwr.supabase.co/storage/v1/object/public/anna//harrystyles_wishes.mp3')
    audio.play()
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <img 
        src="https://www.thesun.co.uk/wp-content/uploads/2025/04/harry-styles-performs-onstage-coachella-950488617_a3f14f.jpg?w=1880"
        alt="Harry Styles"
        className="w-full h-screen object-contain"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
    </main>
  )
} 