import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ suggestions: [] })
  }

  // Mock data - in a real application, this would come from a database or external API
  const mockSuggestions = [
    `${query} example`,
    `${query} tutorial`,
    `${query} definition`,
    `${query} images`,
    `${query} news`,
    `best ${query}`,
    `${query} near me`,
    `${query} online`,
    `${query} price`,
    `${query} reviews`,
  ]

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  return NextResponse.json({ suggestions: mockSuggestions.slice(0, 5) })
}

