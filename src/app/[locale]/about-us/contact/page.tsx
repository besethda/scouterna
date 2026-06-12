import { getPageHeadTitle } from "@/lib/utils"
import ContentSection from "@/components/ContentSection"
import Breadcrumbs from "@/components/Breadcrumbs";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv";
import { use } from "react";
import JoinPage from "@/components/JoinPage";
import ContactForm from "@/components/ContactForm";
import CardWithLogo from "@/components/CardWithLogo";
import ContactAddress from "@/components/ContactAddress"


const pageItem = "contact";
const headDescription = "contact"
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return getPageHeadTitle(locale, pageItem, headDescription)
}


const Contact = ({ params }: { params: Promise<{ locale: string }> }) => {

  const { locale } = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <main className="w-full mx-auto lg:max-w-[var(--max-w-laptop)] 2xl:max-w-[var(--max-w-desktop)]">
      <Breadcrumbs />
      <CardWithLogo image="/mailYellowBg.svg" sectionTitle="contactcard" isH1 />
      <ContactAddress 
      title={messages?.email.title}
      text01={messages?.email.text01}
      text02={messages?.email.text02}
      text03={messages?.bank.text03}
      text04={messages?.bank.text04}
      info01={messages?.email.info01}
      info02={messages?.email.info02}
      info03={messages?.bank.info03}
      info04={messages?.bank.info04}
      />
      <div className="w-full  bg-bg-blue">
        <ContactForm
          title={messages?.form.title}
          text={messages?.form.text}
          lastName={messages?.form.lastName}
          firstName={messages?.form.firstName}
          email={messages?.form.email}
          message={messages?.form.message}
          buttonText={messages?.form.buttonText}
          namn={messages?.form.namn}
          efternamn={messages?.form.efternamn}
          epost={messages?.form.epost}
          meddelande={messages?.form.meddelande}
          successTxt={messages.form.successTxt}
          errorTxt={messages.form.errorTxt}
          networkErrorTxt={messages.form.networkErrorTxt}
        />
      </div>
      <div className=" mx-4 my-8 py-4 lg:pt-2 flex flex-col items-center">
        <JoinPage
          head={messages?.interestBtn.head}
          title={messages?.interestBtn.title}
          text={messages?.interestBtn.text}
          buttonText={messages?.interestBtn.buttonText}
          section="contact"
        />
      </div>
    </main>
  )
}

export default Contact