
import { create } from "zustand";
import { devtools,persist } from 'zustand/middleware'


const store =(set)=>({
    favorites:[],
    addToFavorite:(fav)=>set(store=>({
        // const hasfav = store.favorites.map(item=> item.id === fav.id)
       favorites: [...store.favorites,fav]
    })),
    removeFromFavorites:(payload)=>set((store)=>({
        favorites:  store.favorites.filter((item) => item.id !== payload.id)
    }))

})

export const useFavorites = create(persist(devtools(store),{name:'favorites'}));