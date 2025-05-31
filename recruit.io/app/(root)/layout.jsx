import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function RootLayout({children}) {
  return (
    <div className='root-layout'>
      <nav className='flex flex-row gap-6 justify-between'>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/logo.svg'} alt='logo' width={38}  height={32}/>
          <h2 className='text-primary-100'>RECRUIT.IO</h2>
        </Link>
        <ul className='list-none flex flex-row justify-between gap-6 font-semibold text-primary-100'>
          <li className='flex flex-col item-center justify-center'>
            <Link href={'/'}>
              TECHNICAL INTERVIEW
            </Link>
          </li>

          <li className='flex flex-col item-center justify-center'>
            <Link href={'/'}>
              ENGLISH COMMUNICATION
            </Link>
          </li>          

        </ul>
        <div>

        </div>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout