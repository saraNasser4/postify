import SubHeading from '../components/SubHeading'


export default async function Home ({ searchParams }: { searchParams: Promise<{ query?: string }>}){
  const query = (await searchParams)?.query
  return (
    <div>
      <SubHeading query={query} />
    </div>
  );
}
