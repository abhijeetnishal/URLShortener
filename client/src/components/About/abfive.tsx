"use client"
import about5 from '@/assets/about-5.svg';
import Image from 'next/image';

const abfive = () => {
    return (
        <div className='flex flex-col md:flex-row w-full justify-center items-center'>
            <div className='w-[80%] md:w-1/4 p-[2vw]'>
                <Image src={about5} alt="" width={522} height={482} />
            </div>
            <div className='w-3/4 p-[5vw]'>
                <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>Contribute  </p>
                <p className='text-lg md:text-2xl'>We welcome contributions from the community! Whether you're a seasoned developer or new to coding, there are many ways you can help:</p>
                <ul style={{ listStyleType: 'disc' }} className='text-lg md:text-2xl md:ps-12'>
                    <li className='p-2'>Report Bugs: Found a bug? Let us know by opening an issue on our GitHub.</li>
                    <li className='p-2'>Submit Pull Requests: If you've made improvements or added new features, submit a pull request.</li>
                    <li className='p-2'>Spread the Word: Share Short.URL with your network to help us grow our community.</li>
                </ul>
            </div>
        </div>
    )
}

export default abfive;