import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaGoogle } from "react-icons/fa";

import AuthForm from '@/components/AuthForm';
 

export default function SignIn() {
  return <AuthForm type="sign-in" />
}


