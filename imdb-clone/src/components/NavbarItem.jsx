'use client';

import Link from "next/link";
import {useSearchParams} from 'next/navigation';


export default function NavbarItem({title,param}) {
    const searchParams = useSearchParams(); 
    const genre = searchParams.get('genre')

    // console.log(genre)
  return (
    <div>
        <Link className={`hover:text-amber-600 mx-2 my-1 font-semibold p-2 ${genre && genre === param && 'underline-offset-8 underline decoration-4 decoration-amber-500 rounded-lg'}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
