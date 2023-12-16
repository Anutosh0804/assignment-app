# Assignment App

## Getting Started

To get started with the App, you need to set up both the frontend and backend components.

### Frontend

The frontend of App is built using React and TypeScript. To start the it, follow these steps:

1. Navigate to the `frontend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The frontend will be available at [http://localhost:3000/](http://localhost:3000/). Make sure to start the backend server as mentioned below.

The frontend has the following routes:

- `/`: Login page
- `/signup`: Registration page
- `/candidates`: Displays the candidates for a particular Interviewer

On the `/candidates` page, you can:

- Add a new candidate
- Edit/Delete an existing candidate

### Backend

The backend of the App uses a MongoDB as DB and a Node.js/Express server. To start the backend application, follow these steps:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Start the server in development mode:

   ```bash
   npm run start:dev
   ```

The server will run on port 8000.

## Models

The backend uses the following Mongoose schemas for modeling the data:

### Candidate Schema

- `name`: Candidate's name
- `status`: The interview status of the candidate
- `feedback`: Feedback about the candidate
- `rating`: A rating for the candidate
- `interviewer`: Interviewer who's assigned to the candidate

### User Schema

- `email`: Email of the user (interviewer)
- `password`: User's hashed password
- `name`: Name of the user (interviewer)
- `candidates`: An array of candidate references managed by the user

## Routes

The API routes for the backend are defined in the `/routes` directory. They handle requests related to user authentication and candidate management. JWT tokens are used for user authentication.

## Controllers

The backend controllers handle user authentication and candidate management:

### User Authentication

- `signup`: Register a new user (interviewer)
- `login`: Authenticate and log in a user

### Candidate Management

- `getCandidates`: Retrieve candidates managed by the logged-in user
- `createCandidate`: Create new candidate
- `updateCandidate`: Update candidate's details
- `deleteCandidate`: Delete candidate

## Live Demo

[Live Demo on YouTube](https://youtu.be/Ubbql3-D-xc)
