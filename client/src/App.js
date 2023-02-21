import './App.css';
import link from './assets/Vector.png'
import http from './assets/http.png'
import copy from './assets/copy.png'
import { useState } from 'react';

function App() {
  const [originalUrl, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const handleSubmit = async(e) => {
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
    console.log(data);
    setShortUrl(data);
  }

  return (
    <div className="App">
        <div className='headerClass'>
          <div className='subheader'>
            <img className='link' src={link} alt="Logo" />
            <div className='shorturl'>SHORT.URL</div> 
          </div>
        </div>
        <div className='mainClass'>
          <img className='http' src={http} alt="Logo" />
          <div className='text-1'>Tired of big URLs ?</div>
          <div className='text-2'>Make Your <div className='url'>URL</div> Short </div>
          <div className='containerClass'>
            <input className='originalUrlContainer' type="text" value={originalUrl} onChange={(e) => setUrl(e.target.value)}></input>
            <button type='submit' className='shortBtn' onClick={handleSubmit}>Shorten It!</button>
          </div>
        </div>
        <div className='hiddenContainer'>
        {shortUrl ? (
        <div className='shortedUrl'>
          <div className='shortUrlText'>Short Link: </div> 
          <div className='sUrl'> {shortUrl}</div>
          <img className='copy' src={copy} alt='Logo'/>
        </div>
        ):
        <div className='hiddenshortedUrl'>
        <div className='sUrl'> {shortUrl} </div>
        </div>
        }
        </div>
    </div>
  );
}

export default App;
