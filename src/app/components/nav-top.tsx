import Image from 'next/image'
import logo from '../../../public/images/logo/horus53_logo_horizontal.svg'

const NavTop = () => {
  return (
    <div className='h-16 shadow-md flex items-center z-50'>
      <div className='w-[250px] flex border-r border-r-gray-200 justify-center '>
        <Image alt='logo' src={logo} quality={100} width={180} />
      </div>
    </div>
  )
}

export default NavTop
