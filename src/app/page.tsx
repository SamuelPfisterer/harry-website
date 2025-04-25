import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100">
      <h1 className="text-4xl font-bold">Choose Your Harry</h1>
      <div className="flex gap-8">
        <Link 
          href="/harry-styles" 
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
        >
          Harry Styles
        </Link>
        <Link 
          href="/harry-potter" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Harry Potter
        </Link>
      </div>
    </main>
  )
}
