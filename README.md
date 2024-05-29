# URL Shortener

A simple and effective URL shortener application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to create, delete, and click on shortened URLs.

## Features

- **Create Short URLs**: Input a long URL to get a shortened URL.
- **Redirect**: Clicking on a shortened URL will redirect to the original long URL.
- **Delete Short URLs**: Remove shortened URLs when they are no longer needed.

## Tech Stack

- **MongoDB**: Database for storing URLs.
- **Express.js**: Backend framework for handling API requests.
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies for both the client and server:

    ```bash
    # Install server dependencies
    cd server-app
    npm install

    # Install client dependencies
    cd ../client-app
    npm install
    ```

3. Start MongoDB:

    Ensure MongoDB is running. You can start MongoDB using the following command if you have it installed locally:

    ```bash
    mongod
    ```

### Running the Application

1. Start the server:

    ```bash
    cd server-app
    npm run dev
    ```

    The server will start on `http://localhost:5001`.

2. Start the client:

    ```bash
    cd ../client-app
    npm run dev
    ```

    The client will start on `http://localhost:3000`.

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a long URL in the input field and click "Shorten".
3. The shortened URL will be displayed. You can click on it to be redirected to the original URL.
4. Manage your URLs by deleting them when no longer needed.


