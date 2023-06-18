import '../styles/homeScreen.css';
import Loading from "./Loading";
import link from '../assets/Vector.png'
import http from '../assets/http.png'
import copy from '../assets/copy.png'
import { useState } from 'react';

function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);
  
    const [originalUrl, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    (async function startServer(){
      await fetch('http://localhost:4000/',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
    })();

    const handleSubmit = async(e) => {
        setIsLoading(true);
        e.preventDefault();
        const response = await fetch('http://localhost:4000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( {originalUrl} ),
      });
  
      //console.log(response);
      const data = await response.json();
      
      setShortUrl(data);
      setIsLoading(false)   // Hide loading screen 
    }
  
    return (
      <div className="homeScreen">
          <div className='headerClass'>
            <div className='subheader'>
              <img className='link' src={link} alt="Logo" />
              <div className='shorturl'>SHORT.URL</div> 
            </div>
          </div>
          <div className='mainClass'>
            <div className='sub-main-container'>
              <img className='http' src={http} alt="Logo" />
              <div className='text-1'>Tired of big URLs ?</div>
              <div className='text-2'>Make Your<div className='url'>URL</div> Short </div>
              <div className='containerClass'>
                <input className='originalUrlContainer' type="text" value={originalUrl} onChange={(e) => setUrl(e.target.value)} placeholder='Paste a link to shorten it'></input>
                <button type='submit' className='shortBtn' onClick={handleSubmit} disabled={isLoading}>Shorten It!</button>
              </div>
            </div>
              <div className='hiddenContainer'>
              {isLoading ? (<Loading/>) : (
              <div className='hiddenContainer'>
              {shortUrl==='Please Enter a Valid URL' ? (
                <div className='hiddenshortedUrl'>enter a valid URL</div>
              ): shortUrl!=='' ? (
              <div className='shortedUrl'>
              <div className='shortUrlText'>Short Link: </div> 
              <div className='sUrl'> {shortUrl}</div>
              <div className='clip'>
              {showTooltip && <div className="tooltip">Copied!</div>}
              <button title='Copy' className='copybtn' onClick={() => {
                    setShowTooltip(true)
                    navigator.clipboard.writeText(shortUrl)
                    setTimeout(() => setShowTooltip(false), 2000)
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    version="1.1"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"></path>
                      <path d="M38.603 13.206H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM38.603 21.333H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM38.603 29.46H16.254a1.015 1.015 0 100 2.032h22.35a1.015 1.015 0 100-2.032zM28.444 37.587h-12.19a1.015 1.015 0 100 2.032h12.19a1.015 1.015 0 100-2.032z"></path>
                    </g>
                  </svg>
              </button>
              </div>
              </div>
              ):(
                <div className='empty'></div>
              )
              }
              </div>)
              }
              </div>
          </div>
      </div>
    );
  }
  
  export default HomeScreen;