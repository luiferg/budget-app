import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Healthy Finance',
  description: 'App for managing your finances',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={noto.className}>{children}</body>
    </html>
  )
}
