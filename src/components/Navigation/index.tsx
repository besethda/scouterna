"use client"
import { useState } from "react";
import Image from "next/image";
import { menuList, mobileMenuList } from "./menuList";
import Link from "next/link";
import { AiOutlineDownCircle, AiFillUpCircle, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import useMessages from '@/hook/useMessages'
import LanguageSelector from "../LanguageSelector";

const Navigation = () => {
    const messages = useMessages()
    const [openId, setOpenId] = useState<number | null>(null)

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="absolute lg:static w-full bg-white rounded-b-lg font-albert tracking-[0.03em] top-16 md:top-29 lg:bg-primary lg:h-25.5 lg:text-white lg:text-lg lg:rounded-none">
            <div className="w-full lg:h-full lg:flex lg:justify-around lg:items-center lg:max-w-3xl lg:mx-auto xl:max-w-5xl 2xl:max-w-7xl">
                <div className="bg-[#D6EAF8] flex justify-end text-base h-69px px-2 py-4 font-bold border-b border-lightGray lg:hidden">
                    <LanguageSelector />
                </div>
                {menuList.map((menu, index) => (
                    <div key={index}>
                        <div onClick={() => handleToggle(menu.id)}
                            className="flex justify-between text-base h-69px px-2 py-4 font-bold border-b border-lightGray cursor-pointer lg:font-normal lg:border-none lg:static">
                            <p> {messages?.navigation?.[menu.nameKey]} </p>

                            {openId === menu.id
                                ? (
                                    <>
                                        <AiFillUpCircle size={28} className="lg:hidden" />
                                        <AiOutlineUp size={16} className="hidden lg:block lg:ml-2 lg:mt-1.25" />

                                    </>
                                )
                                : (
                                    <>
                                        <AiOutlineDownCircle size={28} className="lg:hidden" />
                                        <AiOutlineDown className="hidden lg:block lg:ml-2 lg:mt-1.25" />
                                    </>
                                )
                            }
                        </div>
                        {openId === menu.id && (
                            <div onClick={() => handleToggle(menu.id)} className="px-2 py-4 border-b border-lightGray z-60 lg:absolute lg:py-0 lg:bg-white lg:text-black lg:w-60 xl:w-85 lg:pt-0  lg:top-54.75 lg:border-none">
                                {menu.submenu && menu.submenu.map((sub, index) => (
                                    <Link href={messages?.path + sub.href} className="">
                                        <div key={index} className={`py-4 flex lg:h-18.5 cursor-pointer lg:items-center ${index !== menu.submenu.length - 1 ? 'lg:border-b lg:border-lightGray' : ''}`}>
                                            <Image src={sub.icon} alt="image" width={44} height={44} className="w-11 h-auto" />
                                            <div className="px-4 flex items-center">
                                                {messages?.navigation?.[sub.nameKey]}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="rounded-b-lg  p-4 flex flex-col lg:h-18.5 lg:items-center lg:hidden">
                    <p className="text-black font-bold uppercase text-xs pb-3">{messages?.navigation?.nav__service}</p>
                    {mobileMenuList && mobileMenuList.map((menu, index) => (
                        <Link key={index} href={menu.href} className="py-2 flex lg:h-18.5  w-full lg:items-center ">
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