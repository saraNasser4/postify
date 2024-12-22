import Image from "next/image";
import ThemeToggleBtn from "./ThemeToggleBtn";
import LogoImg from '../../public/logo.png'
import Link from "next/link";

export default function NavBar() {
    return(
        <header className="px-5 py-3 bg-white dark:bg-black shadow w-full">
            <nav className="max-w-[1350px] mx-auto flex justify-between items-center">
                <Link href='/'><Image src={LogoImg} className='w-40 md:w-52' alt='Logo' /></Link>
                <div className="hover:bg-primary/10 hover:dark:bg-primary py-1 px-2 rounded-full transition-all duration-300"><ThemeToggleBtn /></div>
                <button className='bg-primary hover:bg-primary/90 hover:scale-105 px-4 py-2 rounded-xl font-medium text-[18px] text-black dark:text-white '>Sign in</button>
            </nav>
        </header>
    )
}