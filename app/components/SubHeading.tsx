import { FaSearch } from "react-icons/fa";

export default function SubHeading (){
    return (
        <div className="!pattern w-full bg-primary p-4 min-h-[400px] flex justify-center items-center flex-col gap-4">
            <div className="bg-secondary dark:bg-white p-1 text-white dark:text-secondary font-semibold text-xl rounded capitalize">Patch, Vote and Grow</div>
            <div className="bg-white dark:bg-black dark:text-white p-2 font-black text-3xl lg:text-4xl max-w-[550px] text-center uppercase rounded-sm">
                Pitch your startup,<br />
                connect with entrepreneurs
            </div>
            <p className="text-white dark:text-black font-medium">Submit now your work</p>
            {/* <form className="relative max-w-[480px] mx-auto">
                <input type='text' placeholder='SEARCH STARTUP' className="w-full min-w-[300px] py-2 px-4 rounded-full border-2 border-black shadow-xl outline-none placeholder:text-black placeholder:font-bold accent-primary"/>
                <button className="absolute top-[14px] right-3"><FaSearch /></button>
            </form> */}
            
        </div>
    )
}