'use client'

import DivisionsBox from "@/components/DivisionsBox";
import useMessages from "@/hook/useMessages";
import Instagram from "@/components/Instagram";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="flex flex-col items-center">
      <div className="text-h2 md:text-h2-desktop text-primary mt-8 px-5 w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions}</div>
      <div className="px-5 text-body font-albert text-text-black w-full md:max-w-200 lg:max-w-400">{messages?.home.divisions_text}</div>
      <div className="flex flex-col md:flex-row my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"basic"} />
        <DivisionsBox division={"utmanare"} boxStyle={"basic"} />
        <DivisionsBox division={"konvojen"} boxStyle={"basic"} />
        <DivisionsBox division={"kaparna"} boxStyle={"basic"} />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"info"} />
        <DivisionsBox division={"utmanare"} boxStyle={"info"} />
        <DivisionsBox division={"konvojen"} boxStyle={"info"} />
        <DivisionsBox division={"kaparna"} boxStyle={"info"} />
      </div>
      <div className="flex flex-col items-center my-3 px-4 w-full md:max-w-200 lg:max-w-400">
        <DivisionsBox division={"sjohumlorna"} boxStyle={"image"} />
        <DivisionsBox division={"utmanare"} boxStyle={"image"} />
        <DivisionsBox division={"konvojen"} boxStyle={"image"} />
        <DivisionsBox division={"kaparna"} boxStyle={"image"} />
      </div>
      <Instagram infoText={true}/>
    </div>
  );
}

export default Home