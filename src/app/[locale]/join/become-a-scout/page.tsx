'use client'
import CardWithImage from "@/components/CardWithImage";
import useMessages from "@/hook/useMessages"
import JoinPage from "@/components/JoinPage";

const BecomeAScout = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithImage headline={messages?.joinCard?.headline} logo="/heart.png" title={messages?.joinCard?.title} text={messages?.joinCard?.text} image="/images/DSCF3017.jpg" />
            <JoinPage 
                title={messages?.joinPage.title}
                text={messages?.joinPage.text}
                buttonText={messages?.joinPage.buttonText}
                width="box"
                btnWidth="full"
            />
        </div>
    );
}

export default BecomeAScout