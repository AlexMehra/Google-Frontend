'use client'

import { useState, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import Link from "next/link"

interface SearchSuggestionsProps {
  query: string
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ query }) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length === 0) {
        setSuggestions([])
        return
      }

      setIsLoading(true)
      try {
        const response = await fetch(`/api/search-suggestions?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setSuggestions(data.suggestions)
      } catch (error) {
        console.error('Error fetching suggestions:', error)
        setSuggestions([])
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(fetchSuggestions, 300)

    return () => clearTimeout(debounceTimer)
  }, [query])

  if (suggestions.length === 0 && !isLoading) return null

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-lg overflow-hidden z-10">
      {isLoading ? (
        <div className="flex items-center justify-center py-4">
          <div className="w-6 h-6 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        suggestions.map((suggestion, i) => (
          <Link
            key={i}
            href={`/search?q=${encodeURIComponent(suggestion)}`}
            className="flex items-center px-6 py-3 hover:bg-gray-100"
          >
            <TrendingUp className="h-4 w-4 text-gray-400 mr-4 flex-shrink-0" />
            <div className="text-sm text-gray-700">{suggestion}</div>
          </Link>
        ))
      )}
    </div>
  )
}

export default SearchSuggestions

