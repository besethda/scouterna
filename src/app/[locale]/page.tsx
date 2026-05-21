'use client'

import useMessages from "@/hook/useMessages";
import GoodToKnow from "@/components/GoodToKnow-home";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <GoodToKnow />


    </div>
  );
}

export default Home