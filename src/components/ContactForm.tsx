'use client'

import {useForm} from "react-hook-form"
import emailjs from '@emailjs/browser'

interface EmailFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    title:string;
    text:string;
    buttonText:String
}

const ContactForm = ({title,text,lastName,firstName,email,message,buttonText}:EmailFormData) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm <EmailFormData>()

    const onSubmit = (data:EmailFormData) => {
        console.log(data)
        
        const params = {
        from_name: `${data.lastName} ${data.firstName}`,
        from_email: data.email,
        message:data.message
        };

        emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
        params, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string, 
        )
        .then((response) => {
            alert("Email sent successfully!")
        })
        .catch((error) => {
            alert("Failed to send email. Please try again.")
            console.log("Error:", error)
        })
    };

    return (
        <div className="py-10 px-4 bg-bg-blue flex flex-col gap-2 md:pl-25">
            <h2 className="font-albert text-h2 font-medium text-primary md:text-h2-desktop">{title}</h2>
            <p className="font-albert text-body text-text-black md:text-body-desktop pb-2 md:pb-8">{text}</p>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-bg-white min-w-[320px] border border-lightGray border-solid rounded-[24px] py-10 px-6 flex flex-col gap-6 text-body font-public
            md:w-137">
                <div className="flex flex-col gap-2">
                    <p>{lastName}</p>
                    <input 
                    type="text"
                    placeholder="Efternamn"
                    {...register("lastName", {
                        required:"Write your last name"
                    })}
                    className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>{firstName}</p>
                    <input
                    type="text"
                    placeholder="Firstnamn"
                    {...register("firstName", {
                        required:"Write your first name"
                    })}
                    className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <p>{email}</p>
                    <input 
                    type="text"
                    placeholder="example@email.com"
                    {...register("email", {
                        required:"Write email address"
                    })}
                    className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2 pb-4">
                    <p>{message}</p>
                    <textarea 
                    placeholder="Please enter the content"
                    {...register("message")}
                    className="border border-lightGray border-solid rounded-lg w-full h-10 p-3 h-[144px]"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                type="submit"
                className="bg-primary p-4 border rounded-lg text-text-white font-public text-h3"
                >
                {buttonText}
                </button>
            </form>
        </div>
    )
}

export default ContactForm