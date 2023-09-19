import { getServerSession } from 'next-auth'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

import { Navbar, SessionProvider } from '@/components'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Healthy Finance',
  description: 'App for managing your finances',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang='en'>
      <body className={noto.className}>
        <SessionProvider session={session}>
          <Navbar />
          <main className='mx-auto max-w-screen-xl flex flex-col gap-5'>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
