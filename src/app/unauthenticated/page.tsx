import { Audiowide } from 'next/font/google'
import Image from 'next/image'
import mascot from '../../../public/images/mascot/mascot_notfound.svg'

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Horus53 :: Não autorizado',
  description: 'Não autorizado',
}

export default function UnauthenticatedPage() {
  return (
    <div className='flex justify-center flex-col gap-5 items-center'>
      <Image alt='logo' src={mascot} quality={100} width={180} />
      <h1 className={`${audiowide.className} text-5xl`}>
        Você não pode mexer aqui!
      </h1>
    </div>
  )
}
