'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function AuthButtonClient({ session }) {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      {session === null ? (
        <button
          className='rounded-lg px-3 py-1 border-2 border-emerald-400 text-emerald-400 lg:hover:bg-emerald-400 lg:hover:text-neutral-900 lg:hover:scale-95 transition-all duration-100'
          onClick={handleSignIn}
        >
          Sign In
        </button>
      ) : (
        <button
          className='inline-block rounded-lg px-3 py-1 border-2 bg-red-500 border-red-500 lg:hover:bg-transparent lg:hover:text-red-500 lg:hover:scale-95 transition-all duration-100'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </>
  )
}
