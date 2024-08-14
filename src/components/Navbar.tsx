import Link from 'next/link';
import React from 'react'


 const Navbar = () => {
  return (
    <header className='shadow-md'>
        <nav className='flex justify-between container mx-auto p-4'>
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex gap-4 text-blue-400 font-semibold tracking-wide'>
               <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Projects</Link>       
                 <Link href="/contact">Contact</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
