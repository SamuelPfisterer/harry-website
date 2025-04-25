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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7CoKemOIMalcwQSyi5mGHduewrY2_CphaYVKsJ7vU-5T5UFV___Fv--EZZ07jBn0eJk&usqp=CAU"
        alt="Harry Potter"
        className="w-full h-screen object-contain"
        style={{ userSelect: 'none', pointerEvents: 'none' }}
      />
    </main>
  )
} 