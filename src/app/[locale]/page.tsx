'use client'

import DivisionsBox from "@/components/DivisionsBox";
import useMessages from "@/hook/useMessages";


const Home = () => {
  const messages = useMessages()

  return (
    <div className="">
      <DivisionsBox text={{title: "Sjöhumlorna", ages:"8-9 år"}} color={{border: "border-lightBlue", background: "bg-lightBlue-opaque"}} logo={"/kaparna.png"} buttonStyle={"border"} boxStyle={"}large"} />
    </div>
  );
}

export default Home