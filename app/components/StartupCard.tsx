import { FaRegEye } from "react-icons/fa6";
import { post } from "../context/types";
import Image from "next/image";
import Link from "next/link";

export default function StartupCard({ post }: { post: post}) {
    const dateArr = post._createdAt.split('/').map((el)=> +el)
    const postDate = new Date(dateArr[2], dateArr[1], dateArr[0]).toDateString()
    
    return(
        <li className="flex items-center justify-evenly gap-4 flex-col p-3 mx-auto w-full max-w-[410px]  border-4 border-black rounded-xl dark:bg-secondary dark:text-white hover:bg-primary/20 hover:border-primary dark:hover:bg-secondary/70">
            <div className="flex justify-between w-full">
                <p className="bg-primary/80 dark:bg-primary/50 px-1 rounded-full">{postDate ? postDate : post._createdAt}</p>
                <div className="flex items-center gap-2">
                    <FaRegEye className="text-primary" />
                    <span>{post.views}</span>
                </div>
            </div>

            <div className="flex justify-between w-full">
                <div>
                    <Link href={`/users/${post.author._id}`}>
                        <h5 className="text-nowrap hover:text-primary">{post.author.name}</h5>
                    </Link>
                    <Link href={`/startups/${post._id}`}>
                        <h4 className="font-semibold sm:text-[18px]">{post.title}</h4>
                    </Link>
                </div>
                <Link href={`/users/${post.author._id}`}>
                    <Image src='https://placehold.co/48x48' alt='placeholder' width={48} height={48} className="rounded-full" />
                </Link>
            </div>

            <Link href={`/startup/${post._id}`} className="w-full">
                <p className="my-2 text-[14px]">{post.description}</p>
                <img src={post.image} alt="post image" className="rounded-xl max-h-[200px] min-w-full"/>
            </Link>

            <div className="flex justify-between w-full text-[18px]">
                <Link href={`/?query=${post.category.toLowerCase()}`}>
                    <p className="border border-primary hover:text-primary rounded-xl px-3 py-1.5">{post.category}</p>
                </Link>
                <Link href={`/startups/${post._id}`}>
                    <button className="bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-xl">Details</button>
                </Link>
            </div>
        </li>
    )
}