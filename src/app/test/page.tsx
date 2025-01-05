'use client'

import React, { useRef, useEffect } from "react"

export default function HorizontalCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const scrollSpeed = 1
    const autoScrollInterval = 2000

    const scrollMovement = (side: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: scrollSpeed * side,
                behavior: "smooth",
            })
        }
    }


    const autoScroll = () => {
        if (carouselRef.current) {
            const carousel = carouselRef.current

            scrollMovement(1)

            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
                carouselRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                })
            }
        }

        setTimeout(autoScroll, autoScrollInterval)
    }

    useEffect(autoScroll, [])


    return (
        <div className="flex items-center justify-center gap-3 w-screen">
            <button onClick={() => scrollMovement(-1)} className="p-2 bg-white text-black rounded-full shadow-lg z-10">
                &#10094;
            </button>

            <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory w-2/4         bg-green-500">
                <div className="flex space-x-4 px-4 py-2">
                    {[...Array(40)].map((_, i) => (
                        <div key={`carousel-item-${i}`} className="snap-start w-48 h-48 bg-blue-500 text-white flex items-center justify-center rounded-lg">
                            Item {i + 1}
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={() => scrollMovement(1)} className="p-2 bg-white text-black rounded-full shadow-lg z-10">
                &#10095;
            </button>
        </div>
    )
}
