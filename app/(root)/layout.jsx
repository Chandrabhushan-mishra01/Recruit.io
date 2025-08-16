import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

async function RootLayout({children}) {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated)  redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav className='flex flex-row gap-6 justify-between'>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/logo.svg'} alt='logo' width={38}  height={32}/>
          <h2 className='text-primary-100'>RECRUIT.IO</h2>
        </Link>
        
        <div>

        </div>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout