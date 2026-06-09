import kontactIcon from "../../public/kontakt.svg"
import msgIcon from "../../public/msgIcon.svg"

interface kontaktProps {
    title:string
    text:string
}

const kontactOss = ({title, text}:kontaktProps) => {
    return (
        <div>
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
            <p></p>
        </div>
    )
}

export default kontactOss