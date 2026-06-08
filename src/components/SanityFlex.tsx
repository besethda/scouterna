"use client"

import { PortableText } from "next-sanity"
import CTABtn from "./CTA-button"

const SanityFlex = ({data, locale}: {data:any, locale:string}) => {

  console.log(data, locale)
  return (
    <div className="">
      {data.map((section:any, index:number)=> {
        if(section._type === 'text_object') {
          return (<div key={index} className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%]">
            <PortableText components={{block: {normal: ({children})=> <p className="mb-3">{children}</p>}}} 
            value={locale === "en" ? section.text_sv_array : section.text_sv_array }/>
        </div>)
        } if (section._type === 'button') {
          return (<div key={index} className="">
            <CTABtn onClick={section.link_list[0]._type === "link_object" ? 
            ()=> window.location.href = `/${locale}/${section.link_list[0].link}` : 
            section.link_list[0]._type === "url_object" ? ()=> window.open(`${section.link_list[0].external_url}, '_blank'`) :
            ()=> window.open(`${section.link_list[0].file}, '_blank'`)
            } 
            text={locale ==="sv" ? section.button_text_se : section.button_text_en}/>
          </div>)
        } else {
          return (<div key={index} className="">
          <h2 className="">{}</h2>
          </div>)
        }
      })}
</div>
  )
}

export default SanityFlex