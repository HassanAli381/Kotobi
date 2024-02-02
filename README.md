# Kotobi
Kotobi is a website where book lovers can discover, share, and connect, Kotobi provides functionality for users to discover books, giving them access to add, delete, and update them 
and other nice features.

## Technologies Used
- Node.js: A runtime environment enabling server-side scripting using JavaScript.
- Express: A widely-used web application framework for Node.js, streamlining routing and middleware management.
- MongoDB: A NoSQL database designed for efficient storage and retrieval of data.
- Mongoose: An Object Data Modeling library facilitating interaction between MongoDB and Node.js, enhancing data handling capabilities.

## Features
- Book Catalog: Browse and search for books.
- Book Details: View detailed information about a specific book.
- Admin Book Management: Admin-exclusive control over adding, updating, and deleting books in the catalog to ensure data accuracy and security.
- Security Features: Secure user Authentication and Authorization System.

## Getting Started
To run Kotobi locally or deploy it to a server, follow these steps:

1. Clone the repository to your local machine:

- `git clone https://github.com/HassanAli381/Kotobi`.

2. Install the required dependencies:

- open a new terminal.
- `cd Kotobi`.
- `cd backend`
- Write `npm install`.

3. Configure the environment variables:
- Create a .env file in the root directory and add the following variables:

    - MONGO_URL=your-mongodb-uri

    - PORT=3000

    - JWT_SECRET_KEY=your-jwt-secret-key

    - NODE_ENV=development
  
- Replace your-mongodb-uri and your-secret-key with your MongoDB connection string and a secret key for JWT token generation.

4. Start the server:

- Open terminal.
- Write `npm run start:dev`.
- Open your web browser and access the application at `http://localhost:3000`.
