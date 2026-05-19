'use client'
import useMessages from "@/hook/useMessages";
import Image from "next/image";
import Placeholder from '../../../public/images/DSCF2027.jpg'

const Home = () => {
  const messages = useMessages()

  return (
    <>
      <section className="bg-accent w-fill py-10 px-4 md:hidden">
        <div className=" flex flex-col bg-primary p-8 rounded-2xl gap-6">
          <div className="flex flex-col min-w-73.5 min-h-22.75 gap-2 font-normal text-white">
            <p className="font-varela text-h2 tracking-[-0.5%]">{messages?.homePage?.title}</p>
            <p className="font-albert text-[16px] tracking-[3%] ">{messages?.homePage?.subtitle}</p>
          </div>
          <div className="relative min-w-73.5 min-h-64.25">
            <Image
              src={Placeholder}
              alt="image"
              fill
              className=" bg-white rounded-2xl object-cover " />
          </div>
          <div>BUTTON COMPONENT HERE</div>
        </div>
      </section>

      <section className="hidden md:block">

      </section>


    </>
  );
}

export default Home

/*

göm hela första delen i desktop. gör en som syns i desktop. lägg till i en subfolder
Texten är för olika - dela upp 

desktop: 
width: 1280;
height: 440;
angle: 0 deg;
opacity: 1;
padding: 100px;
gap: 100px;
backgrundsfärg: #D6EAF8 

IMAGE 
width: 400;
height: 240;
border-radius: 16px;
angle: 0 deg;
opacity: 1;

Title sub button 
width: 580;
height: 240;
angle: 0 deg;
opacity: 1;
gap: 24px;

TITLE 
width: 360;
height: 48;
angle: 0 deg;
opacity: 1;
font-family: Varela Round;
font-weight: 400;
font-style: Regular;
font-size: 40px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: -0.5%;
vertical-align: middle;
background: #003660;


SUBTITLE 
width: 600;
height: 88;
angle: 0 deg;
opacity: 1;
font-family: Albert Sans;
font-weight: 400;
font-style: Regular;
font-size: 18px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 3%;
vertical-align: middle;
textfärg: #3B3A3A;


*/ 