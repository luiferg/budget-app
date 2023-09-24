import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Healthy Finances',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <html lang='en'>
      <body className={noto.className}>
        <main className='mx-auto max-w-screen-xl flex flex-col gap-5'>
          {children}
        </main>
      </body>
    </html>
  )
}
