import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import FragorSvar from "@/components/Fragor-svar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Image from "next/image";
import { getId } from "@/lib/utils";

const pageItem = "faq"
const headDescription = "faq"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem, headDescription)
}

const Faq = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params
    const messages = locale === "en" ? En : Sv

   const data = await getId("44126518-6c9f-4c34-bc46-bea246cd70ca") 

    return (
        <main>
            <Breadcrumbs />
            <div className="flex w-full flex-col items-center ">
                <CardWithoutImage headline="FAQ" logo="/faq.png" title={messages?.faqCard?.title} text={messages?.faqCard?.text} MDlogo="/question.png" />
                <div className="w-full">
<<<<<<< HEAD
                    {data?.questionCategories.map((category:any, index:number)=> (
                    <section key={index} className={`${index % 2 === 0 ? 'bg-bg-blue' : 'bg-bg-white'} py-10 `}>
                    <h2 className="pb-2 text-h2 font-albert text-center text-primary md:text-h1-desktop"> {locale=== 'en' ? category.title_en : category.title_sv}</h2>
                    <div className="flex flex-col gap-2.5">
                        {category?.questionList.map((item: any, index: number) => (
                            <FragorSvar
                                key={index}
                                question={locale === "en" ? item.question_en : item.question_sv}
                                answer={locale === "en" ? item.text_en_array : item.text_sv_array}
                            />
                        ))}
                    </div>
                </section>
                    ))}
=======
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
                    <section className="py-10">
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
>>>>>>> 3a99304b5373de1d424daf8883b513ff4b36474f
                </div>
                <section className="flex flex-col items-center py-10 gap-2 font-albert md:bg-bg-blue md:py-25 md:gap-10 w-full ">
                    <div className="flex flex-col w-full px-4 lg:max-w-430 lg:px-22">
                        <h2 className="font-fraunces font-bold pb-3 text-h2 text-primary md:text-h2-desktop">
                            {messages?.faqContact?.title}
                        </h2>
                        <p className="text-body md:text-body-desktop font-normal text-text-black">
                            {messages?.faqContact?.text}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 w-full px-4 lg:max-w-430 lg:px-22">
                        <Image src="/blueMailYellowBg.svg" alt="logo" width={44} height={44} className="" />
                        <a href="mailto:info@hss-scout.org" className="text-text-black font-normal text-body md:text-body-desktop hover:underline">
                            info@hss-scout.org
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Faq