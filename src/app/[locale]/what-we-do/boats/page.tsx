'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Boats = () => {

        const messages = useMessages()
    return (
        <div>
            <CardWithoutImage headline={messages?.boatsCard?.headline} logo="" title={messages?.boatsCard?.title} text={messages?.boatsCard?.text} />
        </div>
    );
}

export default Boats