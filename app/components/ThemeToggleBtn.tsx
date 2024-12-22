'use client';

import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

import { FaRegLightbulb, FaLightbulb } from "react-icons/fa6";


export default function ThemeToggleBtn () {
    const context = useContext(ThemeContext)

    if (!context) return <div>Error: ThemeContex not available</div>

    const { theme, toggleTheme } = context
    return(
        <button 
            onClick={toggleTheme}
            className="text-4xl text-black"
        >
            {theme === 'light' ? <FaRegLightbulb /> : <FaLightbulb />}
        </button>
    )
}
