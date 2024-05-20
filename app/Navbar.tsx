import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div className='bg-slate-500 flex p-5 text-white'>
          <Link href="/" className='mr-5'>Home</Link>
          <Link href="/users" >User</Link>
    </div>
  )
}

export default Navbar