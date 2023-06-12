import { BsCameraVideo, BsImages } from 'react-icons/bs'
import { IoCarSportOutline } from 'react-icons/io5'
import { AiOutlineAlert } from 'react-icons/ai'
import NavTop from './components/nav-top'
import NavigationMenu from './components/navigation-menu'
import styles from './styles.module.css'

export default function HomePage() {
  return (
    <main className='flex flex-col h-screen bg-gray-100'>
      <NavTop />
      <div className='flex flex-wrap h-screen'>
        <NavigationMenu />
        <div id='container' className='flex-grow p-4'>
          <section className='flex flex-row'>
            <div className='flex flex-row'>
              <div className='flex flex-row flex-wrap gap-4'>
                <div className={styles.cardDashboard}>
                  <div className={styles.cardDashboardBody}>
                    <span className={styles.cardDashboardTitle}>
                      Câmeras instaladas
                    </span>
                    <span className={styles.cardDashboardValue}>53</span>
                  </div>
                  <span className={`${styles.cardDashboardIco} bg-blue-700`}>
                    <BsCameraVideo className='text-2xl text-white' />
                  </span>
                </div>

                <div className={styles.cardDashboard}>
                  <div className={styles.cardDashboardBody}>
                    <span className={styles.cardDashboardTitle}>
                      Veículos capturados <br />
                      <strong className='text-blue-500'>Junho</strong>
                    </span>
                    <span className={styles.cardDashboardValue}>53.530</span>
                  </div>
                  <span className={`${styles.cardDashboardIco} bg-amber-400`}>
                    <IoCarSportOutline className='text-2xl text-gray-800' />
                  </span>
                </div>

                <div className={styles.cardDashboard}>
                  <div className={styles.cardDashboardBody}>
                    <span className={styles.cardDashboardTitle}>
                      Alertas cadastrados <br />
                      <strong className='text-blue-500'>Junho</strong>
                    </span>
                    <span className={styles.cardDashboardValue}>530</span>
                  </div>
                  <span className={`${styles.cardDashboardIco} bg-rose-500`}>
                    <AiOutlineAlert className='text-2xl text-white' />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
