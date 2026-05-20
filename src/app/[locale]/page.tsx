'use client'

import useMessages from "@/hook/useMessages";
import CTABtn from "@/components/CTA-button";

const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <CTABtn 
      text={messages?.CTABtn.text}/>
    </div>
  );
}

export default Home