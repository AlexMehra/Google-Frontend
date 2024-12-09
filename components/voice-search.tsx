'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Mic } from 'lucide-react'

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false)

  return (
    <Dialog open={isListening} onOpenChange={setIsListening}>
      <DialogContent className="sm:max-w-md bg-[#202124] border-gray-700">
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          <div className="text-xl text-gray-200">Listening...</div>
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <Mic className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

