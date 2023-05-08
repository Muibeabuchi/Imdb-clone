import Image from "next/image";
import Link from "next/link";
import {BiLike} from 'react-icons/bi';
import Placeholder from '../assets/imdb-placeholder.png';



export default function MovieCard({results}) {

    const imageUrl = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className="sm:shadow-md border-b-2 border-amber-400 sm:hover:shadow-slate-400 mb-4 sm:mb-0  sm:p-3 cursor-pointer rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200
    group">
        <Link href={`movies/${results.id}`}>
            <div className="w-full h-[300px]">
            <Image src={results?.backdrop_path ? `${imageUrl}${results?.backdrop_path || results?.poster_path  }` : Placeholder} alt="movie image poster" 
            height={300}
            width={500}
            className="h-full sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-150 object-cover"
            style={{maxWidth:'100%',height:'100%',objectFit:'cover'}}
            placeholder="blur"
            blurDataURL="/spinning-loader.svg"
            />
            </div>
            <div className="p-2">
                <p className="line-clamp-3">{results.overview}</p>
                <h2 className="text-lg truncate font-bold mt-1">{results?.title || results?.original_title|| 'Title not available'}</h2>
                <div className="flex items-center mt-1 space-x-5">
                    <p className="  ">{results?.release_date || 'No Date' }</p>
                    <p className="flex items-center"><span><BiLike className="mr-3"/></span> {(results?.vote_count).toLocaleString()}</p>
                </div>
            </div>

        </Link>
    </div>
  )
}
