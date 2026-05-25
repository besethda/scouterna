'use client'
import useMessages from "@/hook/useMessages";
import CardWithoutImage from "@/components/CardWithoutImage";

const Faq = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline="FAQ" logo="/faq.png" title={messages?.faqCard?.title} text={messages?.faqCard?.text} MDlogo="/question.png"/>
        </div>
    );
}

export default Faq