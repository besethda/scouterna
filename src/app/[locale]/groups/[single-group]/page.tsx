'use client'
import CardWithoutImage from "@/components/CardWithoutImage";
import useMessages from "@/hook/useMessages";

const Groups = () => {

    const messages = useMessages()
    return (
        <div>
            <CardWithoutImage headline="" logo="" title="" text="" />
        </div>
    );
}

export default Groups