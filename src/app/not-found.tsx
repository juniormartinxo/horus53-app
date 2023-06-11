import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import mascot from '../../public/images/mascot/mascot_notfound.svg'
import hexagon from '../../public/images/bg/hexagon.svg'
import styles from './styles.module.css'
import Link from 'next/link'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

export default function NotFoundPage() {
  return (
    <main className={`flex min-h-screen justify-between w-full`}>
      <div className={styles.bgWrap}>
        <Image
          alt='hexagon'
          src={hexagon}
          quality={100}
          fill
          sizes='100vw'
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className='flex justify-center flex-col gap-5 w-full'>
        <div className='flex flex-col gap-2 items-center bg-slate-200 w-full pb-14'>
          <div className='flex flex-row gap-4 items-center justify-center'>
            <span className={`text-9xl ${audiowide.className}`}>4</span>
            <Image
              alt='logo'
              src={mascot}
              quality={100}
              width={200}
              className='mt-14'
            />
            <span className={`text-9xl ${audiowide.className}`}>4</span>
          </div>
          <h1 className={`${audiowide.className} text-5xl my-5`}>
            Página não encontrada!
          </h1>
          <div className='mb-5'>
            <p className='text-center'>
              A página que você está procurando não existe ou foi removida.
            </p>
          </div>
          <div>
            <p className='text-center'>
              <Link
                href='/'
                className='bg-blue-800 p-4 rounded-md text-white text-sm'
              >
                Voltar para a página inicial
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
