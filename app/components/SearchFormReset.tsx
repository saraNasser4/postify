'use client'

import Link from "next/link"
import { IoMdClose } from "react-icons/io"

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
                className="absolute top-2 right-12 font-bold text-xl hover:text-primary"
            >
                <IoMdClose size={30} />
            </button>
        </Link>
    )
}