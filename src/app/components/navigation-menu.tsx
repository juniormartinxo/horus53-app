'use client'
import Link from 'next/link'
import {
  BsFillPersonLinesFill,
  BsFillCameraVideoFill,
  BsDoorOpenFill,
  BsBuildingFill,
  BsBuildingsFill,
  BsFillBellFill,
  BsFillCameraFill,
  BsFillHouseDoorFill,
} from 'react-icons/bs'

import styles from '../styles.module.css'

const NavigationMenu = () => {
  const menuActive = (path: string) => {
    return path === window.location.pathname ? 'bg-blue-500' : ''
  }
  const menuActiveText = (path: string) => {
    return path === window.location.pathname ? 'text-white' : ''
  }

  const path = window.location.pathname

  return (
    <div id='menu' className='w-[251px] bg-white border-r border-slate-200'>
      <div className='text-slate-500 w-full text-sm flex flex-col justify-between content-between h-full'>
        <ul className='mt-5 flex flex-col'>
          <div className='mb-12'>
            <h3 className='flex gap-2 pl-4 text-lg items-center text-blue-700 mb-3'>
              <BsFillHouseDoorFill /> Painel de controle
            </h3>
            <li className={styles.menuItem}>
              <Link href='/'>
                <span>Home</span>
              </Link>
            </li>
            <li
              className={
                path === window.location.pathname
                  ? styles.menuItemActive
                  : styles.menuItem
              }
            >
              <Link href='/dashboard/users'>
                <span>Usuários</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href='/dashboard/cameras'>
                <span>Câmeras</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href='#'>
                <span>Unidades</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href='#'>
                <span>Órgãos</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href='#'>
                <span>Alertas</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href='#'>
                <span>Capturas</span>
              </Link>
            </li>
          </div>
        </ul>
        <div className=''>
          <Link
            href='login'
            className='pl-3 py-3 flex text-base items-center gap-3 hover:bg-red-500  transition duration-700 bg-blue-800 text-white'
          >
            <BsDoorOpenFill /> Sair
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu
