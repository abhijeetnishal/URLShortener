"use client"
import about1 from '@/assets/about-1.svg';
import Image from 'next/image';

const abone = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center'>
            <div className='w-[70%] md:w-1/4 p-[2vw]'>
                <Image src={about1} alt="" width={522} height={482} />
            </div>
            <div className='w-3/4 p-[5vw]'>
                <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>About Us</p>
                <p className='text-lg md:text-2xl'>Welcome to Short.URL, an open-source URL shortener designed to provide fast, reliable, and customizable link shortening services. Whether you're sharing links on social media, in emails, or in chat messages, our service makes it easy to transform those lengthy URLs into sleek and manageable short links.</p>
            </div>
        </div>
    )
}

export default abone;