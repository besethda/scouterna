"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import scautLogo from '../../public/scouterna-logo.svg'
import emailIcon from '../../public/email-icon.svg'
import instagramIcon from '../../public/instagram-icon.svg'
import keyIcon from '../../public/key-icon.svg'
import bagIcon from '../../public/bag-icon.png'
import schoolIcon from '../../public/book-icon.svg'
import footerHSSIcon from '../../public/footer-hss-logo.png'
import locationIcon from '../../public/yellow-location.svg'
import useMessages from '@/hook/useMessages'
import MapWrapper from './Map/MapWrapper'
import { Facebook } from "@deemlol/next-icons"


const Footer = () => {

    const messages = useMessages()
    const searchPath = usePathname()
    const hidePath = ["/ruffen", "/myset"]
    const checkHide = hidePath.some(path => searchPath.includes(path))

    return (
        <footer className="bg-primary text-white py-6 px-5 flex flex-col gap-4 xl:py-20 xl:px-2.5 xl:gap-16.5 ">
            <div className='flex flex-col gap-2.5 lg:flex-row lg:justify-around lg:w-full xl:w-[90%] lg:mx-auto lg:max-w-360 w-90'>
                <div className='lg:flex-1'>
                    <Link href="https://www.scouterna.se/" aria-label="Gå till scouternas officiella hemsida">
                        <Image src={scautLogo} alt=""  className='w-32.5 h-7 xl:h-[28] -ml-1.5' />
                    </Link>
                    <div className='pt-3'>
                        <p className="text-body lg:hidden">Hässelby Strands Sjöscouter</p>
                    </div>
                </div>
                <div className='lg:flex lg:flex-col gap-5 hidden lg:flex-1 '>
                    <p className="text-accent text-body-bold mb-2 uppercase text-xs lg:text-sm">{messages?.footer?.footer_service}</p>
                    <div className='flex gap-2.5 leading-none items-center'>
                        <Image src={schoolIcon} alt="" className='w-4 h-4 scale-[1.5] xl:scale-[1] xl:w-5 xl:h-7 items-center shrink-0 object-contain' />
                        <Link href="https://www.scouternasfolkhogskola.se/" target='_blank' className="hover:text-lightYellow text-body-desktop lg:text-lg" aria-label="Gå till Scouternas Folkhögskola">{messages?.footer?.footer_school}</Link>
                    </div>
                    <div className='flex gap-2.5 leading-none items-center'>
                        <Image src={bagIcon} alt="" className='w-4 h-4 xl:w-5 xl:h-6' />
                        <Link href="https://www.scoutshop.se/" target='_blank' className="hover:text-lightYellow text-body-desktop lg:text-lg" aria-label="Gå till scoutshopen">{messages?.footer?.footer_shop}</Link>
                    </div>
                    <div className='flex gap-2.5 leading-none items-center'>
                        <Image src={keyIcon} alt="" className='w-4 h-4 xl:w-5.5 xl:h-5.5' />
                        <Link href="https://www.scoutnet.se/f/login" target='_blank' className="hover:text-lightYellow text-body-desktop lg:text-lg " aria-label="Logga in på scoutnet">Scoutnet</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2 lg:gap-7 pb-2 lg:flex-1'>
                    <p className="text-accent text-body-bold uppercase text-xs lg:text-sm">{messages?.footer?.footer_contact}</p>
                    <div className='flex gap-2.5 leading-none'>
                        <a href="mailto:info@hss-scout.org" className='flex gap-2.5 leading-none hover:text-lightYellow' aria-label="Skicka mail till info@hss-scout.org">
                            <Image src={emailIcon} alt="" className='w-4 h-auto xl:w-5' />
                            <p className="lg:text-lg text-body">info@hss-scout.org</p>
                        </a>
                    </div>
                    <div className='hidden lg:flex gap-2.5 leading-[1.2]' >
                        <a href="https://www.google.com/maps/place/Ruffen+%7C+H%C3%A4sselby+Strands+Sj%C3%B6scoutk%C3%A5r/@59.3620719,17.7818116,13z/data=!4m6!3m5!1s0x465f9f000adaa135:0xf7c26dadb80cbb2f!8m2!3d59.3632201!4d17.8220044!16s%2Fg%2F11y8fdsts1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUyNi4wIKXMDSoASAFQAw%3D%3D" aria-label="Visa scoutstugan Ruffen i google maps" target='_blank' className='flex gap-2.5 leading-[1.2] hover:text-lightYellow'>
                            <Image src={locationIcon} alt="" className='md:lg:w-4 lg:w-5.5 lg:h-5.5 xl:w-5.25' />
                            <p className="text-body lg:text-lg">Hässelby strandväg<br />165 73 Hässelby</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-2 lg:gap-7 lg:flex-1'>
                    <p className="text-accent text-body-bold uppercase  text-xs lg:text-sm">{messages?.footer?.footer_followUs}</p>
                    <div className='flex gap-2.5 leading-none'>
                        <a href="https://www.instagram.com/hss_scout/" target='_blank' className='flex gap-2.5 leading-[1.2] hover:text-lightYellow' aria-label="Följ oss på Instagram">
                            <Image src={instagramIcon} alt='instagram icon' className='w-4 h-auto xl:w-5' aria-hidden="true" />
                            <p className="text-body lg:text-lg">@hss_scout</p>
                        </a>
                    </div>
                    <div className='flex gap-2.5 leading-none'>
                        <a href="https://www.facebook.com/HSSScout/" target='_blank' className='flex gap-2.5 leading-[1.2] hover:text-lightYellow' aria-label="Följ oss på Facebook">

                            <Facebook color="#FDB715" className="w-4 h-auto xl:w-5 scale-[1.25]" aria-hidden="true" />
                            <p className="text-body lg:text-lg">@HSSScout</p>
                        </a>
                    </div>
                </div>
            </div>
            {!checkHide &&
                <div className='w-full flex justify-center'>
                    <div className='w-full max-w-6xl'>
                        <MapWrapper page="footer" />
                    </div>
                </div>
            }
            <div className="w-full border-t border-gray flex text-lightGray text-body-bold pt-4 font-normal xl:justify-between xl:w-[90%] xl:mx-auto leading-loose">
                <div className='flex gap-3'>
                    <Image src={footerHSSIcon} alt='HSS icon' className='w-6 h-6' />
                    <p>© 2026 HSS Hässelby Strands Sjöscouter</p>
                </div>
                <p className='hidden xl:block'>Stockholm · Sverige</p>
            </div>
        </footer>
    )
}

export default Footer