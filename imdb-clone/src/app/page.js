import Results from "@/components/Results";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
// console.log(TMDB_API_KEY )
export const BASE_URL = 'https://api.themoviedb.org/3/'

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`${BASE_URL}${genre ==='fetchTopRated'?'movie/top_rated':'trending/all/week'}?api_key=${TMDB_API_KEY}&language=en-US&page=1`,{
    next:{revalidate:10000}
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();  
  const results = data?.results
  console.log(data)

  return (
   <Results results={results}/>
  )
}
