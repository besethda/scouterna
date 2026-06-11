'use client'

import { useForm } from "react-hook-form";
import { sendContactEmail } from "../app/email";
import toast, { Toaster } from 'react-hot-toast';

interface EmailFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    title: string;
    text: string;
    buttonText: string;
    namn: string;
    efternamn: string;
    epost: string;
    meddelande: string;
    errorTxt: string;
    networkErrorTxt: string;
    successTxt: string;
};

const ContactForm = ({ title, text, lastName, firstName, email, message, buttonText, namn, efternamn, epost, meddelande, errorTxt, networkErrorTxt, successTxt }: EmailFormData) => {
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
        <div className="py-10 flex flex-col gap-2 font-albert px-4 2xl:mx-auto relative 2xl:pt-25 lg:max-w-[var(--max-w-laptop)]  xl:mx-auto 2xl:max-w-[var(--max-w-desktop)]">
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-h2 w-full font-fraunces font-bold text-primary md:text-h2-desktop">{title}</h2>
            <p className="text-body w-full text-text-black md:text-body-desktop pb-2 md:pb-8 max-w-70 md:max-w-100 lg:max-w-150 xl:max-w-full">{text}</p>
            <div className="absolute right-4 top-14 -scale-x-100 rotate-293  
                            md:right-22 
                            lg:scale-x-100 lg:rotate-0 lg:top-60 lg:right-40 lg:left-15
                            xl:rotate-10 xl:left-0
                            2xl:-rotate-0 2xl:top-55 2xl:left-35 
            ">
                <svg
                    className="w-16.75 h-auto md:w-45.5 xl:w-60 2xl:w-75"
                    viewBox="0 0 336 326"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_122_51)">
                        <path
                            d="M256.127 237.308C255.282 238.733 255.207 239.375 254.78 239.861C220.144 265.662 182.367 276.774 141.55 269.188C131.237 267.299 121.745 262.623 113.433 255.768C95.4868 241.246 89.555 216.755 98.2857 193.837C102.772 181.869 109.024 171.137 119.515 163.644C124.943 165.16 130.287 166.864 135.532 167.847C144.096 169.408 152.344 167.899 159.64 161.912C165.136 157.602 167.647 151.962 166.176 147.703C164.246 142.113 159.328 139.924 154.2 140.569C147.074 141.45 139.963 143.24 133.121 145.375C128.704 146.787 124.395 149.374 120.254 151.585C101.831 139.553 102.356 115.684 121.324 95.297C124.469 95.7962 127.79 96.3735 131.018 96.6847C143.055 97.5385 154.055 94.1018 162.765 84.4646C166.095 80.7664 168.714 76.3012 166.7 70.8993C165.145 66.8284 160.228 64.6389 153.971 65.4572C144.067 66.9043 135.358 71.8118 127.101 77.5961C124.265 79.7121 121.429 81.8282 118.768 84.0225C89.7065 66.5784 81.0688 27.3678 106.252 3.8912C103.886 3.06264 102.037 2.01449 100.649 2.29727C99.0008 2.68984 97.3776 4.44493 96.2731 5.98044C86.3487 20.7084 81.4928 36.3414 86.9416 53.4089C90.9194 66.2173 97.9927 76.8 107.392 85.9403C108.721 87.2081 110.051 88.4758 111.297 89.9315C111.472 90.0097 111.481 90.4638 111.673 91.4504C110.744 93.0641 109.823 95.132 108.551 97.0435C93.6475 120.592 94.1114 136.566 110.876 157.996C109.169 159.939 107.295 162.258 105.329 164.311C94.3174 176.753 87.5214 191.072 85.5594 207.768C82.3062 234.927 94.5868 258.865 118.071 271.348C130.824 278.153 144.558 281.339 159.112 281.737C194.318 282.545 226.716 272.642 255.555 248.991C257.103 247.878 258.559 246.499 260.106 245.386C260.366 245.276 260.801 245.245 262.106 245.15C260.665 252.167 257.46 257.948 254.43 263.808C251.66 269.557 248.455 275.338 245.258 281.573C250.075 283.042 253.003 281.193 255.48 278.466C258.208 275.175 261.287 272.041 263.136 268.36C268.007 258.365 272.786 248.103 276.863 237.529C279.935 229.211 276.9 225.157 269.162 225.992C252.734 227.913 236.222 230.022 219.71 232.131C217.016 232.508 214.507 233.418 211.127 234.392C213.401 239.684 216.881 239.431 220.101 239.288C231.929 238.247 243.505 237.77 256.127 237.308ZM158.92 74.1931C151.564 86.4606 140.238 91.1035 129.097 86.8193C138.216 80.5177 146.641 74.3575 158.92 74.1931ZM157.853 149.854C150.456 159.85 141.087 161.986 130.876 156.088C139.677 151.447 147.708 147.589 157.853 149.854Z"
                            fill="#003660"
                        />
                    </g>
                    <defs>
                        <   clipPath id="clip0_122_51">
                            <rect width="239.744" height="260.82" fill="white" transform="matrix(-0.406737 0.913546 0.913546 0.406737 97.5127 0)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-primary min-w-[320px] border border-lightGray border-solid rounded-3xl py-10 px-6 flex flex-col gap-6 text-body md:w-137 lg:mx-auto text-white"
            >
                <div className="flex flex-col gap-2">
                    <p>{lastName}</p>
                    <input
                        type="text"
                        placeholder={namn}
                        {...register("lastName", { required: "Write your last name" })}
                        className="bg-white border text-form border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <p>{firstName}</p>
                    <input
                        type="text"
                        placeholder={efternamn}
                        {...register("firstName", { required: "Write your first name" })}
                        className="bg-white border text-form  border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <p>{email}</p>
                    <input
                        type="text"
                        placeholder={epost}
                        {...register("email", { required: "Write email address" })}
                        className="bg-white border text-form  border-lightGray border-solid rounded-lg w-full h-10 p-3"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2 pb-4">
                    <p>{message}</p>
                    <textarea
                        placeholder={meddelande}
                        {...register("message", { required: "Write your message" })}
                        className="bg-white border text-form  border-lightGray border-solid rounded-lg w-full p-3 h-36"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-primary p-4 border rounded-lg text-h3 disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : buttonText}
                </button>
            </form>
        </div>
    )
}

export default ContactForm;