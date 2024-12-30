import React, { createContext, useContext, useState } from 'react'


interface ColorsI {
    bgPrimaryColor: string,
    bgSecondaryColor: string
}


const bgPrimaryColor = 'bg-primary-color dark:bg-primary-color'
const bgSecondaryColor = 'bg-secondary-color dark:bg-secondary-color'


const ColorContext = createContext({
    bgPrimaryColor, bgSecondaryColor,
    changeColors: () => { }
})


export const useColors = () => {
    return useContext(ColorContext)
}


export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
    const [colors, setColors] = useState<ColorsI>({ bgPrimaryColor, bgSecondaryColor })

    const changeColors = () => {
        setColors(prev => ({
            bgPrimaryColor: prev.bgSecondaryColor,
            bgSecondaryColor: prev.bgPrimaryColor
        }))
    }

    return (
        <ColorContext.Provider value={{ ...colors, changeColors }}>
            {children}
        </ColorContext.Provider>
    )
}
