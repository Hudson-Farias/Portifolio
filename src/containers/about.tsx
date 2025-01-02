'use client'

import React, { forwardRef, useEffect, useState } from 'react'

import { LinkedinIcon } from '@/icons/linkedin'
import { GitHubIcon } from '@/icons/github'

const About = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    const roles = ['Software Developer', 'Fullstack Developer', 'Backend Developer', 'Frontend Developer', 'Devops']

    const [typedText, setTypedText] = useState(roles[0])
    const [currentIndex, setCurrentIndex] = useState(roles[0].length)
    const [isDeleting, setIsDeleting] = useState(true)
    const [textToType, setTextToType] = useState(roles[0])

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (currentIndex === textToType.length) {
                    setTimeout(() => setIsDeleting(true), 10000)
                    return
                }
                setTypedText(prevTypedText => prevTypedText + textToType[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)

            } else {
                if (typedText.length === 0) {
                    setIsDeleting(false)
                    setTextToType(prevTextToType => roles[(roles.indexOf(prevTextToType) + 1) % roles.length])
                    return
                }
                setCurrentIndex(prevIndex => prevIndex - 1)
                setTypedText(prevTypedText => prevTypedText.slice(0, -1))
            }
        }

        const timeoutId = setTimeout(handleTyping, 150)

        return () => clearTimeout(timeoutId)
    }, [roles, currentIndex, textToType, typedText, isDeleting])

    return (
        <div ref={ref} className={`flex flex-col w-9/12 md:w-6/12 h-20 md:h-36`}>
            <h1 className='text-4xl md:text-8xl'>Hudson Farias</h1>
            <p className='text-2xl md:text-5xl min-h-16-700'>{typedText}</p>
        </div>
    )
})


export default About
