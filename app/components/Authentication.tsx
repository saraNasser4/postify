import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default async function Authentication (){
    const session = await auth();
    
    

    // const authFun = async(val: 'in' | 'out'): Promise<void> => {
    //     'use server'
    //     if(val === 'out') {
    //         await signOut()
    //     } else {
    //         await signIn('github')
    //     }
    // }

    return(
        <div className="font-medium text-[18px] text-black dark:text-white font-jost">
            {session && session?.user ?
                <div className="flex items-center [&>*]:pl-2 duration-300">
                    <Link href='/startup/create'>
                        <div title='add a legend post'><FaPlus /></div>
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
        <form action={async ()=> {
            'use server'
            await signIn('github')
        }} className='bg-primary hover:bg-primary/90 hover:scale-105 px-4 py-2 rounded-xl  '>
            <button type="submit">Sign in</button>
        </form>
    }
        </div>
    )
}