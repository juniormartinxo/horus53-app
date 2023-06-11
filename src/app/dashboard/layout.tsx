import NavTop from '../components/nav-top'
import NavigationMenu from '../components/navigation-menu'
import '../globals.css'

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
    <main className='flex flex-col h-screen'>
      <NavTop />
      <div className='flex flex-wrap h-screen'>
        <NavigationMenu />
        <div id='container' className='flex-grow p-4'>
          {children}
        </div>
      </div>
    </main>
  )
}
