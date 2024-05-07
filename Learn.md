## Introduction

This project is a URL Shortener application that allows users to enter a long URL, which is then shortened to a much shorter URL that can be easily shared. The shortened URL is redirectable to the original long URL.
<br>

## Table of Contents

- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**How to Contribute**](#how-to-contribute)
- [**Code Style**](#code-style)
  <br>

## Technologies
The project utilizes the following technologies:

- Backend:
  - NodeJS: A JavaScript runtime for building server-side applications.
  - ExpressJS: A lightweight framework for building web applications.
  - MongoDB: A document-oriented NoSQL database.
    <br>

- Frontend:
  - React.js: A JavaScript library for building ui components.

<br>

## Application Setup

To setup the application locally, follow these steps:
1. Star this repo to support my work and Fork this repo to create your own copy to work from.
2. Clone the repository you forked to your local machine using:

   ```bash
      git clone <your_forked_repo_url>
   ```

3. Navigate to the Server directory using command "cd server" and create a .env file and copy contents of .env.example file to .env file and add all secret keys to setup MongoDB database.
4. Install dependencies in server directory of project:

   ```bash
      npm install
   ```

5. Start the server using command:

   ```bash
      npm start
   ```

6. Now navigate to client directory of project using commands:

   ```bash
      cd ../client
   ```

7. Install dependencies in client directory of project:

   ```bash
      npm install
   ```

8. Start the application using command:

   ```bash
      npm start
   ```

9. Open http://localhost:3000 in your browser to see the application.

<br>

## How to Contribute

Contributions are welcome! If you would like to contribute to the project, please follow these steps:
1. Clone and setup this application locally by following above application setup steps.

2. Create a new branch for the issue you assigned to work on, using below command:

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
