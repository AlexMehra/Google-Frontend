'use client'

import { useState, useEffect } from 'react'
import { TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function SearchSuggestions() {
  const [isVisible, setIsVisible] = useState(false)

  const suggestions = [
    { type: 'trending', text: 'x empire episode youtube code' },
    { type: 'person', text: 'Farooq Abdullah', subtitle: 'Former Minister of New and Renewable Energy Govt of India' },
    { type: 'trending', text: 'bengaluru man acid attack' },
    { type: 'trending', text: 'china stimulus package' },
    { type: 'media', text: 'Emily in Paris', subtitle: 'Comedy-drama series' },
    { type: 'trending', text: 'aurora borealis northern lights' },
    { type: 'trending', text: 'videos' },
    { type: 'person', text: 'Gurpatwant Singh Pannun', subtitle: 'Advocate' },
    { type: 'trending', text: 'air india flight trichy airport' },
    { type: 'trending', text: 'iran cyber attack israel' }
  ]

  return isVisible ? (
    <div className="absolute top-full left-0 right-0 mt-1 bg-[#303134] rounded-2xl shadow-lg overflow-hidden">
      {suggestions.map((suggestion, i) => (
        <Link
          key={i}
          href="#"
          className="flex items-center px-6 py-3 hover:bg-[#3c4043]"
        >
          {suggestion.type === 'trending' && (
            <TrendingUp className="h-4 w-4 text-gray-400 mr-4 flex-shrink-0" />
          )}
          <div>
            <div className="text-white">{suggestion.text}</div>
            {suggestion.subtitle && (
              <div className="text-sm text-gray-400">{suggestion.subtitle}</div>
            )}
          </div>
        </Link>
      ))}
    </div>
  ) : null
}

