'use client'
import { useState, useEffect } from "react";
import Link from 'next/link'
import HSSlogo from '../../public/HSSHeader.png'
import Image from 'next/image'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Hand from '../../public/hand.png'
import Key from '../../public/HeaderKey.png'
import useMessages from '@/hook/useMessages'
import LanguageSelector from './LanguageSelector';
import Navigation from './Navigation';
import Alert from "./Alert";

const Header = ({alerts}: {alerts:Record<string, string>}) => {

  const messages = useMessages()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const responsible = () => {
      const isDesktop = window.innerWidth >= 1024
      if (isDesktop) {
        document.body.style.overflow = "";
        return
      }

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }

    responsible();

    window.addEventListener("resize", responsible);

    return () => {
      document.body.style.overflow = "";
      window.addEventListener("resize", responsible);
    }

  }, [isOpen])

  return (
    <>
      <header className="flex justify-between items-center py-2.5 px-7 bg-white text-primary border-b border-text-gray z-50 sticky top-0 lg:border-hidden lg:static lg:z-60">
        <Link href={messages?.path || "/sv"} className="md:hidden">
          <Image src={HSSlogo} alt='HSS-LOGO' className="w-11 h-10.5" />
        </Link>
        <Link href={messages?.path || "/sv"} className="hidden md:flex items-center">
          <div className="flex gap-2 items-center">
            <Image src={HSSlogo} alt='HSS-LOGO' className=" w-25 h-23.75" />
            <div className=" p-2.5 items-center text-xl/6 tracking-[1px]">
              <div className="font-normal font-fraunces">{messages?.header?.header_title}</div>
              <div className="font-bold font-fraunces">{messages?.header?.header_subtitle}</div>
            </div>
          </div>
        </Link>
        <div className='hidden lg:flex gap-6 text-primary font-semibold text-link-desktop tracking-[0.03em] '>
          <Alert alerts={alerts} locale={messages?.path} />
          <Link href={messages?.path + '/join/become-a-scout'} className="flex gap-2.5 items-center">
            <Image src={Hand} alt='HandLogo' className='h-7 w-auto' />
            <p className="font-albert tracking-[3%] leading-[100%] text-primary ">{messages?.header?.header_join}</p>
          </Link>
          <Link href="https://www.scoutnet.se/f/login" className="flex gap-2.5 items-center" target="_blank">
            <Image src={Key} alt='key' className='h-5.75 w-auto' />
            <p className="font-albert tracking-[3%] leading-[100%] text-primary  ">Scoutnet</p>
          </Link>
          <LanguageSelector />
          <Link href="https://www.scouterna.se/" target="_blank">
              <Image src="/scouternaSweLogo.svg" alt="scoutlogo" width={30} height={30} className="opacity-80 saturate-150" />
          </Link>
        </div>
        {isOpen ?
          <RxCross1 onClick={() => handleToggle()} className="size-5.75 lg:hidden" />
          :
          <RxHamburgerMenu onClick={() => handleToggle()} className="size-5.75 lg:hidden" />}
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 lg:hidden"></div>
      )}
      <div className={`fixed left-0 h-full w-full transition-all duration-300 ease-in-out z-30 overflow-y-auto ${!isOpen ? " -translate-y-full overflow-hidden" : ""}`}>
        <Navigation onClose={handleClose} />
      </div >
      <div className="hidden lg:block lg:z-50 lg:sticky lg:top-0">
        <Navigation onClose={handleClose} />
      </div>
    </>
  )
}

export default Header