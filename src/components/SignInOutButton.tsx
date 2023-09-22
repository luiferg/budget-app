'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const SignInOutButton = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      className='inline-block rounded-lg px-3 py-1 border-2 bg-red-500 border-red-500 lg:hover:bg-transparent lg:hover:text-red-500 lg:hover:scale-95 transition-all duration-100'
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  )
}

export default SignInOutButton
