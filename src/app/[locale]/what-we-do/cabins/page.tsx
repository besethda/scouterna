'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Cabins = () => {
        const messages = useMessages()

    return (
        <div>
            <CardWithoutImage headline={messages?.cabinsCard?.headline} logo="" title={messages?.cabinsCard?.title} text={messages?.cabinsCard?.text} />
        </div>
    );
}

export default Cabins