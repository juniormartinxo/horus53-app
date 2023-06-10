import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import mascot from '../../public/images/mascot/mascot_notfound.svg'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

export default function NotFound() {
  return (
    <div className='flex justify-center flex-col gap-5 items-center'>
      <Image alt='logo' src={mascot} quality={100} width={180} />
      <h1 className={`${audiowide.className} text-5xl`}>Não tem nada aqui!</h1>
    </div>
  )
}
