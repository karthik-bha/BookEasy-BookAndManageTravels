# BookEasy Documentation

- **Author**: Karthik

## Project Description

BookEasy is designed to simplify the process of managing bookings, tour packages, and customer data, aiming to provide a seamless experience for consumers looking for quality agents and trips. Administrators also benefit from hassle-free data management and request handling.

Currently, BookEasy is in its early stages of development, with future improvements outlined at the end of this document.

## Features

- **Customer-side features:**
  - View and browse available tour packages.
  - Make bookings.
  - Download booking details as a PDF.

- **Admin-side features:**
  - Admin panel for managing bookings and tour packages.
  - Generate invoices for bookings.

## Setup Instructions

    To set up the project locally, follow these instructions.

    ### 1. Clone the Repository

        ```bash
        git clone <repository-url>
        cd BookEasy
        ```

### 2. Install Dependencies

#### Frontend Setup (React + Vite)

        1. Navigate to the `frontend` directory:

        ```bash
        cd frontend
        ```

        2. Install the necessary dependencies:

        ```bash
        npm install
        npm install react-router-dom
        ```

        3. Run the development server:

        ```bash
        npm run dev
        ```

#### Backend Setup (Node.js + Express + MongoDB)

    1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

    2. Install the required dependencies:

    ```bash
    npm install express mongodb mongoose
    ```

    3. Set up the MongoDB connection string by creating a `.env` file in the `backend` folder:

    ```bash
    MONGO_URL=mongodb://your-database-connection-string
    ```

    4. Run the backend server:

    ```bash
    node --watch server.js
   ```

### Deployment

- BookEasy is deployed on **Render** for both frontend and backend, with the database hosted on **MongoDB Atlas** (using the free tier).
  
- To deploy it yourself:
  - Ensure you configure the **MONGO_URL** environment variable with your MongoDB connection string.
  - Deploy both the frontend (React) and backend (Node.js) to Render or your preferred platform.

## Technologies Implemented

### Frontend

- **React.js**: Used for building the user interface.
- **react-router-dom**: For routing between pages.
- **Hooks**: For managing component state and lifecycle.
- **Components**: Modular and reusable UI elements.
- **Conditional Rendering**: For dynamic content.
- **Dynamic Routes**: For different views based on parameters.
- **Pdf-lib**: To generate and download PDFs.
- **Tailwind CSS**: For fast and responsive styling with utility-first classes.
- **JavaScript**: For client-side logic and interactivity.

### Backend

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Lightweight backend framework to handle routes and server logic.
- **MongoDB**: Database for storing bookings, customer details, and packages.
- **Mongoose**: Library for interacting with MongoDB using schemas.

### Deployment

- **Render**: Used for deploying the frontend and backend.
- **MongoDB Atlas**: Cloud-based MongoDB instance for storing data.

## Future Scope

In future versions, we plan to implement the following features:

- User registration and login functionality (currently hardcoded).
- Expanded admin panel with more management capabilities.
- Real-time updates for booking statuses.
- Improved UI/UX based on user feedback.

