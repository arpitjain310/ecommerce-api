# Ecommerce API 

## About
This is an Ecommerce Platform built with Node.js and MongoDB. It allows users to manage product inventory, including adding new products, listing existing products, updating quantities, and deleting products via api or console.

## Technology Used
- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript) for views

## Local Setup
To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/arpitjain310/ecommerce-api.git
   cd ecommerce-api
   ```
2. Install the dependencies:

    ```
    npm install
    ```

3. Create a .env file in the root directory and add the following environment variables:

    ```
    PORT=<port-number>
    MONGODB_URI=<mongodb-uri>
    ```
Replace <port-number> with the desired port number for the server, and <mongodb-uri> with the URI to your MongoDB database.

4. Start the application:

    ```
    npm start
    ```

Open your web browser and visit http://localhost:< port-number > to access the application.

## Directory Structure

* config: Contains the configuration files, including the MongoDB connection setup.
* controllers: Handles the business logic for each route.
* models: Defines the database models and schemas.
* routes: Defines the API routes and their corresponding controller actions.
* views: Contains the EJS templates for rendering views.

