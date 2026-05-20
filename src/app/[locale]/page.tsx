'use client'

import useMessages from "@/hook/useMessages";
import WhiteImageBox from "@/components/WhiteImageBox";
import img from "../../../public/images/DSCF3020.jpg"
import heartIcon from "../../../public/heartIcon.png"

const Home = () => {
  const messages = useMessages()


  return (
    <div className="">
      <WhiteImageBox 
      icon={heartIcon}
      title={messages?.whiteImageBox.title || ""}
      image={img}
      />
    </div>
  );
}

export default Home