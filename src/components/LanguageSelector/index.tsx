'use client'
import { Globe } from "@deemlol/next-icons"
import { usePathname, useRouter } from "next/navigation"



type handleClickType = (event: React.ChangeEvent<HTMLSelectElement>) => void

const LanguageSelector = () => {
  const pathname = usePathname()
  const router = useRouter()
  const selectValue = pathname.slice(1, 3)
  const changeClick: handleClickType = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectedLang = e.target.value
    const currentLang = pathname.replace(/^\/(en|sv)/, `/${selectedLang}`)
    if(currentLang === pathname) return 
    router.push(currentLang)
  }
  return(
    <div className="flex items-center mt-2" >
      <Globe className="text-lightBlue" size={18}/>
      <select name="choice" id="choice" className="outline-0 text-lg" onChange={changeClick} value={selectValue}>
        <option value="en">EN</option>
        <option value="sv">SV</option>
      </select>
    </div>
  )
}

export default LanguageSelector