import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import News from '@/components/News'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Futebol Info',
  description: 'Soccer Matches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='px-2 md:px-16 md:py-2 text-textPrimary'>
          <Navbar />
          <section className='flex space-x-4'>
            <Sidebar />
            {children}
            <News />
          </section>
        </main>
      </body>
    </html>
  )
}
