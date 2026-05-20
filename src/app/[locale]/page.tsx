'use client'

import useMessages from "@/hook/useMessages";
import Instagram from "@/components/Instagram";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <Instagram infoText={true}/>
    </div>
  );
}

export default Home