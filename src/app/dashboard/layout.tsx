import { DashboardNavbar } from '@/components/dashboard'
import './styles.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Dashboard - HF',
  description: 'Generated by create next app',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <section
      className={`mx-auto max-w-screen-xl flex flex-col gap-5 ${noto.className}`}
    >
      <DashboardNavbar />
      {children}
    </section>
  )
}
