"use client"
import { useState } from "react";
import Image from "next/image";
import { menuList } from "./menuList";
import Link from "next/link";
import { AiOutlineDownCircle, AiFillUpCircle, AiOutlineDown } from "react-icons/ai";

const Navigation = () => {
    const [openId, setOpenId] = useState<number | null>(null)

    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className="bg-white rounded-b-lg font-albert tracking-[0.03em] lg:bg-primary lg:h-25.5 lg:text-white lg:text-lg lg:flex lg:justify-around lg:items-center lg:rounded-none">
            {menuList.map((menu, index) => (
                <div key={index}>
                    <div onClick={() => handleToggle(menu.id)}
                        className="flex justify-between text-base h-69px px-2 py-4 font-bold border-b border-lightGray lg:font-normal lg:border-none lg:static">
                        <p> {menu.name} </p>
                        <AiOutlineDownCircle size={28} className="lg:hidden" />
                        <AiOutlineDown size={16} className="hidden lg:block lg:ml-2 lg:mt-1.5" />
                    </div>
                    {openId === menu.id && (
                        <div onClick={() => handleToggle(menu.id)} className="px-2 py-4 pt-10 border-b border-lightGray lg:bg-white lg:text-black lg:w-87.5 lg:pt-0 lg:absolute lg:top-25.5 lg:border-none">
                            <div className="flex justify-between py-4 lg:hidden">
                                <p className="font-bold">{menu.name}</p>
                                <AiFillUpCircle size={28} />
                            </div>
                            {menu.submenu && menu.submenu.map((sub, index) => (
                                <div key={index} className="py-4 flex lg:h-18.5  lg:items-center lg:border-b lg:border-lightGray">
                                    <Image src={sub.icon} alt="image" width={44} height={44} className="w-11 h-auto" />
                                    <div className="px-4 flex items-center">
                                        <Link href={sub.href} className=""> {sub.name} </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div>
                {/* Search bar */}
            </div>
        </div>
    );
}

export default Navigation