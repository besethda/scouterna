'use client'

import useMessages from "@/hook/useMessages"


interface stringObject {
  image: string
  alt:string
}

const Activities = () => {
  const messages = useMessages()
  return (
    <div className="flex flex-col items-center bg-bg-white px-4 py-8 mx-4 mb-10 rounded-3xl max-w-[980px] lg:mx-auto lg:px-10">
      <div className=" w-full flex flex-col ">
        <div className="flex flex-col gap-6 max-w-[603px]">
          <h2 className="text-primary md:text-h2-desktop font-fraunces font-bold text-h2-albert">{messages?.activity.title}</h2>
          <div>
            <h3 className="text-primary md:text-h3-desktop font-fraunces font-bold text-h3">{messages?.activity.sub_title_one}</h3>
            <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_one}</p>
          </div>
          <div>
            <h3 className="text-primary md:text-h3-desktop font-fraunces font-bold text-h3">{messages?.activity.sub_title_two}</h3>
            <p className="text-text-black text-body font-albert md:text-body-desktop">{messages?.activity.p_two}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Activities