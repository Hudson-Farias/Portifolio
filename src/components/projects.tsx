import React, { useRef, useEffect } from 'react';

export default function About({ onScreen, colors }: { onScreen: () => void, colors: any }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { entry.isIntersecting ? onScreen() : undefined },
            {threshold: 1.0}
        )

        elementRef.current ? observer.observe(elementRef.current) : undefined
        return () => elementRef.current ? observer.unobserve(elementRef.current) : undefined
    }, []);

    return (
        <div ref={elementRef} className={`text-center font-mono ${colors.text}`}>
        Em breve
        </div>
    );
}

