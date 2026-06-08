'use client'

import { useForm } from "react-hook-form"
import { sendContactEmail } from "../app/email"
import toast, { Toaster } from 'react-hot-toast';

interface EmailFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    title: string;
    text: string;
    buttonText: string;
    namn:string;
    efternamn:string;
    epost:string;
    meddelande:string;
    errorTxt:string;
    networkErrorTxt:string;
    successTxt: string;
};

const ContactForm = ({ title, text, lastName, firstName, email, message, buttonText, namn,efternamn,epost,meddelande, errorTxt,networkErrorTxt,successTxt }: EmailFormData) => {
    const {
        register,
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting },
    } = useForm<EmailFormData>()

    const onSubmit = async (data: EmailFormData) => {
        
        try {
            const result = await sendContactEmail({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                message: data.message,
            });

            if (result.success) {
                toast.success(successTxt);
                reset();
            } else {
                toast.error(result.error || errorTxt);
            }
        } catch (error) {
            toast.error(networkErrorTxt);
        }
    };

    return (
        <div className="py-10 flex flex-col gap-2 font-albert lg:py-25 lg:max-w-430  px-4 lg:px-22 2xl:mx-auto">
            <Toaster position="top-center"  reverseOrder={false} />
            <h2 className="text-h2 w-full font-medium text-primary md:text-h2-desktop">{title}</h2>
            <p className="text-body w-full text-text-black md:text-body-desktop pb-2 md:pb-8">{text}</p>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="bg-bg-white min-w-[320px] border border-lightGray border-solid rounded-3xl py-10 px-6 flex flex-col gap-6 text-body md:w-137"
            >
                <div className="flex flex-col gap-2">
                    <p>{lastName}</p>
                    <input 
                        type="text"
                        placeholder={namn}
                        {...register("lastName", { required: "Write your last name" })}
                        className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <p>{firstName}</p>
                    <input
                        type="text"
                        placeholder={efternamn}
                        {...register("firstName", { required: "Write your first name" })}
                        className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <p>{email}</p>
                    <input 
                        type="text"
                        placeholder={epost}
                        {...register("email", { required: "Write email address" })}
                        className="border border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2 pb-4">
                    <p>{message}</p>
                    <textarea 
                        placeholder={meddelande}
                        {...register("message", { required: "Write your message" })}
                        className="border border-lightGray border-solid rounded-lg w-full p-3 h-36"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary p-4 border rounded-lg text-text-white text-h3 disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : buttonText}
                </button>
            </form>
        </div>
    )
}

export default ContactForm;