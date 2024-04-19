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
    <main className="log-in min-h-screen flex justify-center items-center">
      <div className="bg-white log-in-wrapper shadow-2xl max-w-screen-xl px-10 pt-12 pb-10 w-full flex flex-col gap-10 rounded-[2.25rem]">
        <div>
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl">Sign in</h1>
            <p className="mt-4">to continue to Shopify!</p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Input size="lg" type="email" label="Email or phone" />
              <Input size="lg" type="password" label="Password" />
            </div>
            <div className="flex flex-row ml-auto">
              <Link href="/">
                <Button radius="full" color="primary" size="lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}