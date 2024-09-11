# Express Hello World API

This is a simple Express.js application with two endpoints: 
- `/hello`: Returns a greeting message.
- `/info`: Returns system and request information.

## Requirements

Before running the project, ensure you have the following installed on your system:

- **Node.js** (v18.18.0 or higher)
- **npm** (comes with Node.js)

## Setup Instructions

Follow these steps to set up the project and run it locally.

### 1. Clone the Repository

git clone https://github.com/bessantomeh/hello-world-api

Navigate into the project directory: cd your-repo-name

### 2. Install Dependencies
Install the required Node.js packages:

npm install

### 3. Running the Server
You can now start the development server:

npm start

### 4. Test the Endpoints
GET /hello:
Example: http://localhost:3000/hello?name=Chris

If no name is provided, it will return "Hello, World!".

GET /info: Returns information about the request, the client IP, and the server.

Example: http://localhost:3000/info

# Scripts
For development, if you want live-reloading, you can use nodemon:

npm install -g nodemon
nodemon src/index.ts

### Running Tests
To run the automated tests using Jest, follow these steps:

1. Run the Tests
Use the following command to execute the tests: (npm test)
2. View Test Results
The results of the tests will be displayed in the console. If all tests pass, you will see a summary indicating the number of tests that passed.









