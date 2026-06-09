import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import FragorSvar from "@/components/Fragor-svar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Image from "next/image";
import CardWithLogo from "@/components/CardWithLogo";

const pageItem = "faq"
const headDescription = "faq"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Faq = ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = use(params)
    const messages = locale === "en" ? En : Sv

    return (
        <main className="bg-bg-blue">
            <Breadcrumbs />
            <div className="flex w-full flex-col items-center ">
                <CardWithLogo image="/informationYellowBg.svg" sectionTitle="faqCard" isH1 />
                <div className="w-full">
                    <section className="bg-bg-blue py-10 ">
                        <h2 className="pb-2 text-h2 font-fraunces font-bold text-center text-primary md:text-h1-desktop"> {messages?.faq.title} </h2>
                        <div className="flex flex-col gap-2.5">
                            {(messages as any)?.fragorSvar?.map((item: any, index: number) => (
                                <FragorSvar
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    </section>
                    <section className="py-10 md:py-20">
                        <h2 className="pb-2 text-h2 text-center font-fraunces font-bold text-primary md:text-h1-desktop"> {messages?.faq.title02} </h2>
                        <div className="flex flex-col gap-2.5">
                            {(messages as any)?.fragorSvar02?.map((item: any, index: number) => (
                                <FragorSvar
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    </section>
                </div>
                <section className="flex flex-col gap-6 font-albert md:gap-4
                    bg-white mx-4 mb-8 px-4 py-8 rounded-3xl max-w-245 md:px-10 lg:my-20 lg:justify-between lg:w-full lg:relative
                ">
                    <div className="flex flex-col w-full lg:w-150 lg:shrink-0">
                        <div className="flex justify-between lg:static">
                            <h2 className="font-fraunces font-bold pb-2 text-h2 text-primary md:text-h2-desktop">
                                {messages?.faqContact?.title}
                            </h2>
                            <Image src="/kontakt.svg" alt="icon" width={50} height={44} 
                                className="lg:w-40.75 lg:absolute top-4.75 right-26.25" 
                            />
                        </div>
                        <p className="text-body md:text-body-desktop font-normal text-text-black">
                            {messages?.faqContact?.text}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 w-full lg:max-w-430">
                        <Image src="/msgIcon.svg" alt="logo" width={44} height={44} className="" />
                        <a href="mailto:info@hss-scout.org" 
                            className="text-text-black text-body md:text-body-desktop hover:underline font-bold
                        ">
                            info@hss-scout.org
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Faq