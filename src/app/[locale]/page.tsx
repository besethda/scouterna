'use client'

import useMessages from "@/hook/useMessages";
import WhiteImageBox from "@/components/WhiteImageBox";
import img from "../../../public/images/DSCF3020.jpg"


const Home = () => {
  const messages = useMessages()


  return (
    <div className="w-full items-center flex flex-col gap-[24] md:flex-row md:justify-center">
      <WhiteImageBox/>
    </div>
  );
}

export default Home