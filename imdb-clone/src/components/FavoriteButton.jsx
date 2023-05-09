'use client';

import { useFavorites } from '@/store';
import {AiOutlineStar,AiFillStar} from 'react-icons/ai';

export default function FavoriteButton({favorite}) {
  const fav = useFavorites(state=>state?.favorites);
  const addToFavorite = useFavorites(state=> state.addToFavorite);
  const removeFromFavorite = useFavorites(state=> state.removeFromFavorites);
  const hasFav = fav.find(item=>item.id === favorite.id);
  
  const addFav=()=>{
    if(hasFav){
      removeFromFavorite(favorite);
      // console.log('THis movie is already in the favorite list')
    }else{
      // console.log('added to favorites')
      addToFavorite(favorite)
    }
  }

  return (
  <button className='flex items-center gap-x-2 cursor-pointer border-2 border-amber-600 rounded-lg px-3 py-1  hover:bg-amber-400 ' type='button' onClick={addFav}>
    <span className='text-lg font-semibold'>{!hasFav ? 'Add To Favorites':'Remove from Favorites'}</span>
    <span>{!hasFav ? (<AiOutlineStar className=' h-8 text-xl'/>):(<AiFillStar className='h-8 text-amber-600 text-xl' />)}</span>
  </button>
  )
}
