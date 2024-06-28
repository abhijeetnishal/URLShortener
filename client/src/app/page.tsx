// pages/index.js or pages/home.js
"use client";
import { CopyButtonIcon } from "@/icons/CopyButtonIcon";
import GmailIcon from "../icons/GmailIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useThemeStore from "@/store/themeStore";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseUrl, setResponseUrl] = useState("");
  const [message, setMessage] = useState(false);

  const { theme } = useThemeStore();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    //validating the given url
    const givenUrl = data.get("originalUrl");

    if (givenUrl) {
      try {
        setIsSubmitting(true);
        setResponseUrl("");

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ originalUrl: data.get("originalUrl") }),
        });

        if (response.status == 429) {
          toast.error("Too Many Requests. Please try again later.");
        } else if (response.status === 400) {
          toast.error("Invalid URL");
        }

        // Assuming response is JSON
        const responseData = await response?.json();
        setResponseUrl(responseData);
      } catch (error) {
        console.log("error :", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className={`${theme}`}>
      <Toaster position="top-center" />
      <main className="h-[92dvh] flex flex-col items-center justify-center mx-auto text-inv">
        <Image src={"/http.png"} alt="http" height={"50"} width={"100"} />
        <h3 className="font-semibold text-xl mb-2">Tired of big URLs ?</h3>
        <h1 className="font-bold text-3xl sm:text-4xl">
          Make Your <span className="text-blue-500">URL</span> Short
        </h1>

        <form onSubmit={onSubmit}>
          <input
            type="url"
            name="originalUrl"
            id=""
            className="rounded-l-full py-2 px-4 w-[65vw] sm:w-80 border-2 focus:outline-none bg-ninv"
            required
            placeholder="Enter your long link here"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-2 -translate-x-2 rounded-r-full border-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Shortening..." : "Shorten It!"}
          </button>
        </form>

        {responseUrl.length > 0 && (
          <div className="mt-4">
            <p className="flex justify-center font-semibold mb-3">
              Shortened URL
            </p>
            <div className="flex justify-center text-white py-2 -translate-x-2 px-3 border bg-blue-400 border-blue-600 rounded-full">
              <Link
                href={responseUrl}
                target="_blank"
                className="white underline mr-4"
              >
                {responseUrl}
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(responseUrl);
                  setMessage(true);
                  setTimeout(() => {
                    setMessage(false);
                  }, 1000);
                }}
              >
                <CopyButtonIcon />
              </button>
              {message && (
                <div className="absolute left-56 top-12">
                  <div className="ml-2 px-1 dark:text-white text-black">
                    Copied!
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(responseUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> {/* Added WhatsApp share button */}
              </a>
              <a
                href={`mailto:?subject=Check this URL&body=${encodeURIComponent(
                  responseUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GmailIcon /> {/* Added Gmail share button */}
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  responseUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> {/* Added LinkedIn share button */}
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
