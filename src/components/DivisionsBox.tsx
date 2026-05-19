import Image from "next/image"

const DivisionsBox = ({text, color, logo, buttonStyle = "border", boxStyle = "basic"}:
  {text:{title:string, ages:string, day?:string, time?:string, place?:string}, color:{border:string, background:string}, logo:string, buttonStyle:string, boxStyle:string}) => {

  return (
    <div className={`${color.border} border border-b-4 m-4 rounded-2xl px-6 py-4`}>
      <div className="flex justify-between items-center">
        <div className={`w-16 h-16 rounded-xl flex justify-center items-center ${color.background}`}>
          <Image src={logo} width={48} height={48} alt={text.title} />
        </div>
        <div className="font-bold font-public tracking-widest">{text.ages}</div>
      </div>
      <div className="">
        <div className="text-h3 mt-4 font-varela">{text.title}</div>
      </div>
      <div className="flex justify-center px-4 pt-4">
        <button className={`${buttonStyle === "border" && color.border} ${color.background} font-albert text-body border w-full rounded-3xl py-3`}>{`Gå till ${text.title}`}</button>
      </div>
    </div>
  )
}

export default DivisionsBox