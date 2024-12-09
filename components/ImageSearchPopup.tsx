'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { X } from 'lucide-react'

interface ImageSearchPopupProps {
  isOpen: boolean
  onClose: () => void
}

const ImageSearchPopup: React.FC<ImageSearchPopupProps> = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [crop, setCrop] = useState<Crop | undefined>(undefined)
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file)
    }
  }

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleImageLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img; // Assign the image element to the ref
  }, [])

  const handleCropComplete = useCallback((crop: Crop) => {
    setCrop(crop)
  }, [])

  const handleSearchClick = useCallback(() => {
    if (imgRef.current && crop) {
      setIsProcessing(true)
      setProgress(0)

      const canvas = document.createElement('canvas')
      const scaleX = imgRef.current.naturalWidth / imgRef.current.width
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height
      canvas.width = crop.width
      canvas.height = crop.height

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(
          imgRef.current,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        )
      }

      // Simulate image processing
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            setIsProcessing(false)
            console.log('Cropped image data:', canvas.toDataURL()) // Use the cropped image data
            return 100
          }
          return prevProgress + 10
        })
      }, 200)
    }
  }, [crop])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-white">Search by Image</h2>
        {isProcessing && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center z-10">
            <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-200 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-300">Processing image...</p>
          </div>
        )}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-blue-400 bg-gray-700' : 'border-gray-600'
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {uploadedImage ? (
            <div className="relative w-full h-64 mx-auto">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={handleCropComplete}
                aspect={1}
              >
                <Image
                  src={uploadedImage}
                  alt="Uploaded image"
                  layout="fill"
                  objectFit="contain"
                  onLoadingComplete={(img) => handleImageLoad(img)}
                />
              </ReactCrop>
            </div>
          ) : (
            <>
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mb-2 text-gray-300">Drag an image here or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-400 hover:underline focus:outline-none"
              >
                upload a file
              </button>
            </>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          accept="image/*"
          className="hidden"
        />
        {uploadedImage && (
          <button
            onClick={handleSearchClick}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Search by Image
          </button>
        )}
      </div>
    </div>
  )
}

export default ImageSearchPopup
