"use client"

import { PortableText } from "next-sanity"
import CTABtn from "./CTA-button"

type textObjectType = {
  text_en_array:Record<string, string>
}

const SanityFlex = ({data, locale, color}: {data:any, locale:string, color:string, child?:boolean}) => {
  console.log(data)
  if(data) return (
    <div className="w-full">
      {data.map((section:any, index:number)=> {
        if(section._type === 'text_object') {
          return (<div key={index} className="w-full py-2">
            <PortableText components={{block: 
            {
              normal: ({children})=> <p className={`w-fit py-2 text-body md:text-body-desktop ${color === "black"? "text-text-black" : "text-text-white"} font-albert lg:max-w-[63%] mb-3`}>{children}</p>,
              h2: ({children})=> <h2 className={`w-fit py-2 text-h2 md:text-h2-desktop ${color === "black"? "text-primary" : "text-text-white"} font-fraunces font-bold`}>{children}</h2>,
              h3: ({children})=> <h3 className={`w-fit py-2 text-h3 md:text-h3-desktop ${color === "black"? "text-primary" : "text-text-white"} font-fraunces font-bold`}>{children}</h3>
            },
            list: {
              bullet: ({children})=> <ul className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%] mb-3 list-disc pl-5">{children}</ul>,
            }
          }}
            value={locale === "en" ? section.text_en_array : section.text_sv_array }/>
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
          <h2 className="w-fit py-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold">{}</h2>
          </div>)
        }
      })}
</div>
  )
}

export default SanityFlex