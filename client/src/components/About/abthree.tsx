"use client"
import about3 from '@/assets/about-3.svg';
import Image from 'next/image';

const abthree = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center'>
            <div className='w-[80%] md:w-1/4 p-[2vw]'>
                <Image src={about3} alt="" width={522} height={482} />
            </div>
            <div className='w-3/4 p-[5vw]'>
                <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>Why Choose Short.URL?</p>
                <ul style={{ listStyleType: 'disc' }} className='text-lg md:text-2xl md:ps-12 '>
                    <li className='ps-1 mb-3 md:p-3'>Open Source and Free: Our project is fully open source, which means it's free to use, and anyone can contribute to its development.</li>
                    <li className='ps-1 mb-3 md:p-3'>Community-Driven: Join a vibrant community of developers and users who are dedicated to improving the project.</li>
                    <li className='ps-1 mb-3 md:p-3'>Secure and Reliable: Built with security in mind, ensuring your data is protected.</li>
                </ul>
            </div>
        </div>
    )
}

export default abthree;