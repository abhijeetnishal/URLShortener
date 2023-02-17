const client = require('../model/dbconnect');
const urlSchema = require('../model/urlSchema');
const validUrl = require('valid-url');
const uniqueString = require('../utils/utils')

//CRUD operation
// const getAllUrls = async (req, res) => {
//     try{
//         const urlRepository = client.fetchRepository(urlSchema);
//         await urlRepository.createIndex();
//         const allurls = await urlRepository.search().returnAll();
//         if(allurls==null)
//             res.status(404).json('not found');
//         else    
//             res.status(200).json(allurls);
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message:"something went wrong"});
//     }
// }

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
    const {originalURL} = req.body;
    const shortURL = uniqueString.generateBase62String();
    //console.log(shortURL);

    if(validUrl.isUri(originalURL)){
        try{
            client.set(shortURL, originalURL);
            res.send(`Shortened URL: http://localhost:3000/${shortURL}`);
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

// const updateUrl = async (req, res) => {
//     try{
//         const urlRepository = client.fetchRepository(urlSchema)
//         const url = await urlRepository.fetch(req.params.id)
      
//         Object.entries(req.body).forEach(([key, val]) => {
//           url[key] = val
//         })
      
//         const urlId = await urlRepository.save(url)
//         //res.body = { urlId, url }

//         const shortUrl = url.shortURL;
//         const originalUrl = url.originalURL;
//         res.status(200).json({shortUrl, originalUrl});
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message:"something went wrong"});
//     }
// }

// const deleteUrl = async (req, res) => {
//     try{
//         const urlId = req.params.id
//         const urlRepository = client.fetchRepository(urlSchema)
//         await urlRepository.remove(urlId)
//         //res.body = { urlId }
//         res.status(200).json({message:'deleted'});
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message:"something went wrong"});
//     }
// }

module.exports = {
    // getAllUrls,
    getSpecificUrl,
    createUrl,
    //updateUrl,
    //deleteUrl
}
