'use client'

import useMessages from "@/hook/useMessages";


const Home = () => {
  const messages = useMessages()
  
  return (
    <div className="">
      {messages?.home.title}
    </div>
  );
}

export default Home