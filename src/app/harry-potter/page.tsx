'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function HarryPotter() {
  const pathname = usePathname()

  useEffect(() => {
    const audio = new Audio('https://jyrujzmpicrqjcdwfwwr.supabase.co/storage/v1/object/public/anna//harrypotter_wishes.mp3')
    
    const playAudio = () => {
      audio.currentTime = 0
      audio.play().catch(error => {
        console.error('Audio playback failed:', error)
      })
    }

    playAudio()

    // Clean up function
    return () => {
      audio.pause()
      audio.remove()
    }
  }, [pathname]) // Re-run effect when pathname changes

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