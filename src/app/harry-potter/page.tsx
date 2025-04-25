'use client'

import { useEffect } from 'react'

export default function HarryPotter() {
  useEffect(() => {
    const audio = new Audio('https://jyrujzmpicrqjcdwfwwr.supabase.co/storage/v1/object/public/anna//harrypotter_wishes.mp3')
    audio.play()
    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <img 
        src="https://jyrujzmpicrqjcdwfwwr.supabase.co/storage/v1/object/public/anna//Hp1%201000x1500.webp"
        alt="Harry Potter"
        className="w-full h-screen object-contain"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
    </main>
  )
} 