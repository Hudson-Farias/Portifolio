'use client'

import React, { useRef, useState } from 'react'

import About from '../components/about'
import Test from '../components/test'

// import Projects from '@/components/projects'
// import Contact from '@/components/contact'

// import styles from '@/styles/scrollbar.module.sass'

// import { API } from '@/api'

interface DataI {
  repos?: {
    id: number,
    name: string,
    description: string | null,
    html_url: string | null,
    homepage: string | null
  }[]
}

const theme = {
  'text': '',
  'color_primary': 'bg-zinc-800 dark:bg-black',
  'color_secondary': 'bg-zinc-950 dark:bg-white',
}

interface BackgroundColorsI {
  color_primary: string,
  color_secondary: string
}

export default function Home() {
  const [data, setData] = useState<DataI>({})

  const [backgroundColor, setBackgroundColor] = useState<BackgroundColorsI>({
    color_primary: theme.color_primary,
    color_secondary: theme.color_secondary
  })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const changeColor = (pos: number) => {
    const colors = {
      color_primary: pos % 2 === 0 ? theme.color_primary : theme.color_secondary,
      color_secondary: pos % 2 === 0 ? theme.color_secondary : theme.color_primary
    }
    setBackgroundColor(colors)
  }

  const snapContainers = [
    {
      id: 'about',
      label: 'Sobre',
      children: About
      // children: <About />
    },
    {
      id: 'projects',
      label: 'Projetos',
      children: Test
    },
    {
      id: 'test',
      label: 'Test',
      children: Test
    },
    // {
    //   id: 'contact',
    //   label: 'Contato',
    //   // children: <Contact urls={data.urls} />
    //   children: <p>OLA MUNDO</p>
    // },
  ]
  return (
    <>
      <header className={`${backgroundColor.color_secondary}`}>
        <nav className='flex items-center gap-5 px-5 h-full'>
          <a href='#about' className='text-white'>Sobre</a>
          <a href='#projects' className='text-white'>Projetos</a>
        </nav>
      </header>

      <div ref={scrollContainerRef} className={`snap-mandatory snap-y overflow-auto`}>
        {/* // <div ref={scrollContainerRef} className={`${styles.scrollbar} snap-mandatory snap-y overflow-auto h-full`}> */}
        {snapContainers.map((container, index) => {
          const Component = container.children
          return (
            <div id={container.id} className={`relative snap-center flex items-center justify-center h-full ${backgroundColor.color_primary}`} key={container.id}>
              <Component onScreen={() => changeColor(index)} />
           </div>
          )})}
      </div>

      <footer className={`${backgroundColor.color_secondary}`}>

      </footer>
    </>
  )
}
