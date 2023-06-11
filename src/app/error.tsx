'use client' // Error components must be Client Components
import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import mascot from '../../public/images/mascot/mascot_notfound.svg'
import hexagon from '../../public/images/bg/hexagon.svg'
import styles from './styles.module.css'
import Link from 'next/link'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
            <span className={`text-9xl ${audiowide.className}`}>5</span>
            <Image
              alt='logo'
              src={mascot}
              quality={100}
              width={200}
              className='mt-14'
            />
            <span className={`text-9xl ${audiowide.className}`}>0</span>
          </div>
          <h1 className={`${audiowide.className} text-5xl my-5`}>
            Ops, algo deu errado!
          </h1>
          <div className='mb-5'>
            <p className='text-center'>
              Ocorreu um erro durante a execução da ação solicitada.
            </p>
          </div>
          <div>
            <p className='text-center'>
              <button
                className='bg-blue-800 p-4 rounded-md text-white text-sm'
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Tente outra vez
              </button>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
