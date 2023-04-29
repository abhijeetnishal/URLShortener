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

    (async function startServer(){
      await fetch('https://urlsrt.vercel.app/',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
    })();

    const handleSubmit = async(e) => {
        setIsLoading(true);
        e.preventDefault();
        const response = await fetch('https://urlsrt.vercel.app/', {
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
              <button className='copybtn' onClick={() => {navigator.clipboard.writeText(shortUrl)}}>
                <img className='copy' src={copy} alt='Logo'/> 
              </button>
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