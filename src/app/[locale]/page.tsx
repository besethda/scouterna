'use client'

import useMessages from "@/hook/useMessages";
import WhiteImageBox from "@/components/WhiteImageBox";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <WhiteImageBox />
    </div>
  );
}

export default Home