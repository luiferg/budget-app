import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: pockets } = await supabase.from('pockets').select('*')
  return (
    <div>
      HomePage
      <pre>{JSON.stringify(pockets, null, 2)}</pre>
    </div>
  )
}
