'use client'

import React, { useEffect, useState, useRef } from 'react'

import About from '@/containers/about'
import Skills from '@/containers/skills'
import Projects from '@/containers/projects'

import { DarkThemeIcon } from '@/icons/dark-theme'
import { LightThemeIcon } from '@/icons/light-theme'

import styles from '@/styles/scrollbar.module.sass'
import { useColors } from '@/contexts/colors';


export default function Home() {
  const snapContainers = [
    {
      id: 'about',
      label: 'Sobre',
      children: About,
      ref: useRef(null)
    },
    {
      id: 'dsadada',
      label: 'dsadada',
      children: Skills,
      ref: useRef(null)
    },
    {
      id: 'skills',
      label: 'Skills',
      children: Skills,
      ref: useRef(null)
    },
    {
      id: 'projects',
      label: 'Projetos',
      children: Projects,
      ref: useRef(null)
    }
  ]


  const { bgPrimaryColor, bgSecondaryColor, changeColors } = useColors();
  const [isDarkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const element = document.querySelector('html');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (element && !isDark) { element.classList.remove('dark'); }
  }, [])


  const handleTheme = () => {
    const element = document.querySelector('html');
    if (element) {
      if (element.classList.contains('dark')) {
        element?.classList.remove('dark')
        setDarkMode(false)
        return
      }

      element?.classList.add('dark')
    }
    setDarkMode(true)
  }


  const observers: { observer: IntersectionObserver, ref: any }[] = []
  useEffect(() => {
    snapContainers.forEach((container) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          entry.isIntersecting  ? changeColors() : undefined
        },
        { threshold: 1.0 }
      )

      container.ref.current ? observer.observe(container.ref.current) : undefined
      observers.push({ observer: observer, ref: container.ref.current })
    })

    return () => observers.forEach((observer) => observer.ref ? observer.observer.unobserve(observer.ref) : undefined)
  }, []);


  return (
    <>
      <header className={`flex justify-between text-sm px-5 ${bgSecondaryColor}`}>
        <nav className='flex items-center gap-5'>
          {snapContainers.map((container) => <a href={`#${container.id}`} key={`nav-${container.id}`}>{container.label}</a>)}
        </nav>

        <section className='flex items-center gap-5'>
          <button onClick={handleTheme}>
            {isDarkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
          </button>
        </section>
      </header>

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
    </>
  )
}
