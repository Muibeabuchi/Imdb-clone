'use client'    

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div className='dark:bg-gray-700 transition-colors duration-300 dark:text-gray-200 text-gray-700 select-none min-h-screen ' >
            {children}
        </div>
    </ThemeProvider>
  )
}
