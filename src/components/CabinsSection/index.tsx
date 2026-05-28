'use client'
import useMessages from "@/hook/useMessages"
import ContentSection from "../ContentSection"
import CTABtn from "../CTA-button"

const CabinsSection = () => {
  const messages = useMessages()
  return(
    <div>
      <div className="bg-bg-blue">
        <ContentSection sectionLayout={["t", "p"]} page="cabinsmyset" background="blue" />
        <div className="-mt-12.5 pl-4">
          <CTABtn text={messages?.mysetbtn}/>
        </div>
      </div>
      <div className="bg-bg-blue">
        <ContentSection sectionLayout={["t", "p"]} page="cabinsruffen" background="blue"/>
        <div className="-mt-12.5 pb-10 pl-4">
          <CTABtn text={messages?.ruffenbtn}/>
        </div>
      </div>
    </div>
  )
}

export default CabinsSection