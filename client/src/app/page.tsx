"use client";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseUrl, setResponseUrl] = useState("");

  // Handle submit
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      setIsSubmitting(true);
      setResponseUrl("");
      setResponseMessage("");
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER || "http://localhost:8080"}/`,
        {
          originalUrl: data.get("originalUrl"),
        }
      );

      setResponseUrl(response.data);
      console.log(setResponseUrl);
    } catch (error) {
      console.log(error);
      setResponseMessage("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
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
        </div>
      )}
    </main>
  );
}
