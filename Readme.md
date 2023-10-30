# URL Shortener App

## Introduction
This is a web application for shortening URLs, created using ReactJS, NodeJS, ExpressJS, and MongoDB. The app allows users to enter a long URL, which is then shortened to a much shorter URL that can be easily shared. The shortened URL is redirectable to the original long URL. The app is live and can be accessed at the provided URL.

<br>

## Features
The app has the following features:
  1. URL shortening: Users can enter a long URL and get a shortened URL that can be easily shared.
  2. Redirects: The shortened URL redirects to the original long URL.

<br>

## Technologies
The app is built using the following technologies:

- ReactJS: A JavaScript library for building user interfaces.
- NodeJS: A JavaScript runtime for building server-side applications.
- ExpressJS: A lightweight framework for building web applications.
- MongoDB: A document-oriented NoSQL database.

<br>

## Project Installation Process:
1. Star this repo to support my work and Fork the repo to create your own copy to work from.
2. Clone the repo using cammand:
  - git clone https://github.com/abhijeetnishal/URLShortener.git
3. Move to server directory:
```bash
    cd server
```
4. To install dependencies run the below cammand:
```bash
    npm install
```
5. Create a .env file in root directory of server and copy contents of .env.example file to .env file and add MongoDB URI to setup database.
6. Start the server using command:
```bash
    npm run dev
```
7. Now move to client folder:
```bash
    cd ../client
```
8. Create a .env file in root directory of client and copy contents of .env.example file to .env file and add your deployed backend URL.
9. start the react app using command:
```bash
    npm start
```

<br>

## Usage
To use the app, follow these steps:
1. Enter a long URL in the input field and click the "Shorten" button.
2. Copy the shortened URL and share it with others.
3. To view analytics data for a shortened URL, click the "Analytics" button next to the URL in the list.