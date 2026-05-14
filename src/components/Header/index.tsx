import Link from 'next/link'
import HSSlogo from '../../../public/HSSicon.png'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5"; // X icon for hamburger
import Scout from '../../../public/Scouticon.png'
import Key from '../../../public/KeyIcon.png'
import SVG from '../../../public/SVG.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2.75 px-7">
      <Link href="/" className="md:hidden">
        <Image src={HSSlogo} alt='HSS-LOGO' className="w-11 h-10.5" />
      </Link>
      <Link href="/" className="hidden md:flex items-center">
        <div className="flex gap-2 items-center">
          <Image src={HSSlogo} alt='HSS-LOGO' className=" w-25 h-23.75" />
          <div className=" p-2.5 items-center text-xl/6 ">
            <div className="font-normal ">Hässelby Strands</div>
            <div className="font-bold ">Sjöscouter</div>
          </div>
        </div>
      </Link>
      <div className='hidden md:flex gap-6 font-semibold text-lg  tracking-[0.03em]'>
        <Link href="" className="flex gap-2.5 items-center">
          <Image src={Scout} alt='scoutLogo' className='h-8.25' />
          <p>Bli Scout</p>
        </Link>
        <Link href="" className="flex gap-2.5 items-center">
          <Image src={Key} alt='key' className='h-5.75' />
          <p>ScoutNet</p>
        </Link>
        <Link href="" className="flex gap-2.5 items-center">
          <Image src={SVG} alt='language' className='h-6' />
          <p>SV</p>
        </Link>
      </div>
      <RxHamburgerMenu className="size-5.75 md:hidden" />

    </header>
  )
}

export default Header
