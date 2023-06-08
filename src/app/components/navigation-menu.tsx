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

const NavigationMenu = () => {
  return (
    <div className='text-slate-400 w-full text-sm'>
      <ul className='mt-5'>
        <li>
          <Link
            href='/'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsFillHouseDoorFill /> Início
          </Link>
        </li>
        <li>
          <Link
            href='/users'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsFillPersonLinesFill /> Usuários
          </Link>
        </li>
        <li>
          <Link
            href='/cameras'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsFillCameraVideoFill /> Câmeras
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsBuildingFill /> Unidades
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsBuildingsFill /> Órgãos
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsFillBellFill /> Alertas
          </Link>
        </li>
        <li>
          <Link
            href='#'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsFillCameraFill /> Capturas
          </Link>
        </li>
        <li>
          <Link
            href='login'
            className='px-6 py-3 flex items-center gap-3 hover:text-gray-300  transition duration-700 hover:bg-sky-900'
          >
            <BsDoorOpenFill /> Sair
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationMenu
