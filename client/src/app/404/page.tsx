// src/app/404/page.tsx

import Link from "next/link";
import { Page404Icon } from "@/icons/404Icon";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 p-6 text-white">
      {/* <Page404Icon /> */}
      <h1 className="mt-6 text-2xl md:text-4xl font-bold text-notf">
        404 Not Found
      </h1>
      <p className="mt-4 text-sm md:text-lg text-notf">
        This link does not exist.
      </p>
      <Link href="/" className="mt-4 p-2 rounded-md bg-blue-500">
        Back to Home
      </Link>
    </div>
  );
}
