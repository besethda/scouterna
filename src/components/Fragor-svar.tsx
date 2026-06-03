"use client"

import {useState} from "react"
import { AiOutlineDownCircle } from "react-icons/ai";

interface FragorSvarProps {
    question : string;
    answer : string;
} 

const FragorSvar = ({question, answer}:FragorSvarProps) => {

    const [isOpen, setIseOpen] = useState<boolean>(false)

    return (
        <div className="text-text-white w-full max-w-75 md:max-w-140 text-body md:text-body-desktop tracking-[0.03em] mx-auto">
                <button onClick={() => setIseOpen(!isOpen)} className={`text-left flex font-albert text-body md:text-body-desktop flex-row gap-4 md:gap-8
                    w-full bg-primary px-4 py-3.25 md:py-5.25 transition-all ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}>
                    <span dangerouslySetInnerHTML={{ __html: question }} className="flex-1 leading-normal md:leading-relaxed " />
                    <AiOutlineDownCircle className={`w-7 h-7 cursor-pointer transform transition-transform duration-200 
                ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
            {isOpen && (
                <div className="bg-bg-white border border-primary rounded-b-lg rounded-t-none whitespace-pre-line border-t-0 text-text-black font-albert px-4 py-3.25 md:py-5.25
                mt-0.5">{answer}</div>
            )}
        </div>
    )
}

export default FragorSvar