<a id="top"></a>
<h1 align="center">URL Shortener App</h1>
<h3 align="center">

<!------------------------------------------------------------------------ABOUT US------------------------------------------------------------------------------>
<h2>⚡ About Us: </h2>
This project is a URL Shortener application that allows users to enter a long URL, which is then shortened to a much shorter URL that can be easily shared. The shortened URL is redirectable to the original long URL.

<hr>

<div>
<h2> ⚡Tech Stack:</h2> <br>
  <div>
    <img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
    <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
    <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    <img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>
    <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/>
    <img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB"/>
       </div>
</div>
<hr>

## ⚡Table of Contents:

- [**Features**](#features)
- [**Technologies**](#technologies)
- [**Application Setup**](#application-setup)
- [**Run application using script**](#run-application-using-script)
- [**How to Contribute**](#how-to-contribute)
- [**Usage**](#usage)
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

   - Next.js: A React framework for building server-side rendered and statically generated web applications.
   - TypeScript: TypeScript is used throughout the project to ensure strong type safety and enhance the development process.
   - Tailwind CSS: Tailwind CSS is used for styling the frontend, offering a utility-first approach and speeding up the design process.

<br>

## Application Setup

To setup the application locally, follow these steps:

1. Star and Fork this repo to create your own copy to work from.
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

6. Now Navigate to the client directory using command "cd client" and create a .env.local file and copy contents of .env.sample file to .env.local file and add server URL.

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

### Run application using script:

1. Run mongodb database locally if not running, Open Git Bash in root directory of your project where Setup.sh file is present and run the below command:

   ```bash
      ./script.sh
   ```

2. This will setup the frontend application and database, finally start the server using below command:

   ```bash
      cd server
      npm start
   ```

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

## Usage

To use the app, follow these steps:

1. Enter a long URL in the input field and click the "Shorten" button.
2. Copy the shortened URL and share it with others.
<hr>

<!---------------------------------------------------------------CONTRIBUTION GUIDELINES--------------------------------------------------------------------------->

<details>
 <summary><h2>⚡Contribution Guidelines:</h2></summary>
 
 
 * **Checkout and make your changes for the develop branch only:** When working on your contributions, switch to the **develop** branch in your local repository. This ensures that you are working on the latest version of the codebase.

* **Create pull requests only for the develop branch:** When you are ready to submit your changes, create a pull request (PR) targeting the **develop** branch. This allows the maintainers to review and merge your code into the main development branch.

* **Maintain contribution guidelines:** Each project may have its specific contribution guidelines. It's important to familiarize yourself with these guidelines before submitting your contributions. Adhering to these guidelines ensures consistency and helps maintain the quality of the codebase.

* **Format your commit message with the issue number:** When making commits related to an issue, follow the format **Fixes: #10 in your commit message. Replace 10 with the issue number you are addressing.** This helps track and manage issues more efficiently.

* **Attach a Postman response screenshot for backend tasks:** For tasks related to the backend, it is recommended to include a screenshot of the Postman response along with your pull request. This provides additional context and helps reviewers understand the changes made and their impact on the backend functionality.

* **Make your pull request descriptive and include examples:** When creating a pull request, provide a clear and descriptive explanation of the changes you made. This helps reviewers understand the purpose and significance of your contribution. Additionally, including at least one example that demonstrates the intended usage or effect of your changes can be beneficial.

* **Rebase your commits and optimize file changes:** When submitting your pull request, consider rebasing your commits into one commit and optimizing your file changes. This helps keep the commit history clean and makes it easier for reviewers to understand your changes.

Remember, following these guidelines will help ensure a smooth and efficient contribution process. Happy coding!

</details>

<hr>


<!------------------------------------------------------------------------FEATURED IN------------------------------------------------------------------------------>


## :zap: Featured In:
 <div>
    <h2><img src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/blob/master/Emojis/Hand%20gestures/Flexed%20Biceps.png?raw=true" width="35" height="35" > Open Source Programs</h2>
  </div>
  
<table>

   <tr>
      <th>Event Logo</th>
      <th>Event Name</th>
      <th>Event Description</th>
   </tr>
   <tr>
      <td><img src="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png" width="200" height="auto" loading="lazy" alt="GSSoC 24"/></td>
      <td>GirlScript Summer of Code 2024</td>
      <td>GirlScript Summer of Code is a three-month-long Open Source Program conducted every summer by GirlScript Foundation. It is an initiative to bring more beginners to Open-Source Software Development.</td>
   </tr>
</table>
<hr>

<!-- Code of conduct -->
<div>
<h2><img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" width="35" height="35"> Code of Conduct:</h2>
</div>

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
<hr>

<!-- License -->
<div>
<h2><img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Page%20with%20Curl.png" width="35" height="35"> License:</h2>
</div>

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)<br>
This project is licensed under the [MIT License](./LICENSE).

<hr>

<div>
  Don't forget to leave a star<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp" width="35" height="30"> for this project!
</div> <br>


<a href="#top" style="position: fixed; bottom: 20px; right: 20px; background-color: black ; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-family: Arial; font-size: 16px;">Go to Top</a>


