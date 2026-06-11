interface ContactProps {
    title:string
    text01:string
    text02:string
    text03:string
    text04:string
    info01:string
    info02:number
    info03:string
    info04:number
}

const ContactAddress = ({title, text01,text02,text03,text04,info01,info02,info03,info04}:ContactProps) => {
    return (
        <div className="mx-4 px-4 md:px-10 py-8 md:py-8 rounded-3xl bg-primary text-text-white text-base md:text-h5-desktop flex flex-col gap-2 items-start lg:max-w-[var(--max-w-laptop)] xl:mx-auto 2xl:max-w-[var(--max-w-desktop)]">
            <h2 className="font-bold font-fraunces text-h2 md:text-h2-desktop">{title}</h2>
            <p className="text-accent font-bold font-fraunces text-lg md:text-h4-desktop">{text01}</p>
            <p>{info01}</p>
            <p className="text-accent font-bold font-fraunces text-lg md:text-h4-desktop">{text02}</p>
            <p className="">{info02}</p>
            <p className="text-accent font-bold font-fraunces text-lg md:text-h4-desktop">{text03}</p>
            <p className="">{info03}</p>
            <p className="text-accent font-bold font-fraunces text-lg md:text-h4-desktop">{text04}</p>
            <p className="">{info04}</p>
        </div>
    )
}
export default ContactAddress