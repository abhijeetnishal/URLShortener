# URL Shortener App

## Introduction
This project is a URL Shortener application that allows the users to enter a long URL, which is then shortened to a much shorter URL that can be easily shared. The shortened URL is redirectable to the original long URL.
<br>

## Table of Contents

- [**Features**](#features)
- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**How to Contribute**](#how-to-contribute)
- [**Code Style**](#code-style)
- [**Usage**](#usage)
- [**Contact**](#contact)
  <br>

## Features

1. URL shortening: Users can enter a long URL and get a shortened URL that can be easily shared.
2. Redirects: The shortened URL redirects to the original long URL.

<br>

## Technologies

The project utilizes the following technologies:

- Backend:

  - NodeJS: A JavaScript runtime for building server-side applications.
  - ExpressJS: A lightweight framework for building web applications.
  - MongoDB: A document-oriented NoSQL database.
    <br>

- Frontend:
  - React.js: A JavaScript library for building UI components.

<br>

## Application Setup

To set up the application locally, follow these steps:

1. Star and Fork this repo to create your copy to work from.
2. Clone the repository you forked to your local machine using:

   ```bash
      git clone <your_forked_repo_url>
   ```

3. Navigate to the Server directory using the command "cd server" and create a .env file and copy the contents of .env.example file to .env file and add all secret keys to set up the MongoDB database.
4. Install dependencies in the server directory of the project:

   ```bash
      npm install
   ```

5. Start the server using the command:

   ```bash
      npm start
   ```

6. Now navigate to the client directory of the project using commands:

   ```bash
      cd ../client
   ```

7. Install dependencies in the client directory of the project:

   ```bash
      npm install
   ```

8. Start the application using the command:

   ```bash
      npm start
   ```

9. Open http://localhost:3000 in your browser to see the application.

<br>

## How to Contribute

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Clone and set up this application locally by following the above application setup steps.

2. Create a new branch for the issue you assigned to work on, using the below command:

   ```bash
      git checkout -b your_branch_name
   ```

3. Make your changes to the code.
4. Once you are satisfied with your changes, commit them with a descriptive commit message using below command:

   ```bash
      git add .
      git commit -m "feat: Add feature X"
   ```

5. Push your changes to your forked repository:

   ```bash
      git push origin your_branch_name
   ```

6. Create a pull request by clicking the "Pull request" button on the original repository page.
7. Wait for the project maintainer to review your pull request and provide feedback.
8. If your pull request is accepted, it will be merged into the main branch of the project. Congratulations, you've contributed to the project!

<br>

## Code Style

- Please make sure to follow the existing code style and formatting conventions when making contributions to the project.

<br>

## Usage

To use the app, follow these steps:

1. Enter a long URL in the input field and click the "Shorten" button.
2. Copy the shortened URL and share it with others.

## Contact

- If you have any questions or suggestions with the app, please feel free to contact on LinkedIn: https://www.linkedin.com/in/abhijeetkumar7565/
