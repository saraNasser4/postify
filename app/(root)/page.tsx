import SubHeading from '../components/SubHeading'
import StartupCard from '../components/StartupCard';
import { post } from '../context/types'


export default async function Home ({ searchParams }: { searchParams: Promise<{ query?: string }>}){
  const query = (await searchParams)?.query

  const posts: post[] = [
    {
      _createdAt: '14/5/2023',
      views: 55,
      author: { name: 'Sara', _id: 1 },
      _id: 1,
      description: 'This is a description',
      image: 'https://placehold.co/600x400',
      category: 'Robots',
      title: 'We Robots',
    },
  ]

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
