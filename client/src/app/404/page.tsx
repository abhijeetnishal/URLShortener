import Link from "next/link"
import { Page404Icon } from "@/icons/Page404Icon"

export default function Page() {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
            <Page404Icon/>
            <h1 className="mt-6 text-2xl md:text-4xl font-bold">404 Not Found</h1> 
            <p className="mt-4 text sm md:text-lg">This link does not exist.</p>
            <Link href="/" className="mt-4 p-2 rounded-md bg-blue-500">
                Back to Home
            </Link>
        </div>
    )
}