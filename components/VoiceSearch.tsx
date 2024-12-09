'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Mic } from 'lucide-react'

export default function VoiceSearch({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] h-[600px] bg-[#202124] border-0 p-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Microphone button in top right */}
          <div className="absolute top-8 right-8">
            <div 
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              <Mic className="h-8 w-8 text-red-500" />
            </div>
          </div>
          
          {/* Centered text */}
          <div className="text-3xl text-gray-400 font-light">
            Listening{dots}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

