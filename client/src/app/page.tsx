"use client"
import { HomeTop } from '@/icons/Working'
import Link from 'next/link'
import { MouseEvent, useRef } from 'react'
import { useState, FormEvent } from 'react'
import toast from "react-hot-toast";
import { HomeMid } from '@/icons/Texting';
import { HomeBottom } from '@/icons/Searching';

export default function Home() {
    
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
        <div>
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className=" md:w-7/12 flex flex-col p-[5vw] gap-6">
                    <p className="text-4xl md:text-5xl lg:text-7xl"><span className="text-[#2C4E80]">Shorten</span> your Links</p>
                    <p className="text-4xl md:text-5xl lg:text-7xl">Boost <span className="text-[#2C4E80]">your</span> reach</p>
                    <p className="text-lg md:text-2xl">Our URL shortner helps you create custom, branded links that are easy to share and track. Get started for free today!</p>

                    <form className="md:flex gap-4 align-center items-center" onSubmit={onSubmit}>
                        <input type="text" id="centered-placeholder" name='originalUrl' placeholder='Enter the link' className="w-full md:text-left md:w-[60%] p-3 rounded-[20px] text-black text-center flex justify-center items-center border-[#2C4E80] border-4 " />
                        <button type="submit" className='w-full md:w-[30%] mt-2 md:mt-0 text-white p-3 rounded-[20px] bg-[#2e4e82] text-lg border-4 border-[#2C4E80]' disabled={isSubmitting} >
                            {isSubmitting ? 'Generating...' : 'Generate Link'}
                        </button>
                    </form>
                    {responseUrl && (
                        <div className="mt-4">
                            <p className="text-lg">Shortened URL: <a href={responseUrl} className="text-blue-500">{responseUrl}</a></p>
                        </div>
                    )}
                    <div className="flex gap-4 align-center items-center">
                        <Link href="/auth/signup">
                            <div className="authOption w-max p-3 h-[6vh] bg-[#2C4E80] rounded-[20px] text-white flex justify-center items-center font-bold">
                                <span>Get started for free</span>
                            </div>
                        </Link>
                        <Link href="/auth/signup">
                            <div className="text-lg text-[#2C4E80]">
                                Learn More
                            </div>
                        </Link>
                    </div>
                </div>
            
                <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center">
                    <div className="imgCnt w-[80%]">
                        <HomeTop height="" width="" className='w-full h-auto'/>
                    </div>
                </div>
            </div>
        
            <div className="flex flex-col md:flex-row w-full bg-[#ebebeb]">
                <div className="md:w-5/12 pt-10 md:p-0 flex justify-center items-center ps-2">
                    <div className="imgCnt w-[80%]">
                        <HomeMid height="" width="" className='w-full h-auto'/>
                    </div>
                </div>
                <div className="md:w-7/12  flex flex-col p-[7vw] gap-11 ">
                    <p className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-wide">Improve User Engagement</p>
                    <p className="text-lg lg:text-2xl">Simplifies sharing long URLs across various platforms, making it easier for users to share content with friends and followers</p>
                    <div className="md:flex flex-row  gap-[9vw] ps-5">
                        <ul style={{ listStyleType: 'disc' }} className="custom-list text-lg lg:text-2xl leading-10">
                            <li className="p-2">Customized branded domain</li>
                            <li className="p-2">QR Codes</li>
                        </ul>
                        <ul style={{ listStyleType: 'disc' }} className="text-lg lg:text-2xl leading-10">
                            <li className="p-2">Dynamic Links</li>
                            <li className="p-2">Customized Landing Pages</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row">
                <div className="md:w-7/12  flex flex-col p-[8vw] gap-11">
                    <p className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-wide">Enhanced Analytics and Tracking (Coming Soon...)</p>
                    <p className="text-lg lg:text-2xl">Track your link analytics and get a profile of how they perform. Get click activity, user geographical location and referral managemnet.</p>
                    <div className="md:flex flex-row ps-5 gap-[9vw] ">
                        <ul style={{ listStyleType: 'disc' }} className="text-lg lg:text-2xl leading-10">
                            <li className="p-2">Event Tracking</li>
                            <li className="p-2">A/B Testing</li>
                        </ul>
                        <ul style={{ listStyleType: 'disc' }} className="text-lg lg:text-2xl leading-10">
                            <li className="p-2">Cross Device Attribute</li>
                            <li className="p-2">Developer Analytics API</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-5/12 pt-10 md:p-0 ps-2 flex justify-center items-center">
                    <div className="imgCnt w-[80%] ">
                        <HomeBottom height="" width="" className='w-full h-auto'/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
