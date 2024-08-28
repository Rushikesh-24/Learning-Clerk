import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {userId} = auth()
  return (
    <div className='w-full flex justify-center gap-10 p-10 text-2xl items-center'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        
        <div>{userId? <UserButton/>:<><Link href="/sign-up">Signup</Link>
        <Link href="/sign-in">Signin</Link></>}</div>
    </div>
  ) 
}

export default Header