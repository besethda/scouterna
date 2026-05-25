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
            <CardWithImage sectionTitle={"joinCard"} logo="/heart.png" image="/images/DSCF3017.jpg" />
        </div>
    );
}

export default BecomeAScout