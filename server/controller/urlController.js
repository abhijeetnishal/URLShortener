const client = require('../model/dbconnect');
const validUrl = require('valid-url');
const uniqueString = require('../utils/utils')

 
const getSpecificUrl = async (req, res) => {
    try{
        const shortURL = req.params.shortURL;
        const originalUrl = await client.get(shortURL);
        if(originalUrl) {
            res.redirect(originalUrl);
        } 
        else{
            res.status(404).send('URL not found');
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

const createUrl = async (req, res) => {
    const originalURL = req.body.originalUrl;
    //console.log(originalURL);
    const shortURL = uniqueString.generateBase62String();

    if(validUrl.isUri(originalURL)){
        try{
            client.set(shortURL, originalURL);
            res.status(200).json(`Shortened URL: https://urlsrtner.onrender.com/${shortURL}`);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"something went wrong"});
        }
    }
    else{
        res.status(400).json('Invalid Original Url');
    }
}


module.exports = {
    getSpecificUrl,
    createUrl
}
