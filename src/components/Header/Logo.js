import profileImg from "@/public/josegat.jpg"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light"> 
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-4">
            <Image src={profileImg} alt='Joseph Gateru' className='w-full h-auto rounded-full' />
        </div>
    </Link>
  )
}

export default Logo