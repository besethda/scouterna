'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Cabins = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline={messages?.cabinsCard?.headline} logo="/blueHouse.png" title={messages?.cabinsCard?.title} text={messages?.cabinsCard?.text} MDlogo="/blueHouseYellowBg.svg" />
        </div>
    );
}

export default Cabins