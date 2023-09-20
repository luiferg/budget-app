'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <header className='sticky top-0 py-8 backdrop-blur-md'>
      <nav className='mx-auto max-w-screen-xl flex flex-row justify-between items-center'>
        <Link href='/' className='text-5xl'>
          HF
        </Link>
        <div className='flex flex-row lg:gap-8 items-center'>
          {session?.user && <Link href='/dashboard'>Dashboard</Link>}
          <Link href='/about'>About</Link>
          {session?.user ? (
            <>
              <button
                className='ui-button'
                onClick={async () => {
                  await signOut()
                  router.push('/')
                }}
              >
                Log Out
              </button>
              <img
                src={session.user.image}
                alt={`${session.user.name} profile picture`}
                className='rounded-full h-10 w-10 border-2 border-gray-200'
              />
            </>
          ) : (
            <button className='ui-button' onClick={() => signIn()}>
              Log In
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
