import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <header>
          <div>
              <Link href='/'>
                 <h1 className='font-bold text-2xl'>Medium</h1>
              </Link>
          </div>
            <div></div>
    </header>
  )
}

export default Header
