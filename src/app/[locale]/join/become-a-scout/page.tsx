'use client'
import CardWithImage from "@/components/CardWithImage";
import useMessages from "@/hook/useMessages"

const BecomeAScout = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithImage headline={messages?.joinCard?.headline} logo="/heart.png" title={messages?.joinCard?.title} text={messages?.joinCard?.text} image="/images/DSCF3017.jpg" />
        </div>
    );
}

export default BecomeAScout