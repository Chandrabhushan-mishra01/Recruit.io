import React from 'react'
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

function AuthFormField({control,name,placeholder,type,label}) {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            </FormItem>
        )}
    />
  )
}

export default AuthFormField