'use client'

import useMessages from "@/hook/useMessages";
import WhiteImageBox from "@/components/WhiteImageBox";
import img from "../../../public/images/DSCF3020.jpg"


const Home = () => {
  const messages = useMessages()


  return (
    <div>
      <WhiteImageBox/>
    </div>
  );
}

export default Home