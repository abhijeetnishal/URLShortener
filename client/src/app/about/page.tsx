import { About1 } from '@/icons/Person';
import { About2 } from '@/icons/ColorfulRocket'
import { About3 } from '@/icons/ThinkingGirl';
import { About4 } from '@/icons/TeamWork';
import { About5 } from '@/icons/Robot';


const About = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row w-full justify-center items-center'>
                <div className=' md:flex md:justify-center'>
                    <About1 className= "w-full h-auto"/>
                </div>
                <div className='w-3/4 p-[5vw]'>
                    <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>About Us</p>
                    <p className='text-lg md:text-2xl'>Welcome to Short.URL, an open-source URL shortener designed to provide fast, reliable, and customizable link shortening services. Whether you're sharing links on social media, in emails, or in chat messages, our service makes it easy to transform those lengthy URLs into sleek and manageable short links.</p>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row w-full justify-center items-center'>
                <div className='w-3/4 p-[5vw]'>
                    <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>Our Mission</p>
                    <p className='text-lg md:text-2xl'>Our mission is to provide a powerful yet easy-to-use tool that empowers users to take control of their links. We believe in the power of open source and the community-driven development process. By making [Project Name] open source, we invite developers from around the world to contribute, improve, and innovate, ensuring that our tool remains cutting-edge and accessible to everyone.</p>
                </div>
                <div className='md:flex md:justify-center'>
                    <About2 className="w-full h-auto"/>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full justify-center items-center'>
                <div className='w-[80%] md:w-1/4 flex justify-center items-center'>
                    <div className='md:flex md:justify-center'>
                        <About3 className="w-full h-auto"/>
                    </div>
                </div>
                <div className='w-3/4 p-[5vw]'>
                    <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>Why Choose Short.URL?</p>
                    <ul style={{ listStyleType: 'disc' }} className='text-lg md:text-2xl md:ps-12'>
                        <li className='ps-1 mb-3 md:p-3'>Open Source and Free: Our project is fully open source, which means it's free to use, and anyone can contribute to its development.</li>
                        <li className='ps-1 mb-3 md:p-3'>Community-Driven: Join a vibrant community of developers and users who are dedicated to improving the project.</li>
                        <li className='ps-1 mb-3 md:p-3'>Secure and Reliable: Built with security in mind, ensuring your data is protected.</li>
                    </ul>
                </div>
            </div>

            <div className=' flex flex-col-reverse md:flex-row w-full justify-center items-center'>
                <div className='w-3/4 p-[4vw]'>
                    <p className='text-4xl md:text-6xl text-[#2C4E80] mb-3 md:mb-12'>How It Works</p>
                    <p className='text-lg md:text-2xl'>Using Short.URL is straightforward:</p>
                    <ul style={{ listStyleType: 'disc' }} className='text-lg md:text-2xl md:ps-12'>
                        <li className='p-1'>Enter Your URL: Paste your long URL into the input field on the homepage.</li>
                        <li className='p-1'>Shorten: Click the "Shorten" button to generate your short link.</li>
                        <li className='p-1'>Share: Copy and share your new short URL anywhere.</li>
                    </ul>
                </div>
                <div className=' md:flex md:justify-center'>
                    <About4 className="w-full h-auto"/>
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full justify-center items-center'>
                <div className='md:flex md:justify-center'>
                    <About5 className="w-full h-auto"/>
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
        </div>  
    )
}

export default About;