'use client'

import { useFavorites } from "@/store"
import Results from '../../components/Results';
import { useEffect, useState } from "react";
// import { Suspense } from "react";

export default function FavoritesPage() {
    const favorites = useFavorites(state=>state.favorites);
    const [mounted,setMounted] =useState(false);
    useEffect(()=>{
      setMounted(true);
    },[])

    if(!mounted){
      return(
        <div className="flex justify-center">
          <img className='h-96' src="/spinning-loader.svg" alt="Loading..." />
        </div>
      )
    }
  return (
    <div className="max-w-6xl mx-auto mt-4 px-4">
        <h1 className="text-center text-lg sm:text-2xl mb-1 text-amber-600 font-extrabold">Browse your Favorites collection</h1>
        {/* <Suspense fallback={<p>Loading...</p>}> */}
         <Results results={favorites}/>
        {/* </Suspense> */}
    </div>
  )
}
