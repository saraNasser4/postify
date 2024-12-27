import Form from "next/form"
import { FaSearch } from "react-icons/fa"
import SearchFormReset from "../components/SearchFormReset"

export default function FormComp({ query }: { query?: string }) {
    return(
        <Form
            action='/'
            className="search-form relative "
        >
            <input 
                type='text'
                name='query'
                defaultValue={query}
                placeholder='SEARCH STARTUP'
                className="w-full min-w-[300px] py-2 px-4 rounded-full border-2 border-black shadow-xl text-xl font-black outline-none placeholder:text-black placeholder:font-bold accent-primary"
            />
            {query && <SearchFormReset />}
            <button type='submit' className="absolute top-[14px] right-3"><FaSearch /></button>
            
        </Form>
    )
}