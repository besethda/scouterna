"use client"

import useMessages from "@/hook/useMessages"
import { useEffect, useState } from "react"

type promptType = {
  role?:string,
  group?:string
}

const PWAdetector = () => {

  const [showPrompt, setShowPrompt] = useState(false)
  const [prompt, setPrompt] = useState<promptType | null>(null)
  const messages = useMessages()

  useEffect(()=> {
    const isPwa = window.matchMedia('(display-mode: standalone)').matches
    const userRole = localStorage.getItem("userRole")
    const userGroup = localStorage.getItem("userGroup")
    if (isPwa && (!userRole || !userGroup)) {
      setShowPrompt(true)
    }
  }, [])

  const submitResponse = () => {
    localStorage.setItem("userRole", prompt?.role ?? "")
    localStorage.setItem("userGroup", prompt?.group ?? "")
    setShowPrompt(false)
  }

  if(showPrompt) return (
    <div className="relative">
      <div className="w-full h-full fixed z-100 flex items-center justify-center  bg-gray-700/50 backdrop-blur-xs">
      {!prompt && <div className="w-[90%] min-h-24 bg-primary rounded-2xl p-5 text-text-white h-30vh top-0 border-accent border-2">
        <div className="text-h2 font-fraunces font-bold">{messages?.notifications.prompt}</div>
        <div className="flex flex-col font-albert text-h3 text-text-black mt-4">
          <button className="px-8 py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({role: 'förälder'})}>{messages?.notifications.role1}</button>
          <button className="px-8 py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({role: 'scout'})}>{messages?.notifications.role2}</button>
          <button className="px-8 py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({role: 'ledare'})}>{messages?.notifications.role3}</button>
        </div>
      </div>}
      {prompt?.role && !prompt.group && <div className="w-[90%] min-h-24 bg-primary rounded-2xl text-text-white p-5 h-30vh top-0 border-accent border-2">
        <div className="text-h2 font-fraunces font-bold">{prompt?.role === "parent" ? messages?.notifications.prompt3 : messages?.notifications.prompt2}</div>
          <div className="flex flex-col font-albert text-h3 text-text-black mt-4">
          <button className="px-8 capitalize py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({...prompt ,group: 'spårarscouter'})}>{messages?.notifications.group1}</button>
            <button className="px-8 capitalize py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({...prompt ,group: 'upptäckarscouter'})}>{messages?.notifications.group2}</button>
            <button className="px-8 capitalize py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({...prompt ,group: 'äventyrarscouter'})}>{messages?.notifications.group3}</button>
            <button className="px-8 capitalize py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({...prompt ,group: 'utmanarscouter'})}>{messages?.notifications.group4}</button>
            <button className="px-8 capitalize py-4 rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={()=>setPrompt({...prompt ,group: 'familjescouter'})}>{messages?.notifications.group5}</button>
          </div>
        </div>}
        {prompt?.role && prompt?.group &&<div className="w-[90%] min-h-24 bg-primary rounded-2xl text-text-black p-5 h-30vh top-0 border-accent border-2">
          <button className="px-8 capitalize py-4 w-full rounded-2xl bg-bg-white my-2 active:bg-gray-300" onClick={submitResponse}>{messages?.notifications.submit}</button>
          </div>}
      </div>
    </div>
  )
}

export default PWAdetector