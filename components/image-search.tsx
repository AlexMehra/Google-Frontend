'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageIcon } from 'lucide-react'

export default function ImageSearch() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-[#202124] border-gray-700">
        <div className="space-y-4 p-6">
          <h3 className="text-lg font-medium text-gray-200">
            Search any image with Google Lens
          </h3>
          <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <ImageIcon className="h-8 w-8 text-gray-400" />
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Drag an image here or</span>
                <Button variant="link" className="text-blue-500 p-0">
                  upload a file
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400">OR</div>
          <div className="flex space-x-2">
            <Input 
              placeholder="Paste image link" 
              className="bg-transparent border-gray-700"
            />
            <Button>Search</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

