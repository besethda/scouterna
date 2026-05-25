'use client'
import useMessages from "@/hook/useMessages";
import CardWithoutImage from "@/components/CardWithoutImage";
import FragorSvar from "@/components/Fragor-svar";

const Faq = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline="FAQ" logo="/faq.png" title={messages?.faqCard?.title} text={messages?.faqCard?.text} MDlogo="/question.png"/>
            <div className="flex flex-col gap-2.5">
                {(messages as any)?.fragorSvar?.map((item:any,index:number ) =>(
                <FragorSvar 
                key={index}
                question={item.question}
                answer={item.answer} 
                />
            ))}
            </div>
        </div>
    );
}

export default Faq