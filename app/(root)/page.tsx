import SubHeading from '../components/SubHeading'
import StartupCard from '../components/StartupCard';
import { post } from '../context/types'
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';


export default async function Home ({ searchParams }: { searchParams: Promise<{ query?: string }>}){
  const query = (await searchParams)?.query

  const posts: post[] = await client.fetch(STARTUPS_QUERY);

  return (
    <main className='dark:bg-black'>
      <section>
        <SubHeading query={query} />
      </section>
      <section className='max-w-[1350px] my-12 mx-auto [&>*]:px-5'>
        <h2 className='font-semibold text-xl md:text-2xl dark:text-white'>
          {query ? `Search result for '${query}'` : 'All Starups'}
        </h2>
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-7'>
          {posts?.length > 0 ? (
            posts.map((post)=>(
              <StartupCard key={post?._id} post={post} /> 
            ))
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </main>
  );
}
