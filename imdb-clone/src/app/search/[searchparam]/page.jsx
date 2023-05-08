import Results from "@/components/Results";


async function searchMovie(searchText){
    const searchUrl ='https://api.themoviedb.org/3/search/movie'
    const res = await fetch(`${searchUrl}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&query=${searchText}&include_adult=false`)
    if(!res.ok){
        throw new Error('failed to fetch the data');
    }
    return res.json();
}

export default async function SearchPage({params}) {
    const searchParams = params.searchparam;
    const movies = await searchMovie(searchParams);
    const results = movies?.results
    // console.log(movies)
    // console.log(searchParams);
  return (
    <div className="mx-auto max-w-6xl p-4 mt-3">
        <Results results={results}/>
    </div>
  )
}
