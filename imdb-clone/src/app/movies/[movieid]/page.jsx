import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

async function getMovie(movieId){    
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`);
    if(!res.ok){
        throw new Error('could not fetch the movies data')
    } 
    const data = await res.json();
    console.log(data)
    return data;
}


export default async function MoviesPage({params}) {

    const movieId = params.movieid;
    const movies = await getMovie(movieId);
    // console.log(movies)
    const imageUrl = 'https://image.tmdb.org/t/p/original/'

   
  return (
    <div className="max-w-6xl mx-auto p-4 md:pt-8 flex flex-col md:flex-row items-center content-center md:space-x-6">
         <Image src={`${imageUrl}${movies?.backdrop_path}`} alt="movie image " 
            height={300}
            width={500}
            className="rounded-lg  "
            style={{maxWidth:'100%',height:'100%'}}
            // placeholder="blur"
            // blurDataURL="/imdb-spinner.svg"
            />
            <div className="p-2">
                <h2 className="text-lg mb-3 font-bold ">{movies?. original_title || movies?.title}</h2>
                <p className="text-lg mb-3"><span className="font-semibold mr-1 text-amber-500">Overview:</span> {movies?.overview}</p>
                <p className="mb-3 font-semibold mr-1 "><span className="text-amber-500">Date Released: </span>{movies?.release_date || movies?.first_air_date}</p>
                <p className="mb-3 font-semibold mr-1 "><span className="text-amber-500">Rating: </span>{movies?.vote_average}</p>
                
                <div className="">
                  <FavoriteButton favorite={movies} />
                </div>
            </div>
    </div>
  )
}
