'use client'

import React, { useEffect, useState } from 'react'

import About from '@/containers/about'
import Skills from '@/containers/skills'
import Projects from '@/containers/projects'

import { DarkThemeIcon } from '@/icons/dark-theme'
import { LightThemeIcon } from '@/icons/light-theme'

import styles from '@/styles/scrollbar.module.sass'
import { useColors } from '@/contexts/colors';


const snapContainers = [
  {
    id: 'about',
    label: 'Sobre',
    children: About
  },
  {
    id: 'skills',
    label: 'Skills',
    children: Skills
  },
  {
    id: 'projects',
    label: 'Projetos',
    children: Projects
  }
]


export default function Home() {
  const { bgPrimaryColor, bgSecondaryColor, changeColors } = useColors();

  const [isDarkMode, setDarkMode] = useState(true)
  const [pos, setPos] = useState<number>(0)


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


  useEffect(() => { changeColors() }, [pos])


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
        {snapContainers.map((container, index) => {
          const Component = container.children
          return (
            <div id={container.id} className={`snap-center flex items-center justify-center h-full ${bgPrimaryColor}`} key={`container-${container.id}`}>
              <Component onScreen={() => setPos(index)} />
            </div>
          )
        })}
      </div>
    </>
  )
}
