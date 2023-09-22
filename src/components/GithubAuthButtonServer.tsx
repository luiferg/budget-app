import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { GithubAuthButtonClient } from '.'

export async function GithubAuthButtonServer() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return <GithubAuthButtonClient session={session} />
}
