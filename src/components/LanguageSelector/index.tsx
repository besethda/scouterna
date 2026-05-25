'use client'
import { Globe } from "@deemlol/next-icons"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AiOutlineDown, AiOutlineUp, AiOutlineCheck } from "react-icons/ai";

export const languageList = [

  {
    language: "Swedish",
    languageCode: "sv",
  },
  {
    language: "English",
    languageCode: "en",
  },
]

type handleClickType = (event: React.MouseEvent<HTMLButtonElement>) => void

const LanguageSelector = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const pathname = usePathname()
  const router = useRouter()
  const selectValue = pathname.slice(1, 3)
  const changeClick: handleClickType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLang = e.currentTarget.value
    const currentLang = pathname.replace(/^\/(en|sv)/, `/${selectedLang}`)
    if (currentLang === pathname) return
    router.push(currentLang)
  }
  return (
    <>
      <div onClick={() => toggleDropdown()} className="flex items-center mt-0.5 gap-1 font-albert cursor-pointer " >
        <Globe color="#1F74AD" size={24} />
        {selectValue === "sv" ? (<p>SV</p>) : (<p>EN</p>)}
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {isOpen && (
        <div className="flex flex-col items-start justify-around origin-top-right absolute right-5 mt-8 w-38 h-25 p-4 gap-2 
        rounded-md shadow-xl bg-white z-100 lg:w-45 lg:mt-10 lg:shadow-2xl">
          {languageList.map((lang, index) => (
            <div key={index} className="flex w-full justify-between">
              <button onClick={changeClick} value={lang.languageCode} className="font-albert font-normal hover:text-accent">{lang.language}</button>
              {selectValue === lang.languageCode ? <AiOutlineCheck /> : ""}
            </div>
          ))}
        </div >
      )}
    </>
  )
}

export default LanguageSelector