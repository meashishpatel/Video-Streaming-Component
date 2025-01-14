# Video Streaming Component

This repository contains a simple video streaming application with a backend to serve video files and a frontend to display and interact with them.

## Project Structure

```plaintext
Video Streaming Component/
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/
│   └── videos/
│       ├── cdn.mp4
│       ├── generate-pass.mp4
│       └── get-post.mp4
├── frontend/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── Components/
│   │       └── VideoPlayer.jsx
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
```

## Backend

The backend is a Node.js application built with express. It serves video files and supports partial content streaming to handle large video files efficiently. The videos directory contains the video files served by the application.

### Key Features

Video Streaming: Supports range requests to enable video streaming.
Dynamic File Serving: Maps video file names to their respective paths for flexible routing.
Error Handling: Returns 404 for invalid file requests.
Backend Structure

### How to Run the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
    node index.js
   ```
4. The server will run on http://localhost:3000.

### API Endpoints

GET /videos/:filename: Streams the requested video file.

- Example:
  ```bash
  http://localhost:3000/videos/cdn
  ```

## Frontend

The frontend is built with React and Vite, providing a simple interface for streaming videos served by the backend.

### Key Features

- Video Player Component: A reusable video player to stream videos from the backend.
- Dynamic Video Loading: Videos can be fetched dynamically by providing their filenames.

### How to Run the Backend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
    npm run dev
   ```
4. The development server will start, and the application can be accessed at http://localhost:5173

## Additional Notes

- Ensure the backend server is running before starting the frontend, as the frontend relies on the backend to fetch video streams.
- The default port for the backend is 3000, and for the frontend development server is 5173. Make sure these ports are not in use.
