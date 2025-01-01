'use client';

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: ()=> void
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider ({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = ()=> setTheme(prev => prev === 'light' ? 'dark' : 'light')

    useEffect(()=> {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme) {
            setTheme(savedTheme)
        } else {
            setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('theme', theme)
        document.body.className = theme
    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}