"use client"
import IntroPlaceHolder from '@/assets/ph1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef } from 'react'
import Home from '@/app/page'
import { useState, FormEvent } from 'react'
import toast from "react-hot-toast";
import { log } from 'console'

const one = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseUrl, setResponseUrl] = useState("");
    const [message, setMessage] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);



    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const originalUrl = formData.get("originalUrl");

        try {
            setIsSubmitting(true);
            setResponseUrl("");

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ originalUrl }),
            });

            if (response.status == 429) {
                toast.error("Too Many Requests. Please try again later.");
                return;
            }

            const responseData = await response.json();
            setResponseUrl(responseData.shortenedUrl || "");
        } catch (error) {
            console.log("error :", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-screen flex flex-col-reverse md:flex-row">
            <div className=" md:w-7/12 flex flex-col p-[5vw] gap-6">
                <p className="text-4xl md:text-5xl lg:text-7xl"><span className="text-[#2C4E80]">Shorten</span> your Links</p>
                <p className="text-4xl md:text-5xl lg:text-7xl">Boost <span className="text-[#2C4E80]">your</span> reach</p>

                <p className="text-lg md:text-2xl">Our URL shortner helps you create custom, branded links that are easy to share and track. Get started for free today!</p>

                <form className="md:flex gap-4 align-center items-center" onSubmit={onSubmit}>
                    <input type="text" name='originalUrl' placeholder='Enter the link' className="w-full md:w-[39vw] p-3 h-[8vh]  rounded-[20px] text-black flex justify-center items-center border-[#2C4E80] border-4 " />
                    <button type="submit" className='w-full md:w-max mt-2 md:mt-0 text-white p-3 rounded-[20px] h-[8vh] bg-[#2e4e82] text-lg' disabled={isSubmitting} >
                        {isSubmitting ? 'Generating...' : 'Generate Link'}
                    </button>
                </form>
                {responseUrl && (
                    <div className="mt-4">
                        <p className="text-lg">Shortened URL: <a href={responseUrl} className="text-blue-500">{responseUrl}</a></p>
                    </div>
                )}
                <div className="flex gap-4 align-center items-center">
                    <div className="authOption w-max p-3 h-[6vh] bg-[#2C4E80] rounded-[20px] text-white flex justify-center items-center font-bold">
                        <span>Get started for free</span>
                    </div>
                    <div className="text-lg text-[#2C4E80]">
                        Learn More
                    </div>
                </div>
            </div>

            <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center">
                <div className="imgCnt w-[80%]">
                    <Image src={IntroPlaceHolder} alt="" width={522} height={482} />
                </div>
            </div>
        </div>
    )
}
export default one;