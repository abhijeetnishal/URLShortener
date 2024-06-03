"use client"
import FooterLogo from '@/assets/footerLogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const footer = () => {
    return (
        <footer className="flex flex-start md:flex-start w-screen bg-[#ebebeb]">
            <div className=" flex flex-col gap-6 lg:w-1/3 h-[40vh]  items-left p-[10vh]">
                <Image className='w-min h-min' src={FooterLogo} alt="" />
                <p className="text-[#7c91af] md:text-xl sm:text-2xl xs:text-2xl">© 2024 All rights reserved</p>
            </div>
            <div className="hidden md:flex text-lg  w-2/3 h-[40vh] leading-10 md:justify-center md:items-center gap-20">
                <div>
                    <div className="text-2xl text-[#7c91af]">Engagement</div>
                    <Link href="/auth/signup">
                        <div>QR Codes</div>
                    </Link>
                    <Link href="/auth/signup">
                        <div>Dynamic Links</div>
                    </Link>
                    <Link href="/auth/signup">
                        <div>Customised Laing Pages</div>
                    </Link>
                </div>
                <div>
                    <div className="text-2xl text-[#7c91af]">Analytics</div>
                    <Link href="/auth/signup">
                        <div>Link Analytics</div>
                    </Link>
                    <Link href="/auth/signup">
                        <div>Geolocation Tracking</div>
                    </Link>
                </div>
                <div>
                    <div className="text-2xl text-[#7c91af]">About</div>
                    <Link href="/about">
                        <div>About this project</div>
                    </Link>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <Link href="/contact">
                        <div>Contact</div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default footer