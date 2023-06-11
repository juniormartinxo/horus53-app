import { Poppins } from 'next/font/google'
import Favicon from './components/favicon'
import './globals.css'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
