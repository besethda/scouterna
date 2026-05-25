'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Groups = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline={messages?.groupsCard?.headline} logo="/hand.png" title={messages?.groupsCard?.title} text={messages?.groupsCard?.text} MDlogo="/blueHandYellowBg.svg" />
        </div>
    );
}

export default Groups