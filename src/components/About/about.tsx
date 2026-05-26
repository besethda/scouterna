import Image from 'next/image'
import { StaticImageData } from 'next/image';

type aboutType = {
  icon:string | StaticImageData,
  mobileIcon:string | StaticImageData,
  title:string,
  mobileTitle:string,
  sub_title:string,
  content:string,
  image:string | StaticImageData,
}

const About = ({icon, title, sub_title, content, image, mobileIcon, mobileTitle}:aboutType) => {
  return(
  <div className="flex gap-8 pt-12.5 pl-4 pr-4 lg:pl-43 lg:pr-25 pb-25 font-albert text-lg">
    <div className="pb-4 w-full lg:w-2xl">
      <span className='text-sm text-text-blue hidden md:block'>{title}</span>
      <span className='text-sm text-text-blue block md:hidden'>{mobileTitle}</span>
      <div className='flex items-center gap-2'>
        <span className='text-primary font-bold text-3xl'>{sub_title}</span>
        <Image src={icon} alt='heart icon' className='w-6 h-6 xl:w-5 xl:h-6 hidden md:block' />
        <Image src={mobileIcon} alt='heart icon' className='w-6 h-6 block md:hidden'/>
      </div>
      <p className='text-text-gray'>{content}</p>
    </div>
    <Image className="hidden lg:block rounded-xl mt-1" src={image} alt='' height={240} width={400}></Image>
  </div>
  )
}

export default About