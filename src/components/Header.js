import Image from 'next/image'
import { SearchIcon, ShoppingCartIcon, ChevronDownIcon} from '@heroicons/react/outline'
import profilePic from '../../public/images/profile.jpg'
import { useState,useEffect } from 'react';
import {signIn, signOut , useSession } from 'next-auth/react'
import { useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
  const [isShowCategory, setIsShowCategory] = useState(false)

  const {data : session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const toggleCategory = () =>{
    setIsShowCategory(!isShowCategory)
  }

  return (
    <header>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue p-1 grow py-4'>
            <div className='mt-2 flex items-center grow sm:grow-0 text-white text-xs'>
                <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain"
                className='cursor-pointer' onClick={() => router.push('/')}/>
                <div className='link'>
                  <p>Select</p>
                  <div className='flex' onClick={toggleCategory}>
                    <p className='font-extrabold'>Category</p>
                    <ChevronDownIcon className='h-5'/>
                  </div>
                </div>
            </div>
 
            {/* Search */}
            <div className="hidden sm:flex items-center bg-amazon_yellow h-10 rounded-md rounded-bg hover:bg-yellow-500 cursor-pointer grow mx-6">
              <input className='p-2 h-full w-full grow flex-shrink rounded-l-md focus:outline-none px-4 ' placeholder='Search from A to Z' type="text" />
              <SearchIcon className="p-4 h-14 text-white"/>
            </div>

            {/* Right */}
            <div className='flex space-x-6  text-xs whitespace-nowrap items-center text-white mr-6'>
              <div className='hidden lg:inline'>
                <Image src={session ? session.user.image : profilePic } height={30} width={30} className='rounded-full'/>
              </div>
              <div onClick={!session ? signIn : signOut} className='link'>
                <p>{ session ? `Hello, ${session.user.name.split(' ')[0]}` : 'Sign In' }</p>
                <p className='font-extrabold md:text-sm'>Accounts & Links</p>
              </div>
              <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
              </div>
              <div className='relative link' onClick={() => router.push('cart')}>
                <span className='absolute top-0 right-0 h-4 w-4 bg-amazon_yellow font-bold text-center rounded-full '>{items.length}</span>
                <ShoppingCartIcon className='h-8' />
              </div>
            </div>
        </div>

        {/* Dropdown */}
        <div className='relative z-20'>
          <div className={`absolute left-[150px] rounded-lg w-80 bg-amazon_blue-alice p-2 ${isShowCategory ? 'infline' : 'hidden'}`}>
            <ul className='flex flex-col'>
              <li className='link hover:bg-white rounded-md p-4'>Digital Content & Devices</li>
              <li className='link hover:bg-white rounded-md p-4'>Art & Crafts</li>
              <li className='link hover:bg-white rounded-md p-4'>Automotive</li>
              <li className='link hover:bg-white rounded-md p-4'>Baby</li>
              <li className='link hover:bg-white rounded-md p-4'>Beauty & Personal Care</li>
              <li className='link hover:bg-white rounded-md p-4'>Computer</li>
              <li className='link hover:bg-white rounded-md p-4'>Digital Music</li>
              <li className='link hover:bg-white rounded-md p-4'>Kindle Store</li>
              <li className='link hover:bg-white rounded-md p-4'>Prime Video</li>
              <li className='link hover:bg-white rounded-md p-4'>Women's Fachion</li>
              <li className='link hover:bg-white rounded-md p-4'>Men's Fachion</li>
              <li className='link hover:bg-white rounded-md p-4'>Children Clothing</li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header;