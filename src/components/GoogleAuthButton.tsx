'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GoogleIcon } from './ui/Icons'

export function GoogleAuthButton() {
  const supabase = createClientComponentClient()
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  return (
    <button
      type='button'
      className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
      onClick={handleSignIn}
    >
      <GoogleIcon className='w-5 h-5 mr-2' color='#ffffff' />
      Sign in with Google
    </button>
  )
}
