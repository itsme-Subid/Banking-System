# Banking System

This repository contains a backend application for a banking system. It provides an API for managing bank and other related functionalities.

## Problem

When deploying the backend application on platforms like Netlify or Vercel, you encountered errors related to the build process. Specifically, the build scripts failed with messages such as "No Output Directory named 'dist' found after the Build completed" or similar.

## Solution

The issue was caused by a mismatch between the expected output directory specified in the build script and the actual output directory generated by the build process. To resolve this issue, the following steps were taken:

<!-- changed output directory to '.' in vercel -->

The output directory was `public`. So, I simply changed the output directory to `.` in the vercel.

## Project Structure

The project follows the following structure:

- `src/`: Contains the source code files for the backend application.
- `prisma/`: Contains the Prisma schema and related files for database management.
- `public/`: The output directory where the build artifacts are stored after the build process.

## Dependencies

The backend application has the following dependencies:

- `@prisma/client`: Prisma ORM for database management.
- `body-parser`: Middleware for parsing incoming request bodies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- `dotenv`: Library for loading environment variables from a `.env` file.
- `express`: Web framework for building the API endpoints.

For development purposes, the following devDependencies are included:

- `@types/body-parser`: TypeScript type declarations for body-parser.
- `@types/cors`: TypeScript type declarations for cors.
- `@types/express`: TypeScript type declarations for express.
- `@types/node`: TypeScript type declarations for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.
- `prisma`: Prisma CLI for database migrations and schema management.
- `ts-node`: TypeScript execution environment for running TypeScript code directly.
- `typescript`: TypeScript compiler for transpiling TypeScript code to JavaScript.

## Getting Started

To set up the backend application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/itsme-Subid/Banking-System.git
   ```

2. Install the dependencies:

   ```bash
   cd Banking-System
   yarn install
   ```

3. Set up the database connection by configuring the environment variables(I personally used planetscale from this project). Create a `.env` file in the root directory and define the following variables:

   ```env
   DATABASE_URL=<your-database-url>
   ```

4. Run the application in development mode:

   ```bash
   yarn dev
   ```

   This will start the server using `nodemon` and automatically restart it when code changes are detected.

## Contributing

Contributions to this repository are welcome. If you encounter any issues or have suggestions for

improvements, please open an issue or submit a pull request.