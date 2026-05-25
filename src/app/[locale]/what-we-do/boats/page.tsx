'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Boats = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline={messages?.boatsCard?.headline} logo="/blueBoat.svg" title={messages?.boatsCard?.title} text={messages?.boatsCard?.text} MDlogo="/blueBoatYellowBg.svg" />
        </div>
    );
}

export default Boats