import React, { useRef, useEffect } from 'react';

import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card"

const data_skills = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path fill='currentColor' d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"></path></svg>,
        frameworks: ['FastAPI', 'Playwright', 'Flask', 'Django']
    },
    {
        icon:
            <section className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path fill='currentColor' d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path fill='currentColor' d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path></svg>
            </section>,
        frameworks: ['NextJS', 'ReactJS', 'Redux']
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 50 50"><path fill="currentColor" d="M 25 12 C 11.542969 12 1 17.710938 1 25 C 1 32.289063 11.542969 38 25 38 C 38.457031 38 49 32.289063 49 25 C 49 17.710938 38.457031 12 25 12 Z M 22.507813 16 L 25.128906 16 L 24.296875 20 L 26.636719 20 C 28.121094 20 29.117188 20.207031 29.683594 20.726563 C 30.238281 21.238281 30.40625 22.078125 30.183594 23.222656 L 29.144531 28 L 26.480469 28 L 27.4375 23.582031 C 27.554688 22.976563 27.507813 22.554688 27.304688 22.332031 C 27.101563 22.109375 26.65625 22 25.988281 22 L 23.890625 22 L 22.625 28 L 20 28 Z M 11 20 L 16.332031 20 C 18.875 20 20.414063 21.703125 19.8125 24.246094 C 19.113281 27.199219 17.238281 28 13.792969 28 L 12.144531 28 L 11.621094 31 L 8.972656 31 Z M 32 20 L 37.332031 20 C 39.875 20 41.414063 21.703125 40.8125 24.246094 C 40.113281 27.199219 38.238281 28 34.792969 28 L 33.144531 28 L 32.621094 31 L 29.972656 31 Z M 13.269531 22 L 12.515625 26 L 14.226563 26 C 15.707031 26 17.082031 25.832031 17.3125 23.625 C 17.398438 22.769531 17.042969 22 15.332031 22 Z M 34.269531 22 L 33.515625 26 L 35.226563 26 C 36.707031 26 38.082031 25.832031 38.3125 23.625 C 38.398438 22.769531 38.042969 22 36.332031 22 Z"></path></svg>,
        frameworks: ['Laravel', 'Slim']
    },
    {
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path></svg>,
        frameworks: ['MySQL', 'Postgres', 'Mongodb', 'Redis']
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50"><path fill='currentColor' fill-rule="evenodd" d="M 42 6 L 39 40 L 25 44 L 11 40 L 8 6 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path></svg>,
        frameworks: ['Tailwind', 'Sass', 'Radix', 'Shadcn']
    },
    {
        icon: <svg width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill='currentColor' fill-rule="evenodd" clip-rule="evenodd" d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" /></svg>,
        frameworks: ['Git', 'Docker', 'AWS']
    }
]

export default function Skills({ onScreen, colors }: { onScreen: () => void, colors: any }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { entry.isIntersecting ? onScreen() : undefined },
            { threshold: 1.0 }
        )

        elementRef.current ? observer.observe(elementRef.current) : undefined
        return () => elementRef.current ? observer.unobserve(elementRef.current) : undefined
    }, []);

    return (
        <div ref={elementRef} className={`grid grid-cols-3 gap-20 ${colors.text}`}>
            {data_skills.map(skill => (
                <Card className={`w-96 h-64 px-7 py-3 ${colors.color_secondary}`}>
                    <CardHeader className='flex items-center'>{skill.icon}</CardHeader>
                    <CardContent className='flex flex-col justify-start justify-items-start'>
                        {skill.frameworks.map(framework => <span>- {framework}</span>)}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

