'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";
import Optimister from "@/components/Optimister";

const Boats = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithoutImage headline={messages?.boatsCard?.headline} logo="/blueBoat.svg" title={messages?.boatsCard?.title} text={messages?.boatsCard?.text} MDlogo="/blueBoatYellowBg.svg" />
            <Optimister 
                title={messages?.optimisterSection?.title}
                text={messages?.optimisterSection?.text}
            />
            <Optimister 
                title={messages?.optimisterSection?.title02}
                text={messages?.optimisterSection?.text02}
            />
            <Optimister 
                title={messages?.optimisterSection?.title03}
                text={messages?.optimisterSection?.text03}
            />
        </div>
    );
}

export default Boats