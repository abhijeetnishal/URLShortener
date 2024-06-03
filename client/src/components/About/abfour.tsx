"use client"
import about4 from '@/assets/about-4.svg';
import Image from 'next/image';

const abfour = () => {
    return (
        <div className=' flex flex-col-reverse md:flex-row w-full justify-center items-center'>

            <div className='w-3/4 p-[5vw]'>
                <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>How It Works</p>
                <p className='text-lg md:text-2xl'>Using Short.URL is straightforward:</p>
                <ul style={{ listStyleType: 'disc' }} className='text-lg md:text-2xl md:ps-12'>
                    <li className='p-1'>Enter Your URL: Paste your long URL into the input field on the homepage.</li>
                    <li className='p-1'>Shorten: Click the "Shorten" button to generate your short link.</li>
                    <li className='p-1'>Share: Copy and share your new short URL anywhere.</li>
                </ul>
            </div>
            <div className='w-[80%] md:w-1/4 p-[1vw]'>
                <Image src={about4} alt="" width={522} height={482} />
            </div>
        </div>
    )
}
export default abfour;