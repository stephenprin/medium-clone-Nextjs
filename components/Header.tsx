import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <header className='flex justify-between items-center p-5  max-w-6xl mx-auto'>
          <div className='flex items-center space-x-8'>
              <Link href='/'>
                 <h1 className='font-bold text-2xl cursor-pointer'>Medium</h1>
              </Link>
              <div className=' text-[0.8rem] hidden md:inline-flex  items-center space-x-5'>
                  <h3 >About</h3>
                  <h3>Contact</h3>
                  <h3 className='bg-green-600 px-4 py-1 rounded-full '>Follow</h3>
              </div>
          </div>
          <div className='flex items-center space-x-5 text-[0.8rem] text-green-600'>
              <h3>Sign In</h3>
              <h3 className='border border-green-500 px-4 py-1 rounded-full '>Get Started</h3>
            </div>
    </header>
  )
}

export default Header
