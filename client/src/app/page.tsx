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
import './Ui.css'
export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseUrl, setResponseUrl] = useState("");
  const [message, setMessage] = useState(false);
  const [menu,setMenu]=useState(false)
  let count=0
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
function handleModechange(){
  if(count===0){
    document.body.classList.toggle('light')
    count++
  }
  else{
    count=0
  }
}
  return (
<>
<div className="container">
        <div className="nav">
            <div id="ball_container1">
                <div className="border"></div>
                <div className="ball1"></div>
                </div>
            <div className="logo">
                <a href="#">Short.url</a>
            </div>
            <div className="links">
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Developers</a>
            </div>
            <div style={{display:"flex",gap:'1rem',alignItems:'center'}}>
            <div className="wrap-check-14" onClick={()=>handleModechange()}>
                <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
                </label>
            </div>
            <div className="cta">
                <button className="log-in">Log In</button>
                <button className="sign-up">Sign Up</button>
            </div>
            <div id="menu" className={menu?"close":""} onClick={()=>setMenu(!menu)}>
                <div className="line"></div>
            </div>
            </div>
            
        </div>
        <div id="mobile_nav" className={menu?"active":"hidden"}>
            <p>Short.url</p>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href='#'>Log In</a>
            <a href="#">Sign Up</a>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div id="title_container">
        <div className="title">
        <h1><span className="blue">SHORTEN</span> <span className="dynamic_color">URLS</span></h1>
        <h2><span className="blue">IN</span> <span className="dynamic_color">ONE</span> <span className="blue">CLICK</span></h2>
        </div>
        <div className="design">
            <div className="line"></div>
        <div className="singup_line1"></div>
        <div className="singup_line2"></div>
            <div className="box">
                <div id="ball_container1">
                    <div className="border"></div>
                    <div className="ball1"></div>
                    </div>
            </div>
        </div>
       </div>
       <div className="line5"></div>
       <form onSubmit={onSubmit} id="input_design_container">
       <div className="input">
       <div className="line6"></div>
        <div className="line7"></div>
        <input
            type="url"
            name="originalUrl"
            required
            placeholder="Enter your long link here"
          />
    </div>
    <div className="button_con">
    <button
            type="submit" className="button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Shortening..." : "Shorten It!"}
          </button>
    </div>
    </form>

        {responseUrl.length > 0 && (
          <div className="mt-4">
            <p className="flex justify-center font-semibold mb-3">
              Shortened URL
            </p>
            <div className="flex justify-center text-white py-2 -translate-x-2 px-3 border bg-blue-400 border-blue-600 rounded">
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
            {message && (
                <div className="relative left-50 top-5">
                  <div>✔ Copied!</div>
                </div>
              )}
          </div>
        )}
        
        </div>
        <footer>
        <div className="features">
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Generate QR Codes
            </div>
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Link Analytics
            </div>
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Custom Domains
            </div>
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Bulk Actions
            </div>
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Link Management
            </div>
            <div className="feature">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 3.992a.75.75 0 0 1-1.071 0l-2.5-2.5a.75.75 0 0 1 1.071-1.05l2.5 2.5z"/>
                </svg></i>
                Time Bound Links
            </div>
        </div>
        <div className="footer">
            &copy; short.url 2024
            <span style={{float: 'right'}}>25M+ shortened URLs</span>
        </div>
        </footer>
        </>
  );
}
