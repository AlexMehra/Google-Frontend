'use client'

import Image from 'next/image'

interface ImageResult {
  id: number
  src: string
  alt: string
  title: string
  url: string
}

const mockResults: ImageResult[] = [
  { id: 1, src: '/placeholder.svg?height=200&width=300', alt: 'Result 1', title: 'Image Result 1', url: 'https://example.com/1' },
  { id: 2, src: '/placeholder.svg?height=200&width=300', alt: 'Result 2', title: 'Image Result 2', url: 'https://example.com/2' },
  { id: 3, src: '/placeholder.svg?height=200&width=300', alt: 'Result 3', title: 'Image Result 3', url: 'https://example.com/3' },
  { id: 4, src: '/placeholder.svg?height=200&width=300', alt: 'Result 4', title: 'Image Result 4', url: 'https://example.com/4' },
  { id: 5, src: '/placeholder.svg?height=200&width=300', alt: 'Result 5', title: 'Image Result 5', url: 'https://example.com/5' },
]

const ImageSearchResults: React.FC = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockResults.map((result) => (
        <div key={result.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <Image src={result.src} alt={result.alt} layout="fill" objectFit="cover" />
          </div>
          <div className="p-2">
            <h3 className="text-sm font-medium truncate">{result.title}</h3>
            <p className="text-xs text-gray-500 truncate">{result.url}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageSearchResults

