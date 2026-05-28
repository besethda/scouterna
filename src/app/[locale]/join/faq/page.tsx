import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import FragorSvar from "@/components/Fragor-svar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Image from "next/image";





const pageItem = "faq"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Faq = ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <div>
            <Breadcrumbs />
            <CardWithoutImage headline="FAQ" logo="/faq.png" title={messages?.faqCard?.title} text={messages?.faqCard?.text} MDlogo="/question.png" />
            <div>
                <div className="bg-bg-blue py-10">
                    <h2 className="pb-2 text-h2 text-center md:text-h1-desktop"> {messages?.faq.title} </h2>
                    <div className="flex flex-col gap-2.5">
                        {(messages as any)?.fragorSvar?.map((item: any, index: number) => (
                            <FragorSvar
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
                <div className="py-10">
                    <h2 className="pb-2 text-h2 text-center  md:text-h1-desktop"> {messages?.faq.title02} </h2>
                    <div className="flex flex-col gap-2.5">
                        {(messages as any)?.fragorSvar02?.map((item: any, index: number) => (
                            <FragorSvar
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-10 px-4 gap-2 font-albert md:bg-bg-blue md:py-25 md:gap-10 md:px-50">
                <div className="flex flex-col ">
                    <p className="font-medium text-h2 text-primary md:text-h2-desktop">
                        {messages?.faqContact?.title}
                    </p>
                    <p className="text-body md:text-body-desktop font-normal text-text-black">
                        {messages?.faqContact?.text}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Image src="/blueMailYellowBg.svg" alt="logo" width={44} height={44} className="" />
                    <a href="mailto:info@hss-scout.org" className="text-text-black font-normal text-body md:text-body-desktop hover:underline">
                        info@hss-scout.org
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Faq