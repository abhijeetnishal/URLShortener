# URL Shortener

* A URL shortener is an online service that gives you a new, very short URL that is easier to share.
* Building the simple URL shortener application using Node as a backend and Redis as a Database.

## How URL Shortener Works?
* URL shortener works in two ways:
    1. Generate a short URL based on the given URL.
    2. Redirect short URL to original URL. <br/>

    To short URL, we need to generate a random hash and assign it to the original URL and store it in our database.<br/>
    When someone requests the short URL, the system needs to look up in the database and if found, return the original URL for redirection.

## Why Redis?
* Redis is in-memory data store used as a database, cache, message broker and queue (RAM based - access to RAM is faster than disks(SSD, HDD)).
* Because Redis is made for high volume systems like a URL shortener. 
* Redis is a key value-based database which is a perfect use case for applications like a URL shortener.

## Pre-requisites
* I am using Node as our backend and Redis as a database. 
* Visit https://redis.com/redis-enterprise-cloud/overview/ to create account.
* Create database after taking free subscription.
* Download client application Medis to access database.

## Project Installation Process:
* Clone the repo using cammand:
  - git clone https://github.com/abhijeetnishal/URLShortener.git
* Move to server directory:
  - cd server
* To install dependencies run the cammand:
  - npm install
* Now go to .env file and paste your redis url from redis cloud.
* Start the server using command:
  - npm run dev
* Now move to client folder:
  - cd ../client
* start the react app using command:
  - npm start


