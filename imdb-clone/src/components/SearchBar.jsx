'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const [text,setText] = useState('');
    const router = useRouter();
    function handleSearch(e){
        e.preventDefault();
        if(text){
            router.push(`/search/${text}`)
            setText('');
        }
    }
  return (
    <div className="max-w-6xl mx-auto px-4 pt-3">
        <form className="w-full flex items-center">

        <input type="text" placeholder="Search Keywords.." value={text} onChange={(e)=>setText(e.target.value)} className="bg-transparent border-none focus:border-none outline-none w-full"/>
        <button onClick={handleSearch} type="submit" className="disabled:text-gray-200 text-amber-500 cursor-pointer" disabled={!text}>Search</button>
        </form>
    </div>
  )
}
