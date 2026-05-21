import Image from "next/image";
import Placeholder from '../../public/images/DSCF3071.jpg'
import useMessages from "@/hook/useMessages";
import CTABtn from '../components/CTA-button'

const HomeSection = () => {

  const messages = useMessages()

  return (
    <>
      <section className="w-full py-10 px-4 md:hidden lg:max-w-380">
        <div className="flex flex-col bg-primary p-8 rounded-2xl gap-6">
          <div className="flex flex-col min-w-73.5 min-h-22.75 gap-2 font-normal text-white">
            <p className="font-varela text-h2 tracking-[-0.5%]">{messages?.homePage?.title}</p>
            <p className="font-albert text-[16px] tracking-[3%] leading-[100%] ">{messages?.homePage?.subtitle}</p>
          </div>
          <div className="relative min-w-73.5 min-h-64.25">
            <Image
              src={Placeholder}
              alt="image"
              fill
              className=" bg-white rounded-2xl object-cover " />
          </div>
          <div>
          <CTABtn text={messages?.homePage?.button} width="full"/>
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-row px-22 py-10 gap-25 bg-(--bg-blue) min-h-110 lg:max-w-430">
        <div className="relative aspect-video max-w-100 max-h-60">
          <Image
            src={Placeholder}
            alt="image"
            fill
            className="rounded-2xl object-cover" />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="text-h2-desktop font-normal font-varela text-primary tracking-[-0.5%]">{messages?.homePage?.title}</div>
          <div className=" font-normal font-albert text-[18px] tracking-[3%] text-black">{messages?.homePage?.subtitle2}</div>
          <CTABtn text={messages?.homePage?.button} />
        </div>
      </section>
    </>
  )
}


export default HomeSection