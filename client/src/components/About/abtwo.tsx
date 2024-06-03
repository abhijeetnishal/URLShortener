"use client"
import about2 from '@/assets/about-2.svg'
import Image from 'next/image'

const abtwo = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row w-full justify-center items-center'>
            <div className='w-3/4 p-[5vw]'>
                <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>Our Mission</p>
                <p className='text-lg md:text-2xl'>Our mission is to provide a powerful yet easy-to-use tool that empowers users to take control of their links. We believe in the power of open source and the community-driven development process. By making [Project Name] open source, we invite developers from around the world to contribute, improve, and innovate, ensuring that our tool remains cutting-edge and accessible to everyone.</p>
            </div>
            <div className='w-[80%] md:w-1/4 p-[2vw]'>
                <Image src={about2} alt="" width={522} height={482} />
            </div>
        </div>
    )
}
export default abtwo;