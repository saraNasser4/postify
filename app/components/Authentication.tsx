import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default async function Authentication (){
    const session = await auth();

    return(
        <div className="font-medium text-[18px] text-black dark:text-white">
            {session && session?.user ?
                <div className="flex items-center [&>*]:pl-2 duration-300">
                    <Link href='/startup/create'>
                        <button title='add a legend post' className='bg-primary hover:bg-primary/90 p-3 m-1 rounded-full'><FaPlus /></button>
                    </Link>
                    <form action={async ()=> {
                        'use server'
                        await signOut()
                    }
                    }>
                        <button type="submit" className="border border-primary hover:text-primary rounded-xl px-4 py-2 ">Log out</button>
                    </form>
                    <span className="hidden md:block text-[16px] lg:text-xl text-primary">{session?.user?.name}</span>
                </div>
        : 
        <form 
            action={async ()=> {
                'use server'
                await signIn('github')
            }} 
            className='bg-primary hover:bg-primary/90 px-4 py-2 rounded-xl'>
            <button type="submit">Sign in</button>
        </form>
    }
        </div>
    )
}