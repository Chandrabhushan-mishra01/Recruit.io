"use client"
import React from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import FormField from './AuthFormField'
import Image from 'next/image'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"




import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"

import Link from 'next/link'
import { toast } from 'sonner'
import { auth } from '@/Firebase/client'
import { signIn, signUp } from '@/lib/actions/auth.action'
 

const authFormSchema=(type)=>{
    return z.object({
        name: (type==='sign-up')?z.string().min(3): z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    })
}


function AuthForm({type}) {

     const router = useRouter()

     const formSchema = authFormSchema(type);

     const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        password: "",
        },
    });

 
    
    async function onSubmit(values) {
        try {
            if(type === "sign-up"){

                const { name, email, password } = values;
                const userCredential = await createUserWithEmailAndPassword(auth,email,password);

                const result = await signUp({
                    uid: userCredential.user.uid,
                    name,
                    email,
                });

                if (!result.success) {
                    toast.error(result.message);
                    return;
                }

                toast.success("Account created successfully. Please sign in.");
                router.push("/sign-in");
            }
            else{

                const {email,password}= values;
                const userCredential = await signInWithEmailAndPassword(auth, email, password);

                const idToken = await userCredential.user.getIdToken();

                if (!idToken) {
                    toast.error("Sign in failed. Please try again.");
                    return;
                }

                await signIn({
                    email,
                    idToken,
                });

                toast.success("Signed in successfully.");
                    setTimeout(() => {
                    router.push("/");
                }, 500);
            }
        } 
        catch (error) {
            console.error(error);
            toast.error(`There was an error: ${error.message || error.code || String(error)}`);
        }
    };

     const isSignIn = type === "sign-in";

  return (
    <div className='card-border lg:min-w-[466px]'>
        <div className='flex flex-col gap-6 card py-14 px-10'>
            <div className='flex flex-row gap-2 justify-center'>
                <img src="/logo.svg" alt="logo" className='w-6 ' />
                <h1 className='text-primary-100 text-2xl font-bold'>RECRUT.IO</h1>
            </div>
            <h3>Practice job interviews with AI</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                    {!isSignIn && <FormField
                                    control={form.control}
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    label="Name"
                                />}
                    <FormField
                        control={form.control}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        label="Email"
                    />  
                    <FormField
                        control={form.control}
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        label="Password"
                    />  
                    <Button className='btn cursor-pointer' type="submit" >{isSignIn?'Sign in' :'Create account'}</Button>
                </form>
            </Form>
            <div className='flex flex-col items-center gap-2'>
                {isSignIn ? (
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-center text-sm text-gray-500'>Don't have an account? </p>
                        <Link href={'/sign-up'} className='text-primary-100 cursor-pointer text-center text-sm'>Sign up</Link>
                    </div>
                ) : (
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-center text-sm text-gray-500'>Already have an account? </p>
                        <Link href={'/sign-in'} className='text-primary-100 cursor-pointer text-center text-sm'>Sign in</Link>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default AuthForm




