'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input, Button } from '@nextui-org/react'

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="bg-white shadow-md max-w-screen-xl px-10 pt-12 pb-10 w-full flex flex-col gap-10 rounded-[2.25rem]">
        <div>
          <Image
            src="logo/logo-abbrvAsset 2.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl">Sign up</h1>
            <p className="mt-4">to continue to The Amazing Record Store</p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <form className="flex flex-col gap-4">
              <div className='flex flex-row gap-4'>
                <Input type="text" name='fName' label="First name" />
                <Input type="text" name='lName' label="Last name" />
              </div>
              <div className='flex flex-row gap-4'>
                <Input type="email" name='email' label="Email" />
                <Input type="text" name='phone' label="Phone number" />
              </div>
              <Input type="date" name='username' label="Date of Birth" />
              <Input type="text" name='username' label="Username" />
              <Input type="password" name='password' label="Password" />
            </form>
            <div className="flex flex-row ml-auto">
              <Link href="/">
                <Button radius="full" color="primary">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}