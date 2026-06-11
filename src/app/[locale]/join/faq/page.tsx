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
import birds from '../../../../../public/blueBirds1.png'
import anchor from '../../../../../public/blueAnchor.svg'

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
        <main className="bg-bg-blue max-w-360 overflow-hidden mx-auto">
            <Breadcrumbs />
            <div className="flex w-full flex-col items-stretch">
                <div className="w-full">
                    <CardWithLogo image="/informationYellowBg.svg" sectionTitle="faqCard" isH1 />
                </div>
                <div className="w-full relative">
                    {data?.questionCategories.map((category: any, index: number) => (
                        <div key={index}>
                            <section className={`${index % 2 === 0 ? 'bg-bg-blue' : 'bg-bg-blue'} py-10 `}>
                                <h2 className="w-full text-center mb-3 py-2 text-h2 md:text-h2-desktop text-primary font-fraunces font-bold"> {locale === 'en' ? category.title_en : category.title_sv}</h2>
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
                            {index < data.questionCategories.length - 1 && <Line hasPadding />}
                        </div>
                    ))}
                    <Image src={birds} alt="birds" height={150} width={150} className="hidden lg:block lg:absolute lg:top-30 lg:right-5 opacity-90 lg:rotate-12" />
                    <Image src={anchor} alt="birds" height={150} width={150} className="hidden lg:block lg:absolute lg:top-280 lg:left-5 opacity-90 lg:rotate-12" />
                </div>
                <div className="flex flex-col md:flex-row w-full pt-5 px-4 pb-10 lg:max-w-430 lg:px-22 md:flex md:pt-12.5 md:pb-16 md:items-start md:gap-25 items-center">
                    <section className="flex flex-col font-albert md:gap-4 w-full bg-white mb-8 px-4 py-8 rounded-3xl md:px-10 lg:my-20  lg:justify-between lg:w-full lg:relative shadow-xl">
                        <div className="flex flex-col w-full lg:w-150 lg:shrink-0 ">
                            <div className="flex justify-between lg:static">
                                <h2 className="font-fraunces font-bold pb-2 text-h2 text-primary md:text-h2-desktop">
                                    {messages?.faqContact?.title}
                                </h2>
                                <Image src="/kontakt.svg" alt="icon" width={50} height={44}
                                    className="lg:w-40.75 lg:absolute top-4.75 right-1"
                                />
                            </div>
                            <p className="text-body md:text-body-desktop font-normal text-text-black">
                                {messages?.faqContact?.text}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 w-full">
                            <Image src="/msgIcon.svg" alt="logo" width={44} height={44} className="" />
                            <a href="mailto:info@hss-scout.org"
                                className="text-text-black text-body md:text-body-desktop hover:underline font-bold
                        ">
                                info@hss-scout.org
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Faq