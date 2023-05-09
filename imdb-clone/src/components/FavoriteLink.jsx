'use client'

import { useFavorites } from "@/store"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FavoriteLink() {
    const favorites = useFavorites(state=> state.favorites)
    const favNum = favorites?.length

    const [mounted,setMounted] =useState(false);
    useEffect(()=>{
      setMounted(true);
    },[])

    if(!mounted) return;
  return (
    <div className="flex items-center gap-x-[0.5]">
        <Link href='/favorites' className='hover:text-amber-600 mx-2 my-1 font-semibold p-2'>Favorites</Link>
        {
          favNum >0 && (
            <span className="text-lg font-bold bg-white text-amber-700 w-10 h-10 p-0 flex items-center justify-center rounded-full">{favNum || 0}</span>
          )
        }
    </div>
  )
}
