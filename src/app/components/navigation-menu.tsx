'use client'
import Link from 'next/link'
import { BsDoorOpenFill, BsFillHouseDoorFill } from 'react-icons/bs'

import styles from '../styles.module.css'
import { use, useEffect, useState } from 'react'

const NavigationMenu = () => {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  const handleMenu = () => {
    setPath(window.location.pathname)
  }

  const menus = {
    0: ['/', 'Home'],
    1: ['/dashboard/users', 'Usuários'],
    2: ['/dashboard/cameras', 'Câmeras'],
    /*3: ['/dashboard/units', 'Unidades'],
    4: ['/dashboard/organs', 'Órgãos'],
    5: ['/dashboard/alerts', 'Alertas'],
    6: ['/dashboard/captures', 'Capturas'],*/
  }

  console.log('path', path, window.location.pathname)

  return (
    <div id='menu' className='w-[251px] bg-white border-r border-slate-200'>
      <div className='text-slate-500 w-full text-sm flex flex-col justify-between content-between h-full'>
        <ul className='mt-5 flex flex-col'>
          <div className='mb-12'>
            <h3 className='flex gap-2 pl-4 text-lg items-center text-blue-700 mb-3'>
              <BsFillHouseDoorFill /> Painel de controle
            </h3>
            <ul>
              {Object.entries(menus).map(([key, value]) => (
                <li
                  key={key}
                  className={
                    value[0] === path ? styles.menuItemActive : styles.menuItem
                  }
                  onClick={handleMenu}
                >
                  <Link href={value[0]}>
                    <span>{value[1]}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
