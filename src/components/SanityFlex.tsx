import { PortableText } from "next-sanity"

const SanityFlex = () => {
  return (
    <div className="">
    <div className="w-fit py-2 text-h2 md:text-h2-desktop text-primary font-albert font-medium">{locale === "se" ? data?.history_section.title_se : data?.history_section.title_en}</div>
    <div className="w-fit py-2 text-body md:text-body-desktop text-text-black font-albert lg:max-w-[63%]">
    <PortableText components={{block: {normal: ({children})=> <p className="mb-3">{children}</p>}}} 
    value={locale === "en" ? data?.history_layout.scout_life[0].text_en_array as any : data?.history_layout.scout_life[0].text_sv_array }/>
    </div>
</div>
  )
}