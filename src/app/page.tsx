'use client'

import React, { useEffect, useRef } from 'react'

import { containers } from '@/containers'

import { useColors } from '@/contexts/colors';
import styles from '@/styles/scrollbar.module.sass'


export default function Home() {
  const snapContainers = containers.map(container => ({
    ...container, ref: useRef(null)
  }))

  const { bgPrimaryColor, changeColors } = useColors();

  useEffect(() => {
    const element = document.querySelector('html');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (element && !isDark) { element.classList.remove('dark'); }
  }, [])


  const observers: { observer: IntersectionObserver, ref: any }[] = []
  useEffect(() => {
    snapContainers.forEach((container) => {
      const observer = new IntersectionObserver(
        ([entry]) => { entry.isIntersecting ? changeColors() : undefined },
        { threshold: 1.0 }
      )

      container.ref.current ? observer.observe(container.ref.current) : undefined
      observers.push({ observer: observer, ref: container.ref.current })
    })

    return () => observers.forEach((observer) => observer.ref ? observer.observer.unobserve(observer.ref) : undefined)
  }, []);


  return (
    <div className={`${styles.scrollbar} snap-mandatory snap-y overflow-auto h-full`}>
      {snapContainers.map((container) => {
        const Component = container.children
        return (
          <div id={container.id} className={`snap-center flex items-center justify-center h-full ${bgPrimaryColor}`} key={`container-${container.id}`}>
            <Component ref={container.ref} />
          </div>
        )
      })}
    </div>
  )
}
