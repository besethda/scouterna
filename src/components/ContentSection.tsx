import useMessages from "@/hook/useMessages"

const ContentSection = ({sectionLayout, page, blueBackground=false}:{sectionLayout:string[], page:string, blueBackground?:boolean}) => {

  const messages:Record<string, any> = {Test: {
    h0: "HSS riktlinjer",
    p0: "Vi har skapat riktlinjer för vilka typer av flytvästar som ska användas av Scouter som inte kan simma, och Scouter som kan simma. ",
    p1: "Det är bra att utgå från att alla, oavsett simkunnighet, ska ha på sig flytväst på bryggor och i båtar. Det är också viktigt att flytvästen är rätt knäppt eller knuten.",
    p2: "Scouter som för HSS ej kunnat uppvisa simkunnighet om 200 m bör bära räddningsväst.",
    p3: "Scouter som för HSS kunnat uppvisa simkunnighet om 200 m kan bära en seglarväst.",
    p4: "Det finns flera risker med att använda uppblåsbara flytvästar. Använd i stället räddningsväst eller seglarväst, beroende på simkunskap.",
    t0: "Ej simkunniga scouter",
    t1: "Simkunniga scouter",
    t2: "Uppblåsbara västar",
    w0: "HSS krav på räddningsväst:",
    w1: "HSS krav på seglarväst:",
    w2: "HSS avråder från användning av uppblåsbara flytvästar.",
    l0: "Flytkraft minst 90 N",
    l1: "Storlek och passform anpassad till scoutens vikt",
    l2: "Grenrem",
    l3: "Flytkraft minst 45 N",
    l4: "Storlek och passform anpassad till scoutens vikt",
    l5: "Grenrem (Sjöhumlor och Kapare)",
    b0: "test"
  }}

  //h is h1, t is h2, s is h3, p is paragraph, w is bold line, b is button, i is image, l is bullet point,

  const createLayout = (characterLayout:string[]) => {
    let result = characterLayout.reduce((acc, element:string, index)=> {
      const count = characterLayout.slice(0, index).filter(e=> e === element)
      if(element === "l") {
        acc.push(<ul key={index} className="w-fit text-body md:text-body-desktop text-text-black font-albert list-disc pl-5"><li>{messages[page][`${element}${count.length}`]}</li></ul>)
      } else {
        acc.push(<div key={index} className={`
          ${element === "p" ? "w-fit py-2 text-body md:text-body-desktop text-text-black font-albert" :
            element === "w" ? "w-fit py-2 text-body-bold md:text-body-bold-desktop text-text-black font-albert" : 
            element === "h" ? "w-fit py-2 text-h1 md:text-h1-desktop text-primary font-varela" :
            element === "t" ? "w-fit py-2 text-h2 md:text-h2-desktop text-primary font-varela" : 
            element === "s" ? "w-fit py-2 text-h3 md:text-h3-desktop text-primary font-varela" :
            element === "b" && "w-fit text-button md:text-button-desktop bg-accent text-primary rounded-3xl my-2 px-5 py-4 text-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-lightYellow font-varela"
            }`}>{messages[page][`${element}${count.length}`]}</div>)}
      return acc
    }, [] as React.ReactNode[])
    return result
  }

  return (
    <div className={`${blueBackground ? "bg-bg-blue" : "bg-bg-white"} px-4 pt-6 pb-10`}>
      {createLayout(sectionLayout)}
    </div>
  )
}

export default ContentSection