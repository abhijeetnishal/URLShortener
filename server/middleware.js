
const https=require("node:https")

async function checkWebsite(url) {
    try {
        const response = await new Promise((resolve, reject) => {
            const options = {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0', // Set a User-Agent header to mimic a real web browser
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Connection': 'keep-alive',
                }
            };
            https.get(url,options, (res) => {
                resolve(res);
            }).on("error", (e) => {
                reject(e);
            });
        });
        return response.statusCode === 200;
    } catch (error) {
        console.error("Error checking website:", error);
        return false;
    }
}



exports.validateUrl=async(req,res,next)=>{
    try{
        const { originalUrl } = req.body;
        if(!originalUrl){
            return res.status(400).json({
                message:"provide the url",
                success:false,
            })
        }
    const check = await checkWebsite(originalUrl);
    
    if(check){
        next();
    }
    else{
        return res.status(404).json("url is not valid ")
    }
    

    }
    catch(err){
        console.log("err while validating the url",err);
        return res.status(401).json("err while validating the url")
    }
}
