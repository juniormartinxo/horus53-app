import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Favicon from './components/favicon'
import NavigationMenu from './components/navigation-menu'
import NavTop from './components/nav-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Horus53 App',
  description: 'Dashboard for Horus53',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <Favicon />
      <body className={inter.className}>
        <main className='flex flex-col h-screen'>
          <NavTop />
          <div className='flex flex-wrap h-screen'>
            <div id='menu' className='w-[250px] bg-slate-600 shadow-r-sm'>
              <NavigationMenu />
            </div>
            <div id='container' className='flex-grow p-4'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
