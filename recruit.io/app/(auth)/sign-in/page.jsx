import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaGoogle } from "react-icons/fa";

import AuthForm from '@/components/AuthForm';
 

export default function SignIn() {
  return <AuthForm type="sign-in" />
}



{/* <div className='flex flex-col items-center justify-center h-screen text-white gap-4'>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <Image src={'/logo.svg'} alt='logo' width={20} height={20}/>
                    <h1 className='text-xl'>RECRUT.IO</h1>
                </div>
                <h2 className='text-xl'>Practice job interviews with AI</h2>
            </div>
            <div class="flex items-center text-gray-300 text-sm font-medium">
                <hr className="flex-grow border-t border-white-600" />
                <span className="px-4">OR</span>
                <hr className="flex-grow border-t border-white-600" />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p>Login with your google account</p>
                <Button className='bg-white text-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 transition-colors'>
                    <FaGoogle />
                    <span >Login with Google</span>
                </Button>
            </div>
        </div> */}