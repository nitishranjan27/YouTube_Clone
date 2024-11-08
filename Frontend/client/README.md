# YouTube Clone - MERN Stack

This project is a full-stack YouTube clone built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to register, log in, watch videos, like/dislike content, leave comments, and much more, replicating core functionalities of YouTube. 

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)

## Features
- User Authentication (Registration, Login)
- Video upload, view, like, and dislike
- Comments section for each video
- Video search functionality
- Real-time updates on likes and views
- Profile pages showing user-uploaded videos
- Responsive UI design

## Tech Stack
- **Frontend**: React, Redux, TailwindCSS (for styling), React Router
- **Backend**: Node.js, Express, MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **Database**: MongoDB (using MongoDB Atlas or local MongoDB)
- **Other Libraries**: Axios (for API requests), bcrypt (for password hashing), dotenv (for environment variables)

## Getting Started
To get a local copy up and running, follow these steps.

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB server (local or MongoDB Atlas for cloud-based MongoDB)

## Installation

1. **Clone the repository**
  
    git clone https://github.com/nitishranjan27/YouTube_Clone.git
    cd YouTube_Clone

2. **Backend Setup**

    npm install

3. **Frontend Setup**

    cd ../client
    npm install

4. **Environment Variables Create a .env file in the backend directory with the following variables:**

    MongoDB_URL = "mongodb://localhost:27017/YoutubeClone"
    Jwt_secret_key = "MySecretKey123"
    PORT = 3000

5. **Running the Application**

    - Start the backend server
        npm start

    - Start the frontend application
        npm run dev

6.  Application should now be running on http://localhost:3000 (backend) and  http://localhost:5174 (frontend).
