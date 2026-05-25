'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Myset = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline={messages?.mysetCard?.headline} logo="/blueHouse.png" title={messages?.mysetCard?.title} text={messages?.mysetCard?.text} MDlogo="/blueHouseYellowBg.svg" />
        </div>
    );
}

export default Myset