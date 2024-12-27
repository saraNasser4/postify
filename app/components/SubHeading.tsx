import FormComp from '../components/FormComp';


export default async function SubHeading ({ searchParams }: { searchParams: Promise<{ query?: string }>}){
    const query = (await searchParams)?.query
    return (
        <div className="!pattern w-full bg-primary p-4 min-h-[400px] flex justify-center items-center flex-col gap-4">
            <div className="bg-secondary dark:bg-white p-1 text-white dark:text-secondary font-semibold text-xl rounded capitalize">Patch, Vote and Grow</div>
            <div className="bg-white dark:bg-black dark:text-white p-2 font-black text-3xl lg:text-4xl max-w-[550px] text-center uppercase rounded-sm">
                Pitch your startup,<br />
                connect with entrepreneurs
            </div>
            <p className="text-white dark:text-black font-medium">Submit now your work</p>
            <FormComp query={query}/>    
        </div>
    )
}