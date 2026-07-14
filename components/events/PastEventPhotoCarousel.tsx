'use client'

import { useEffect, useState } from 'react'

const AUTO_ADVANCE_MS = 4000

export function PastEventPhotoCarousel({ photos, eventName }: { photos: string[]; eventName: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [photos.length])

  if (photos.length === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const goNext = () => setIndex((i) => (i + 1) % photos.length)

  return (
    <div className="mt-8">
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        {photos.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${eventName} photo ${i + 1} of ${photos.length}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bh-blue flex items-center justify-center text-white shadow-lg hover:bg-bh-blue/85 transition-colors"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bh-blue flex items-center justify-center text-white shadow-lg hover:bg-bh-blue/85 transition-colors"
            >
              &rarr;
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center">
          <div className="flex items-center gap-2 mt-4 bg-white/90 rounded-full px-3 py-2">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-bh-blue' : 'bg-bh-blue/25'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
