import { getPageHeadTitle } from "@/lib/utils"
import CardWithoutImage from "@/components/CardWithoutImage";
import FragorSvar from "@/components/Fragor-svar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import Image from "next/image";
import { getId } from "@/lib/utils";
import CardWithLogo from "@/components/CardWithLogo";
import Line from "@/components/line"

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
        <main className="bg-bg-blue">
            <Breadcrumbs />
            <div className="flex w-full flex-col items-center ">
                <CardWithLogo image="/informationYellowBg.svg" sectionTitle="faqCard" isH1 />
                <div className="w-full">
                    {data?.questionCategories.map((category:any, index:number)=> (
                        <>
                    <section key={index} className={`${index % 2 === 0 ? 'bg-bg-blue' : 'bg-bg-white'} py-10 `}>
                    <h2 className="w-full text-center mb-3 py-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold"> {locale=== 'en' ? category.title_en : category.title_sv}</h2>
                    <div className="flex flex-col gap-2.5">
                        {category?.questionList.map((item: any, index: number) => (
                            <FragorSvar
                                key={item.question_en}
                                question={locale === "en" ? item.question_en : item.question_sv}
                                answer={locale === "en" ? item.text_en_array : item.text_sv_array}
                            />
                        ))}
                    </div>
                </section>
                {index < data.questionCategories.length -1 && <Line hasPadding />}
                </>
                    ))}
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