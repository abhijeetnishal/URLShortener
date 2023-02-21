const client = require('../model/dbconnect');
const validUrl = require('valid-url');
const uniqueString = require('../utils/utils')

 
const getSpecificUrl = async (req, res) => {
    try{
        //receives json data from client.
        const shortURL = req.params.shortId;

        //get original url from unique key as it is mapped with original url in redis.
        const originalUrl = await client.get(shortURL);

        //if original url is present in redis then redirect it.
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
    //receives json data from client
    const originalURL = req.body.originalUrl;

    //generate 7 digit unique code using base-62 encoding
    const shortURL = uniqueString.generateBase62String();

    //validate the original url received from client
    if(validUrl.isUri(originalURL)){
        try{
            //store data(shorturl, longurl) as (key, value) on redis
            client.set(shortURL, originalURL);
            
            //send shorturl to client
            res.status(200).json(`https://urlsrtner.onrender.com/${shortURL}`);
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"something went wrong"});
        }
    }
    //if longurl is not a valid.
    else{
        res.status(400).json('Please Enter a Valid URL');
    }
}


module.exports = {
    getSpecificUrl,
    createUrl
}