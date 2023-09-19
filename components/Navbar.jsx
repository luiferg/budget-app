'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <span>{session.user.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
const Navbar = () => {
  return (
    <header>
      <nav>
        <AuthButton />
      </nav>
    </header>
  )
}

export default Navbar
