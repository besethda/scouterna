'use client'
import { useState } from "react";
import Link from 'next/link'
import HSSlogo from '../../public/HSSHeader.png'
import Image from 'next/image'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Hand from '../../public/hand.png'
import Key from '../../public/HeaderKey.png'
import useMessages from '@/hook/useMessages'
import LanguageSelector from './LanguageSelector';
import Navigation from './Navigation';

const Header = () => {

  const messages = useMessages()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  console.log("isOpen", isOpen)

  return (
    <>
      <header className="flex justify-between items-center py-2.75 px-7 bg-white border-b border-text-gray lg:border-hidden">
        <Link href="/" className="md:hidden">
          <Image src={HSSlogo} alt='HSS-LOGO' className="w-11 h-10.5" />
        </Link>
        <Link href="/" className="hidden md:flex items-center">
          <div className="flex gap-2 items-center">
            <Image src={HSSlogo} alt='HSS-LOGO' className=" w-25 h-23.75" />
            <div className=" p-2.5 items-center text-xl/6 ">
              <div className="font-normal font-fraunces">{messages?.header?.header_title}</div>
              <div className="font-bold font-fraunces">{messages?.header?.header_subtitle}</div>
            </div>
          </div>
        </Link>
        <div className='hidden lg:flex gap-6 font-semibold text-link-desktop tracking-[0.03em]'>
          <Link href="" className="flex gap-2.5 items-center">
            <Image src={Hand} alt='HandLogo' className='h-8.25 w-auto' />
            <p className="font-albert tracking-[3%]">{messages?.header?.header_join}</p>
          </Link>
          <Link href="" className="flex gap-2.5 items-center">
            <Image src={Key} alt='key' className='h-5.75 w-auto' />
            <p className="font-albert tracking-[3%]">ScoutNet</p>
          </Link>
          <LanguageSelector />
        </div>
        {isOpen ?
          <RxCross1 onClick={() => handleToggle()} className="size-5.75 lg:hidden" />
          :
          <RxHamburgerMenu onClick={() => handleToggle()} className="size-5.75 lg:hidden" />}

      </header>
      <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <Navigation />
      </div >
    </>
  )
}

export default Header