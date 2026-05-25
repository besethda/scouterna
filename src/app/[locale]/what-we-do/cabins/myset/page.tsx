'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Myset = () => {

    const messages = useMessages()
    return (
        <div>
            <CardWithoutImage headline={messages?.mysetCard?.headline} logo="" title={messages?.mysetCard?.title} text={messages?.mysetCard?.text} />
        </div>
    );
}

export default Myset