//install redis using npm to use redis db. using npm install redis.
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.URL;

const { Client } = require('redis-om');

const client = new Client();

if(client.open(url))
    console.log('Connected to Redis DB');
else    
    console.log('error connecting Redis DB');

module.exports = client;