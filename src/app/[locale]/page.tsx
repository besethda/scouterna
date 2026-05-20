'use client'

import useMessages from "@/hook/useMessages";
import Image from "next/image";



const Home = () => {
  const messages = useMessages()

  return (
    <div className="">

      <div className="flex flex-col min-w-97.5 min-h-120 gap-4 px-4 py-10 bg-(--bg-blue) md:p-25 ">

        <p className="text-[#00355F] font-varela font-normal text-h2 tracking-[-0.5%] md:text-h2-desktop">Bra att veta</p>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:py-2.5 md:text-[#FFFFFF]">

          <div className="flex flex-row gap-2 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
            <div className="hidden md:flex bg-accent w-11 h-11 rounded-full items-center justify-center"><img src="/Watch.png" alt="watch"/></div>
            <div className="flex flex-col">
              <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">Tid</p>
              <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF]">En kväll i veckan</p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px]">Scouternas avdelningar träffas en gång i veckan för att göra aktiviteter, samarbeta och utvecklas tillsammans.</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 font-normal md:bg-primary md:rounded-2xl md:p-5 ">
            <div className="hidden md:flex bg-accent w-11 h-11 rounded-full items-center justify-center">hjärta</div>
            <div className="flex flex-col">
              <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">Inkluderande</p>
              <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF]">Spännande för alla åldrar</p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px]">HSS har åldersindelade avdelningar från och med 8 års ålder och uppåt.</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 font-normal md:bg-primary md:rounded-2xl md:p-5">
            <div className="hidden md:flex bg-accent w-11 h-11 rounded-full items-center justify-center">handhjärta</div>
            <div className="flex flex-col">
              <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">Värderingar</p>
              <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF]">Respekt & ansvar</p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px]">Vi är en inkluderande förening där vi tar hand om varandra.</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 font-normal md:bg-primary md:rounded-2xl md:p-5">
            <div className="hidden md:flex bg-accent w-11 h-11 rounded-full items-center justify-center"></div>
            <div className="flex flex-col">
              <p className="hidden md:block font-public font-bold uppercase text-[14px] tracking-[1.5px] text-[#1F74AD]">Trygghet</p>
              <p className="text-[#003061] font-varela text-h3 tracking-[-0.5%] gap-1 md:text-h3-desktop md:text-[#FFFFFF]">Utbildade ledare</p>
              <p className="gap-2.5 text-body font-albert tracking-[3%] md:text-[18px]">Våra ledare har gedigen erfarenhet och utbildning inom Scouting och sjösäkerhet. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home


/*

LOGO

background: #1F74AD;



Good to know


One evening a week
The Scout groups meet once a week to do activities, collaborate, and grow together.


Exciting for all ages
HSS has age-divided groups from the age of 8 and up.

Respect & responsibility
We are an inclusive association where we take care of each other.

Trained leaders</p> Our leaders have solid experience and training in Scouting and maritime safety.
*/