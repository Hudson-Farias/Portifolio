'use client'

import React, { useState } from 'react'

import { containers } from '@/containers'

import { DarkThemeIcon } from '@/icons/dark-theme'
import { LightThemeIcon } from '@/icons/light-theme'

import { LinkedinIcon } from '@/icons/linkedin'
import { DiscordIcon } from '@/icons/discord'
import { WhatsAppIcon } from '@/icons/whatsapp'
import { GitHubIcon } from '@/icons/github'

import { ColorProvider, useColors } from '@/contexts/colors';

import { linkedin_url, discord_url, whatsapp_url, github_url } from '@/data/social.json'


function LayoutClientComponent({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [isDarkMode, setDarkMode] = useState(true)
  const { bgPrimaryColor, bgSecondaryColor } = useColors();

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

  return (
    <main className={`font-mono h-screen grid grid-cols-[3rem,9fr] overflow-hidden text-black dark:text-white ${bgPrimaryColor}`}>
      <aside className={`col-start-1 col-end-2 flex flex-col justify-between text-sm px-5 py-8 rounded-r-2xl border-r border-gray-700 ${bgSecondaryColor}`}>

        <div className='flex flex-col items-center gap-14'>
          <section className='flex items-center justify-center gap-10'>
            <button onClick={handleTheme}>
              {isDarkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
            </button>
          </section>
          <nav className='flex flex-col gap-20'>
            {containers.map((container) => <a className='-rotate-90' href={`#${container.id}`} key={`nav-${container.id}`}>{container.label}</a>)}
          </nav>
        </div>

        <div className='flex flex-col items-center gap-8'>
          <a href={linkedin_url} target='_blank'><LinkedinIcon height={18} width={18} /></a>
          <a href={discord_url} target='_blank'><DiscordIcon height={18} width={18} /></a>
          <a href={whatsapp_url} target='_blank'><WhatsAppIcon height={16} width={16} /></a>
          <a href={github_url} target='_blank'><GitHubIcon height={18} width={18} /></a>
        </div>

      </aside>

      {children}

      {/* <footer className={`col-start-2 col-end-3 row-start-2 row-end-3 flex justify-between items-center text-sm px-5 ${bgSecondaryColor}`}>
        <span>© Hudson Farias 2021 - {new Date().getFullYear()}</span>

        <nav className={`flex items-center gap-5`}>
          <a href='https://discord.com/users/1127594477536694332' target='_blank'>
            <DiscordIcon />
          </a>

          <a href='https://wa.me/5521995021812' target='_blank'>
            <WhatsAppIcon />
          </a>
        </nav>
      </footer> */}
    </main>
  );
}


export function LayoutClient({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ColorProvider>
      <LayoutClientComponent>
        {children}
      </LayoutClientComponent>
    </ColorProvider>
  );
}