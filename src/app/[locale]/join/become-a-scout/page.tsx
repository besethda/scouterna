'use client'
import CardWithImage from "@/components/CardWithImage";
import useMessages from "@/hook/useMessages"
import SmallCard from "@/components/SmallCard";

const BecomeAScout = () => {

    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
            <SmallCard title="Scoutliv för ung som vuxen" subtitle="Vi har åldersanpassade avdelningar för våra scouter. Som vuxen kan du engagera dig som ledare, eller hjälpa till som förälder." image="/images/DSCF3017.jpg" /> 
        </div>
    );
}

export default BecomeAScout