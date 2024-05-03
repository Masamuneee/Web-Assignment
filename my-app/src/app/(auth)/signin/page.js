'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input, Button } from '@nextui-org/react'
import axios from 'axios'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post('http://localhost/test/auth/login.php', {
      username,
      password,
    })

    if (response.data.status === 'success') {
      alert("Login successful");
      router.push('/')
    } else {
      alert("Invalid username or password");
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
            <h1 className="text-5xl">Sign in</h1>
            <p className="mt-4">to continue to The Amazing Record Store</p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" />
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
              <div className="flex flex-row-reverse gap-4 ml-auto">
                <Button type="submit" radius="full" color="primary" size="lg">
                  Sign in
                </Button>
                <Link href="/signup">
                  <Button radius="full" variant='light' color="primary" size="lg">
                    Create account
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

  )
}