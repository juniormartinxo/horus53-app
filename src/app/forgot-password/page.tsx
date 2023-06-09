import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import hexagon from '../../../public/images/bg/hexagon.svg'
import styles from '../styles.module.css'
import Link from 'next/link'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Horus53 :: Login',
  description: 'Login do Horus53',
}

export default function Login() {
  return (
    <main className='flex flex-col min-h-screen justify-center'>
      <div className={styles.bgWrap}>
        <Image
          alt='hexagon'
          src={hexagon}
          //placeholder='blur'
          quality={100}
          fill
          sizes='100vw'
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <section className='flex flex-col w-full justify-center justify-items-stretch align-middle items-center'>
        <div className='flex justify-center self-center z-10'>
          <div className='p-12 bg-white mx-auto rounded-md w-96 '>
            <div className='mb-7'>
              <h3
                className={`font-black text-4xl text-gray-800 text-center ${audiowide.className}`}
              >
                HORUS<span className='text-blue-700'>53</span>
              </h3>
            </div>

            <div className='space-y-6'>
              <div className='flex flex-col gap-2'>
                <p className='text-gray-400'>Digite seu e-mail</p>
                <input
                  className='w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-blue-400'
                  type=''
                  placeholder='Email'
                />
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center bg-blue-800  hover:bg-blue-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500'
                >
                  Enviar
                </button>
              </div>

              <div className='flex items-center justify-between'>
                <div className='text-sm ml-auto'>
                  <Link
                    href='login'
                    className='text-blue-700 hover:text-blue-600'
                  >
                    Voltar ao login
                  </Link>
                </div>
              </div>

              <div className='flex items-center justify-center space-x-2 my-5'>
                <span className='h-px w-16 bg-gray-100'></span>
                <span className='h-px w-16 bg-gray-100'></span>
                <span className='h-px w-16 bg-gray-100'></span>
              </div>

              <div className='flex justify-center gap-5 w-full'></div>
            </div>

            <div className='mt-7 text-center text-gray-300 text-xs'>
              <span>
                Desenvolvido por{' '}
                <a
                  href='https://juniormartins.dev'
                  rel=''
                  target='_blank'
                  title='Junior Martins :: Dev'
                  className='text-blue-500 hover:text-blue-600 '
                >
                  Junior Martins
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
