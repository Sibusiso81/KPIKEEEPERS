"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ImageSliderProps {
  images: Array<{
    src: string
    alt: string
    isBlue:boolean,
    caption?: string
  }>
  className?: string
}

export function ImageSlider({ images, className }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [images.length, isTransitioning])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious, isFullscreen])

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isFullscreen])

  const SliderContent = ({ inFullscreen = false }: { inFullscreen?: boolean }) => (
    <div className={cn("relative w-full ", inFullscreen ? "h-screen max-h-screen" : "aspect-[16/9]")}>
      {/* Main Image */}
      <div className={`relative h-full w-full  overflow-hidden rounded-lg ${images[currentIndex]?.isBlue ? "bg-indigo-900" : "bg-blue-50"}`}>
        <Image
        width={200}
        height={200}
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className={cn(
            "h-full w-full object-contain transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100",
          )}
        />

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Fullscreen Toggle */}
        {!inFullscreen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(true)}
            className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            aria-label="View fullscreen"
          >
            <Maximize2 className="h-5 w-5" />
          </Button>
        )}

        {/* Image Counter */}
       {/*  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-sm backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div> */}
      </div>

      {/* Caption */}
      
    </div>
  )

  return (
    <>
      {/* Regular Slider */}
      <div className={cn("w-full", className)}>
        <SliderContent />

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={cn(
                "relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all",
                index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100",
              )}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
              width={200}
              height={200} src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-full flex-col">
            {/* Header */}
       
            {/* Fullscreen Content */}
            <div className="flex-1">
              <SliderContent inFullscreen />
            </div>

            {/* Thumbnail Strip */}
           
          </div>
        </div>
      )}
    </>
  )
}
