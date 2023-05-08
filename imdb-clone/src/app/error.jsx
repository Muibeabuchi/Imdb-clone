'use client';

import { useEffect } from "react";


export default function Error({error,reset}) {

    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className="text-center mt-10">
        <h1 className="text-xl font-bold">Something went wrong!!</h1>
        <button className='rounded-lg mt-1 hover:text-amber-600 hover:scale-90 transition-transform duration-200 bg-gray-500 px-2 py-1 hover:bg-slate-300 ' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
