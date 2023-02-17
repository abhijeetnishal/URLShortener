//install redis-om using npm to use redis db. 
const url = process.env.URL;

const { Client } = require('redis-om');

const client = new Client();

if(client.open(url))
    console.log('Connected to Redis DB');
else    
    console.log('error connecting Redis DB');

module.exports = client;