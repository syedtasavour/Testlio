'use client'

import { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, RefreshCw } from 'lucide-react'

interface Joke {
  type: 'single' | 'twopart'
  joke?: string
  setup?: string
  delivery?: string
  category: string
}

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
      setJoke(response.data)
    } catch (err) {
      console.error('Error fetching joke:', err)
      setError('Failed to fetch joke. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">
          Next.js Joke Generator
        </h1>

        <Card className="w-full max-w-md shadow-lg border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl text-slate-800">
              {joke ? `${joke.category} Joke` : 'Ready for a joke?'}
            </CardTitle>
            <CardDescription>
              {joke ? 'Fresh from JokeAPI' : 'Click the button below to get started'}
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-[120px] flex items-center justify-center text-center p-6">
            {loading ? (
              <Loader2 className="h-12 w-12 animate-spin text-slate-400" />
            ) : error ? (
              <p className="text-red-500 font-medium">{error}</p>
            ) : joke ? (
              <div className="space-y-4">
                {joke.type === 'single' ? (
                  <p className="text-lg text-slate-700 leading-relaxed font-sans">{joke.joke}</p>
                ) : (
                  <>
                    <p className="text-lg font-semibold text-slate-800 font-sans">{joke.setup}</p>
                    <p className="text-lg text-slate-600 font-sans italic border-t pt-4 border-slate-100">{joke.delivery}</p>
                  </>
                )}
              </div>
            ) : (
              <p className="text-slate-400 italic">No joke loaded yet.</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-center pb-8 pt-2">
            <Button 
              onClick={fetchJoke} 
              disabled={loading}
              size="lg"
              className="px-8 font-semibold transition-all hover:scale-105 active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Fetching...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  {joke ? 'Get Another Joke' : 'Get Joke'}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <p className="text-slate-500 text-xs mt-4">
          Built with Next.js, axios, and shadcn/ui
        </p>
      </div>
    </main>
  )
}
