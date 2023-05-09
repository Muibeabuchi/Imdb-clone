import Link from 'next/link'
import NavbarItem from './NavbarItem'
import FavoriteLink from './FavoriteLink'

export default function Navbar() {
  return (
    <div className='flex sticky top-0 z-[50] justify-center items-center space-x-3 dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
        <FavoriteLink />
        {/* <NavbarItem title='Favorites' param='' /> */}
        {/* <Link href='/favorites' className='hover:text-amber-600 mx-2 my-1 font-semibold p-2'>Favorites</Link> */}

    </div>
  )
}
