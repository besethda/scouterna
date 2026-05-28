"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { menuList, mobileMenuList } from "./menuList";
import Link from "next/link";
import { AiOutlineDownCircle, AiFillUpCircle, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import useMessages from '@/hook/useMessages'
import LanguageSelector from "../LanguageSelector";

interface NavigationProps {
    onClose: () => void;
}

const Navigation = ({ onClose }: NavigationProps) => {
    const messages = useMessages()
    const [openId, setOpenId] = useState<number | null>(null)
    const [isScroll, setIsScroll] = useState<boolean>(false)

    const handleToggle = (id: number | null) => {
        setOpenId(openId === id ? null : id)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 200)
        }

        window.addEventListener("scroll", handleScroll)
        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [])

    return (
        <div className={`absolute lg:static w-full bg-white text-primary rounded-b-lg font-albert tracking-[0.03em] top-16 md:top-29 lg:bg-primary lg:h-25.5 lg:text-text-white lg:rounded-none ${isScroll ? "lg:bg-primary/80" : ""}`}>

            <div className="w-full lg:h-full lg:flex lg:justify-around lg:items-center lg:max-w-4xl lg:mx-auto xl:max-w-5xl 2xl:max-w-7xl">

                <div className="md:inline hidden pr-20 ">
                    <Link href="https://www.scouterna.se/">
                        <Image src="/SWEScoutLogo.svg" alt="scoutlogo" width={30} height={30} className="opacity-70" />
                    </Link>
                </div>

                <div className="bg-bg-blue flex justify-between text-base h-69px px-4 py-4 font-bold border-b border-lightGray lg:hidden items-center">
                    <div>
                        <Link href="https://www.scouterna.se/" >
                         <Image src="/blue-scoutLogo.svg" alt="scoutlogo" width={100} height={40} className="opacity-70 brightness-120" />
                        </Link>
                    </div>
                    <LanguageSelector /> 
                </div>

                {menuList.map((menu, index) => (
                    <div key={index}>
                        <div onClick={() => { handleToggle(menu.id); }}
                            className="flex justify-between text-base  h-69px px-3 py-4 font-semibold border-b border-lightGray cursor-pointer lg:font-normal lg:border-none lg:static lg:hover:text-gray-300">
                            <p> {messages?.navigation?.[menu.nameKey]} </p>
                            <div className="relative w-7 h-7 lg:hidden">
                                <AiOutlineDownCircle
                                    size={28}
                                    className={`absolute transform transition-transform duration-200 
                                            ${openId === menu.id ? "rotate-180 opacity-0" : "rotate-0  opacity-100"}`}
                                />
                                <AiFillUpCircle
                                    size={28}
                                    className={`lg:absolute transform transition-transform duration-200 
                                            ${openId === menu.id ? "rotate-180 opacity-100" : "rotate-0 opacity-0"}`}
                                />
                            </div>
                            <div className="hidden lg:block ">
                                <AiOutlineDown
                                    className={`lg:ml-2 lg:mt-1.25 transform  transition-transform duration-200
                                        ${openId === menu.id ? "rotate-180" : "rotate-0"}`} />
                            </div>

                        </div>
                        {openId === menu.id && (
                            <div onClick={() => { handleToggle(menu.id); onClose() }} className="px-4 py-4 border-b border-lightGray z-60 lg:absolute lg:py-0 lg:bg-white lg:text-primary lg:w-60 xl:w-85 lg:pt-0 lg:top-25.5 lg:border-none lg:shadow-md lg:rounded-b-2xl">
                                {menu.submenu && menu.submenu.map((sub, index) => (
                                    <Link href={messages?.path + sub.href} key={index} className="hover:text-text-gray">
                                        <div key={index} className={`py-4 flex lg:h-18.5 cursor-pointer lg:items-center ${index !== menu.submenu.length - 1 ? 'lg:border-b lg:border-lightGray' : ''}`}>
                                            <Image src={sub.iconBg} alt="image" width={44} height={44} className="w-11 h-auto" />
                                            <div className="px-4 flex items-center ">
                                                {messages?.navigation?.[sub.nameKey]}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="rounded-b-lg p-4 flex flex-col lg:h-18.5 lg:items-center lg:hidden">
                    <p className="text-text-black font-bold uppercase text-xs pb-3">{messages?.navigation?.nav__service}</p>
                    {mobileMenuList && mobileMenuList.map((menu, index) => (
                        <Link onClick={() => { handleToggle(null); onClose() }} key={index} href={menu.href} className="py-2 flex lg:h-18.5  w-full lg:items-center ">
                            <Image src={menu.icon} alt="image" width={44} height={44} className="w-11 h-auto" />
                            <div className="px-4 flex items-center">
                                {messages?.navigation?.[menu.nameKey]}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation