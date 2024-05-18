"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseUrl, setResponseUrl] = useState("");
  const [message, setmessage] = useState(false);
  // Handle submit
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
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
        toast.error('Too Many Requests. Please try again later.');
      }
    
      // Assuming response is JSON
      const responseData = await response.json();
    
      setResponseUrl(responseData);
    } catch (error) {
      console.log("error :",error);  
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
    <Toaster position="top-center"/>
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 max-w-6xl mx-auto bg-">
      <Image src={"/http.png"} alt="http" height={"50"} width={"100"} />
      <h3 className="font-semibold text-xl mb-2">Tired of big URLs ?</h3>
      <h1 className="font-bold text-3xl sm:text-4xl">
        Make Your <span className="text-blue-500">URL</span> Short
      </h1>
      {/* Shorten link form */}
      <form onSubmit={onSubmit}>
        <input
          type="url"
          name="originalUrl"
          id=""
          className="rounded-l-full py-2 px-4 w-[65vw] sm:w-80 border-2 focus:outline-none"
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
          <p className="font-semibold">Shortened URL:</p>
          <div className="bg-blue-500 text-white py-4 px-4 -translate-x-2 rounded-full border-2" style={{ display: 'flex', alignItems: 'center' }}>
  <a
    href={responseUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="white underline"
    style={{ marginRight: '1rem' }}
  >
    {responseUrl}
  </a>
  <Image src={"/copyi.svg"} alt="copy" width={"20"} style={{cursor:"pointer",marginLeft:"10px"}} onClick={()=>{
                       navigator.clipboard.writeText(responseUrl); 
                       setmessage(true)
                       setTimeout(() => {
                        setmessage(false);
                      }, 1000);
          }}/>
           {message && (
            <div className="ml-2 p-2 bg-gray-800 text-white rounded">
              Copied!
            </div>
          )}
</div>

          
        </div>
      )}
    </main>
    </>
  );
}