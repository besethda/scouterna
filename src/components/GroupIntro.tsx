import Image from "next/image"

interface GroupIntroProps {
  headline: string,
  title: string,
  text: string,
  logo: string, 
}

const GroupIntro = ({ headline, title, text, logo }: GroupIntroProps) => {
  return (
    <div className="flex lg:max-w-430 lg:px-22 w-full flex-col px-4 gap-2 pt-5 pb-10 font-albert md:pt-12.5 md:px-25 md:pb-25">
      <div className="flex justify-between">
        <div className="">
          <p className="font-bold text-acc uppercase text-text-blue tracking-[1.5px] md:text-[16px]">
            {headline}
          </p>
          <p className="text-primary font-medium text-h1 tracking-[-0.5%] md:text-h1-desktop">
            {title}
          </p>
        </div>
        <div className={`flex items-center justify-center w-16 h-16 rounded-2xl -mt-2.5 md:w-35.5 md:h-35.5 md:mx-19.5` }>
        <Image src={logo} alt="logo" width={48} height={48} className="md:w-35.5 md:h-35.5"/>
        </div>
      </div>
      <p className="text-text-black text-[16px] font-normal tracking-[3%] md:text-[20px] md:max-w-2xl">
        {text}
      </p>

    </div>
  )
}

export default GroupIntro