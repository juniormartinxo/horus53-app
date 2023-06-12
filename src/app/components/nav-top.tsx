import Image from 'next/image'
import logo from '../../../public/images/logo/horus53_logo_horizontal.svg'
import jm from '../../../public/images/avatars/jm.jpg'

const NavTop = () => {
  return (
    <div className='h-16  flex items-center z-50 justify-between bg-white border-b border-b-gray-100 shadow-md'>
      <div className='h-16 flex items-center z-50 justify-between border-r border-r-gray-100 '>
        <div className='w-[250px] flex justify-center '>
          <Image alt='logo' src={logo} quality={100} width={180} />
        </div>
      </div>

      <div className='w-full h-full flex flex-row justify-between items-center'>
        <div className='px-4'>
          <label className='btn btn-circle swap swap-rotate'>
            <input type='checkbox' />
            <svg
              className='swap-off fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
            <svg
              className='swap-on fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          </label>
        </div>
        <div className='flex flex-row gap-2 px-4'>
          <div className='avatar'>
            <div className='w-11 mask mask-hexagon'>
              <Image
                alt='Junior Martins'
                src={jm}
                quality={100}
                fill
                sizes='80'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-base'>Junior Martins</span>
            <span className='text-xs text-slate-300'>Desenvolvedor</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavTop
