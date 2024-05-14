"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseUrl, setResponseUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);//state to handle whether url is copied or not to make changes in UI

  // Handle submit
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    try {
      setIsSubmitting(true);
      setResponseUrl("");
      setIsCopied(false)

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: data.get("originalUrl") }),
      });

      // Assuming response is JSON
      const responseData = await response.json();

      setResponseUrl(responseData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  //function to copy url on Click
  const copyToClipboard = () =>{
    window.navigator.clipboard.writeText(responseUrl);
    setIsCopied(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 max-w-6xl mx-auto bg-">
      <Image src={"/http.png"} alt="http" height={"50"} width={"100"} />
      <h3 className="font-semibold text-xl mb-2">Tired of big URLs ?</h3>
      <h1 className="font-bold text-4xl">
        Make Your <span className="text-blue-500">URL</span> Short
      </h1>
      {/* Shorten link form */}
      <form onSubmit={onSubmit}>
        <input
          type="url"
          name="originalUrl"
          id=""
          className="rounded-l-full py-2 px-4 w-80 border-2 focus:outline-none"
          required
          placeholder="Enter your long link here"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 -translate-x-2 rounded-r-full border-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Shortening..." : "Shorten It!"}
        </button>
      </form>

      {responseUrl.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold">Shortened URL:</p>
          <a
            href={responseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {responseUrl}
          </a>
          <button className={isCopied?"bg-green-500 rounded-md pt-2 pb-2 p-3 ml-5":"bg-blue-500 rounded-md pt-2 pb-2 p-3 ml-5"} onClick={copyToClipboard}>{isCopied?'Copied':'Copy Url'}</button>
        </div>
      )}
    </main>
  );
}
