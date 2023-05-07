// 'use client'

import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';
import DarkModeSwitch from "./DarkModeSwitch";


export default function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl lg:mx-auto py-2 sm:py-6">
        <div className="flex items-center"> 
         <MenuItem title='Home' address='/' Icon={AiFillHome}  />
         <MenuItem title='About' address='/about' Icon={HiInformationCircle}/>
         </div>
        <div className="flex items-center space-x-5"> 
        <DarkModeSwitch />
            <Link href='/'>
                <h2 className="text-2xl ">
                    <span className=" mr-1 font-bold bg-amber-500 rounded-lg py-1 px-2">IMDb</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
