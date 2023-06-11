import NavigationMenu from './components/navigation-menu'
import NavTop from './components/nav-top'

export default function HomePage() {
  return (
    <main className='flex flex-col h-screen'>
      <NavTop />
      <div className='flex flex-wrap h-screen'>
        <NavigationMenu />
        <div id='container' className='flex-grow p-4'>
          <h1>Página inicial</h1>
        </div>
      </div>
    </main>
  )
}
