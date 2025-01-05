import FormComp from '../components/FormComp';


export default function SubHeading ({ content, query }: { content: { name: string, tag: string, heading: string, subHeading: string },  query?: string }){    
    
    return (
        <div className="pattern w-full bg-primary p-4 min-h-[400px] flex justify-center items-center flex-col gap-4">
            <h3 className="bg-secondary dark:bg-white p-1 text-white dark:text-secondary font-semibold text-xl rounded capitalize">{content.tag}</h3>
            <h1 className="bg-white dark:bg-black dark:text-white p-2 font-black text-3xl lg:text-4xl max-w-[550px] text-center uppercase rounded-sm">
                {content.heading}    
            </h1>
            <p className="text-white dark:text-black font-medium">{content.subHeading}</p>
            {content.name === 'landing-page' && <FormComp query={query}/>}
        </div>
    )
}