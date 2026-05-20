'use client'

import DivisionsBox from "@/components/DivisionsBox";
import useMessages from "@/hook/useMessages";
import Instagram from "@/components/Instagram";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <DivisionsBox division={"kaparna"} imageUrl={"/images/IMG_1943.JPEG"} boxStyle={"basic"} />
      <DivisionsBox division={"utmanare"} imageUrl={"/images/IMG_5129.JPG"} boxStyle={"basic"} />
      <DivisionsBox division={"konvojen"} imageUrl={"/images/IMG_8213.JPG"} boxStyle={"basic"} />
      <DivisionsBox division={"sjohumlorna"} imageUrl={"/images/IMG_9863.JPEG"} boxStyle={"basic"} />
      <Instagram infoText={true}/>
    </div>
  );
}

export default Home