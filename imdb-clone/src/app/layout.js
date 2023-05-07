import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Imdb clone',
  description: 'An Imdb clone created withe Next.js',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>

        {/*   Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Searchbar */}

        {children}
        </Providers>
        </body>
    </html>
  )
}
