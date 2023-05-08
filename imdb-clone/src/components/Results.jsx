import MovieCard from "./MovieCard"

export default function Results({results}) {

    const SingleResult   = results.map(item=>(
        <MovieCard key={item.id} results={item} />
    ))
  return (
    <div className="gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-ols-5 max-w-6xl mx-auto py-4 ">{SingleResult}</div>
  )
}
