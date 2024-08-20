# Quizify

This is a web-based platform where students can take multiple-choice question (MCQ) tests. The platform manages user authentication, handles test administration, and evaluates and displays the results to the users.

## Features

- User Authentication with email and password.
- Test environment that requests camera and microphone permissions.
- MCQ interface with navigation between questions.
- Test submission and evaluation.
- Automatic score calculation and email notification.

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) 

## Project Setup

1. **Clone the Repository**
   git clone https://github.com/yourusername/test-environment-platform.git
   cd test-environment-platform

2. **Install Backend Dependencies**
   cd server
   npm install

3. **Install Frontend Dependencies**   
    cd ../client
    npm install

4. **Environment Variables**  
    Create a .env file in the server directory.

5. **Seed the Database**
    To populate the database with initial test questions, run the seeding script.
    cd server
    node seed.js

6. **Run the Backend Server**
    cd server
    npm start
    The server should be running on http://localhost:5000.

7. **Run the Frontend**
    In a separate terminal, start the frontend React application.
    cd client
    npm start
    The frontend should be running on http://localhost:3000.


## Usage
**Login**
Use the login page to authenticate with your email and password.
If no users exist, you can manually create a user in the MongoDB database.

**Start a Test**
After logging in, start a test, which will prompt for camera and microphone permissions.
Navigate through the questions and select your answers.

**Submit a Test**
After completing the test, submit your answers.
The test results will be calculated by a cron job that runs every hour.
The score will be automatically sent to the user's email.

