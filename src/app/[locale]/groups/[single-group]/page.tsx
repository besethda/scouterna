'use client'

import useMessages from "@/hook/useMessages";

const Groups = () => {
    const messages = useMessages()

    if (!messages) {
        return null
    }

    return (
        <div>
        
        </div>
    );
}

export default Groups