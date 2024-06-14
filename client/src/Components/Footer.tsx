import { FooterLogo } from '@/icons/FooterLogo'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-start md:flex-start w-full bg-[#ebebeb]">
            <div className=" flex flex-col md:pr-10 lg:pr-40 items-left ps-5">
                <FooterLogo className="w-full h-auto"/> 
                <p className="text-[#7c91af] text-xl md:text-xl mb-4">© 2024 All rights reserved</p>
            </div>
            <div className="hidden md:flex text-lg  w-2/3  md:mt-10 leading-10 md:justify-end md:items-start md:gap-10 lg:gap-20">
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

export default Footer