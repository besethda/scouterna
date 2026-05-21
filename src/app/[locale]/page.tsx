'use client'

import useMessages from "@/hook/useMessages";
import WhiteImageBox from "@/components/WhiteImageBox";
import img from "../../../public/images/DSCF3020.jpg"
import heartIcon from "../../../public/heartIcon.png"
import ship from "../../../public/shipIcon.png"
import compass from "../../../public/compassIcon.png"
import heartDesktop from "../../../public/heartIcon-desktop.png"
import shipDesktop from "../../../public/shipIcon-desktop.png"

const Home = () => {
  const messages = useMessages()


  return (
    <div className="w-full items-center flex flex-col gap-[24] md:flex-row md:justify-center">
      <WhiteImageBox 
        icon={ship}
        desktopIcon={shipDesktop}
        title={messages?.whiteImageBox.title01 || ""}
        image={img}
      />
      <WhiteImageBox 
        icon={heartIcon}
        desktopIcon={heartDesktop}
        title={messages?.whiteImageBox.title02 || ""}
        image={img}
      />
      <WhiteImageBox 
        icon={compass}
        desktopIcon={shipDesktop}
        title={messages?.whiteImageBox.title03 || ""}
        image={img}
      />
    </div>
  );
}

export default Home