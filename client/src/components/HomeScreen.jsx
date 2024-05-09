import React, { useState, useEffect } from 'react';
import '../Styles/homeScreen.css';
import Loading from './Loading';
import link from '../assets/Vector.png';
import http from '../assets/http.png';
import copy from '../assets/copy.png';

function HomeScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [originalUrl, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    const isValidURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (isValidURL(originalUrl)) {
            const response = await fetch(process.env.REACT_APP_SERVER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalUrl }),
            });

            const data = await response.json();
            setShortUrl(data);
        } else {
            setShortUrl('Please Enter a Valid URL');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => setShowTooltip(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip]);

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
                    {isLoading ? <Loading /> : (
                        <>
                            {shortUrl === 'Please Enter a Valid URL' && <div className='hiddenshortedUrl'>Enter a valid URL</div>}
                            {shortUrl === 'not a valid url' && <div className='hiddenshortedUrl'>Not a valid URL</div>}
                            {shortUrl !== '' && (
                                <div className='shortedUrl'>
                                    <div className='shortUrlText'>Short Link: </div>
                                    <div className='sUrl'>{shortUrl}</div>
                                    <div className='clip'>
                                        {showTooltip && <div className="tooltip">Copied!</div>}
                                        <button title='Copy' className='copybtn' onClick={() => {
                                            setShowTooltip(true);
                                            navigator.clipboard.writeText(shortUrl);
                                        }}>
                                            <img className='copy-image' src={copy} alt="" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;