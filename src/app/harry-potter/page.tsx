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
        src="https://static.wikia.nocookie.net/emmapedia/images/5/5d/Hp1.jpg/revision/latest?cb=20150501075907"
        alt="Harry Potter"
        className="w-full h-screen object-contain"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
    </main>
  )
} 