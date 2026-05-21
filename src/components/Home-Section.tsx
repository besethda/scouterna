import Image from "next/image";
import Placeholder from '../../public/images/DSCF3071.jpg'
import useMessages from "@/hook/useMessages";
import CTABtn from '../components/CTA-button'

const HomeSection = () => {

  const messages = useMessages()

  return (
    <>
      <section className="w-full py-10 px-4 md:hidden">
        <div className=" flex flex-col bg-primary p-8 rounded-2xl gap-6">
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
          <div className="flex justify-center">
          <CTABtn text={messages?.homePage?.button}  />
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-row p-25 gap-25 bg-(--bg-blue) min-h-110">
        <div className="relative flex-1 w-full min-w-73.5 max-w-100 min-h-60">
          <Image
            src={Placeholder}
            alt="image"
            fill
            className="object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col flex-1 max-w-150 gap-6">
          <div className="text-h2-desktop font-normal font-varela text-primary tracking-[-0.5%]">{messages?.homePage?.title}</div>
          <div className=" font-normal font-albert text-[18px] tracking-[3%] text-black">{messages?.homePage?.subtitle2}</div>
          <CTABtn text={messages?.homePage?.button} />
        </div>
      </section>
    </>
  )
}


export default HomeSection