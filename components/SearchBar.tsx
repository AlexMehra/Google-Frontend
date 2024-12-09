// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { Search, Mic, Camera } from 'lucide-react'
// import SearchSuggestions from './SearchSuggestions'
// import ImageSearchPopup from './ImageSearchPopup'


// const SearchBar = () => {
//   const [query, setQuery] = useState('')
//   const [isFocused, setIsFocused] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)
//   const [isImageSearchOpen, setIsImageSearchOpen] = useState(false)
//   const inputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
//         setIsFocused(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <div className="relative max-w-xl w-full">
//       <div 
//         className={`flex items-center border rounded-full px-4 py-2 ${
//           isFocused ? 'shadow-md border-blue-300' : 
//           isHovered ? 'shadow-sm' : ''
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <Search className={`w-5 h-5 ${isFocused ? 'text-blue-500' : 'text-gray-400'} mr-3`} />
//         <input
//           ref={inputRef}
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           className="flex-grow outline-none text-lg"
//           placeholder="Search Google or type a URL"
//         />
//         {query && (
//           <button onClick={() => setQuery('')} className="text-gray-500 hover:text-gray-700 mr-3">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         )}
//         <Mic className="w-5 h-5 text-blue-500 mr-3 cursor-pointer" />
//         <Camera 
//           className="w-5 h-5 text-blue-500 cursor-pointer" 
//           onClick={() => setIsImageSearchOpen(true)}
//         />
//       </div>
//       {isFocused && <SearchSuggestions query={query} />}
//       <ImageSearchPopup isOpen={isImageSearchOpen} onClose={() => setIsImageSearchOpen(false)} />
//     </div>
//   )
// }

// export default SearchBar








'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Mic, Camera } from 'lucide-react'
import SearchSuggestions from './SearchSuggestions'
import ImageSearchPopup from './ImageSearchPopup'
import VoiceSearch from './VoiceSearch'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isImageSearchOpen, setIsImageSearchOpen] = useState(false)
  const [isVoiceSearchOpen, setIsVoiceSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative max-w-xl w-full">
      <div 
        className={`flex items-center border rounded-full px-4 py-2 bg-gray-800 ${
          isFocused ? 'shadow-md border-blue-300' : 
          isHovered ? 'shadow-sm border-gray-600' : 'border-gray-700'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Search className={`w-5 h-5 ${isFocused || isHovered ? 'text-blue-400' : 'text-gray-400'} mr-3`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="flex-grow outline-none text-lg bg-transparent text-white"
          placeholder="Search Google or type a URL"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-200 mr-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <Mic 
          className="w-5 h-5 text-blue-400 mr-3 cursor-pointer hover:text-blue-300 transition-colors" 
          onClick={() => setIsVoiceSearchOpen(true)}
        />
        <Camera 
          className="w-5 h-5 text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" 
          onClick={() => setIsImageSearchOpen(true)}
        />
      </div>
      {isFocused && <SearchSuggestions query={query} />}
      <ImageSearchPopup isOpen={isImageSearchOpen} onClose={() => setIsImageSearchOpen(false)} />
      <VoiceSearch isOpen={isVoiceSearchOpen} onClose={() => setIsVoiceSearchOpen(false)} />
    </div>
  )
}

export default SearchBar



