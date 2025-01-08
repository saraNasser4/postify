import SubHeading from '../components/SubHeading'
import StartupCard from '../components/StartupCard';
import { post } from '../context/types'
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';


export default async function Home ({ searchParams }: { searchParams: Promise<{ query?: string }>}){
  const query = (await searchParams)?.query

  let posts: post[] = []
  const params = { search: query || null}
  try {
    const { data }  = await sanityFetch({ query: STARTUPS_QUERY, params })
    posts = data
  } catch (err) {
    console.error('Error fetching posts:', err)
  }

  const content = {
      name: 'landing-page',
      tag: 'patch, vote and grow',
      heading: 'Pitch your startup, connect with entrepreneurs',
      subHeading: 'search now about startups to connect fast',
  }

  return (
    <main className='dark:bg-black/95'>
      <section>
        <SubHeading content={content} query={query} />
      </section>
      <section className='max-w-[1350px] py-12 mx-auto [&>*]:px-5'>
        <h2 className='font-semibold text-xl md:text-2xl dark:text-white'>
          {query ? `Search result for '${query}'` : 'All Starups'}
        </h2>
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-7'>
          {posts?.length > 0 ? (
            posts.map((post: post)=>(
              <StartupCard key={post?._id} post={post} /> 
            ))
          ) : (
            <p className='dark:text-white'>No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </main>
  );
}
