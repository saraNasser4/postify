'use client'

import Link from "next/link"

export default function SearchFormReset() {
    const reset = ()=> {
        const form = document.querySelector(".search-form") as HTMLFormElement
        if(form) form.reset()
    }

    return(
        <Link href='/'>
            <button 
                type='reset'
                onClick={reset} 
                className="absolute top-[6px] right-10 font-bold text-xl hover:text-primary"
            >
                X
            </button>
        </Link>
    )
}