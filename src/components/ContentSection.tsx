"use client"

import useMessages from "@/hook/useMessages"

//background can be "white, blue, or custom (white on mobile, blue on desktop). White is the default if not defined
//padding can be "bottom", "top", "both", or "none". Both is the default if not defined 

//h is h1, t is h2, s is h3, p is paragraph, w is bold line, l is bullet point

const ContentSection = ({ sectionLayout, page, padding = "both", color="black", display = "both", child = false }: { sectionLayout: string[], page: string, color?: string, padding?: string, display?: string, child?: boolean }) => {

  const messages = useMessages()
  if (!messages) return null

  const createLayout = (characterLayout: string[]) => {
    let result = characterLayout.reduce((acc, element: string, index) => {
      const count = characterLayout.slice(0, index).filter(e => e === element)
      if (element === "l") {
        acc.push(<ul key={index} className={`w-fit text-body my-3 md:text-body-desktop ${color=== "black" ? "text-text-black": "text-text-white"} font-albert lg:max-w-[63%] list-disc pl-5`}><li>{(messages as any)[page]?.[`${element}${count.length}`]}</li></ul>)
      } else {
        acc.push(<div key={index} className={`
          ${element === "p" ? `w-fit py-2 text-body md:text-body-desktop ${color=== "black" ? "text-text-black": "text-text-white"} font-albert lg:max-w-[63%]` :
            element === "w" ? `w-fit py-2 text-body-bold md:text-body-bold-desktop ${color=== "black" ? "text-text-black": "text-text-white"} font-fraunces` :
              element === "h" ? `w-fit py-2 text-h1 md:text-h1-desktop text-primary ${color=== "black" ? "text-primary": "text-text-white"} font-fraunces font-bold` :
                element === "t" ? `w-fit py-2 text-h3 md:text-h2-desktop text-primary ${color=== "black" ? "text-primary": "text-text-white"} font-fraunces font-bold` :
                  element === "s" ? `w-fit py-2 text-h3 md:text-h3-desktop  ${color=== "black" ? "text-primary": "text-text-white"} font-fraunces font-bold` :  ""
          }`}>{(messages as any)[page]?.[`${element}${count.length}`]}</div>)
      }
      return acc
    }, [] as React.ReactNode[])
    return result
  }

  return (
    <div className={`w-full flex justify-center ${color === "black" ? "text-text-black" : "text-text-black"}`}>
      <div className={`${padding === "top" ? "pt-7" : padding === "bottom" ? "pb-16" : padding === "both" ? "pb-16 pt-7" : padding === "bottom-mobile" ? "pb-16 md:pb-0" : padding === "top-mobile" ? "pt-7 md:pt-0" : padding === "bottom-desktop" ? "pb- md:pb-16" : padding === "top-desktop" ? "pt-0 md:pt-7" : ""} 
      ${display === "mobile" ? "md:hidden" : display === "desktop" ? "hidden md:block" : ""} w-full ${child ? "" : "px-4 lg:max-w-430 lg:px-0"}`}>
        {createLayout(sectionLayout)}
      </div>
    </div>

  )
}

export default ContentSection