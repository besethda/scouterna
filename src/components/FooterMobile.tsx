import Link from 'next/link'
import Image from 'next/image'
import scautLogo from '../../public/scauterna-logo.png'
import emailIcon from '../../public/email-lcon.png'
import instagramIcon from '../../public/instagram-icon.png'
import keyIcon from '../../public/key-icon.png'
import bagIcon from '../../public/bag-icon.png'
import schoolIcon from '../../public/school-icon.png'
import footerHSSIcon from '../../public/footer-hss-logo.png'

const FooterMobile = () => {
    return (
        <footer className="bg-primary text-white py-6 px-5 flex flex-col gap-4 xl:py-20 xl:px-2.5 xl:gap-16.5">
            <div className='xl:flex xl:flex-row  xl:w-[90%] xl:mx-auto flex flex-col gap-2.5 xl:gap-60'>
                <Image src={scautLogo} alt="Scaut-logo" className='w-[130] h-[auto] xl:h-[28]'/>
                <p className="text-body xl:hidden">Hässelby Strands Sjöscoutkår</p>
                <div className='xl:flex  xl:justify-between gap-30'>
                    <div className='xl:flex xl:flex-col gap-3 hidden'>
                        <p  className="text-accent text-footer-bold">Scouternas tjänster</p>
                        <div className='flex gap-2.5 leading-none'>
                            <Image src={schoolIcon} alt='school icon' className='w-4 h-4 xl:w-5 xl:h-7' />
                            <p className="text-body xl:text-h3">Scouternas Folkhögskola</p>
                        </div>
                        <div className='flex gap-2.5 leading-none'>
                            <Image src={bagIcon} alt='bag icon' className='w-4 h-4 xl:w-5 xl:h-6' />
                            <p className="text-body xl:text-h3">Scoutshop</p>
                        </div>
                        <div className='flex gap-2.5 leading-none'>
                            <Image src={keyIcon} alt='key icon' className='w-4 h-4 xl:w-5.5 xl:h-5.5' />
                            <p className="text-body xl:text-h3">Scoutnet</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 pb-5'>
                        <p  className="text-accent text-footer-bold">KONTAKT</p>
                        <a href="mailto:info@hss-scout.org" className='flex gap-2.5 leading-none'>
                            <Image src={emailIcon} alt='email icon' className='w-4 h-auto xl:w-5' />
                            <p className="text-body xl:text-h3">info@hss-scout.org</p>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className="text-accent text-footer-bold">FÖLJ OSS</p>
                        <a href="https://www.instagram.com/hss_scout/" target='_blank' className='flex gap-2.5 leading-none'>
                            <Image src={instagramIcon} alt='instagram icon' className='w-4 h-auto xl:w-5' />
                            <p className="text-body xl:text-h3">@hss_scout</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-gray flex text-lightGray text-footer-bold pt-4 font-normal xl:justify-between  xl:w-[90%] xl:mx-auto leading-loose">
                <div className='flex gap-3'>
                    <Image src={footerHSSIcon} alt='HSS icon' className='w-6 h-6'/>
                    <p>© 2026 HSS Hässelby Strands Sjöscoutkår</p>
                </div>
                <p className='hidden xl:block'>Stockholm · Sverige</p>
            </div>
        </footer>
    )
}

export default FooterMobile