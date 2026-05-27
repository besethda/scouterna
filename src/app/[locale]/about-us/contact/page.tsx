import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection"
import { En} from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";



const pageItem = "contact"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return getPageHeadTitle(locale, pageItem)
}



const Contact = ({params}:{params: Promise<{locale: string}>}) => {

  const {locale} = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <div>

      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"email"} background={"blue"}/>
      <ContentSection sectionLayout={["t", "s", "p", "s", "p"]} page={"bank"}/>
      <ContentSection sectionLayout={["t", "p"]} page={"form_title"} />
    </div>
  )
}







export default Contact