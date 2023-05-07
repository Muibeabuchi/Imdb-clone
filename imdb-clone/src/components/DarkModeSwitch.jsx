'use client';

import {MdLightMode} from 'react-icons/md';
import {BsMoonFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const {systemTheme,theme,setTheme} = useTheme();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])

    const currentTheme = theme == 'system' ? systemTheme:theme;
    const handleTheme =(theme)=>{
        setTheme(theme);
    }
    if(!mounted)return null;
  return (
    <>
        {currentTheme == 'light' ? (    <BsMoonFill className='text-xl cursor-pointer hover:text-amber-500 '  onClick={()=>handleTheme('dark')} />
        ):(    <MdLightMode className='text-xl cursor-pointer hover:text-amber-500 ' onClick={()=>handleTheme('light')} />
        )}
    </>
  )
}
