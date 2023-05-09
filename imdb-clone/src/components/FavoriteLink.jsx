'use client'

import { useFavorites } from "@/store"
import Link from "next/link"

export default function FavoriteLink() {
    const favorites = useFavorites(state=> state.favorites)
    const favNum = favorites?.length
  return (
    <div className="flex items-center gap-x-[0.5]">
        <Link href='/favorites' className='hover:text-amber-600 mx-2 my-1 font-semibold p-2'>Favorites</Link>
        <span className="text-lg font-bold bg-white text-amber-700 w-10 h-10 p-0 flex items-center justify-center rounded-full">{favNum || 2}</span>
    </div>
  )
}
