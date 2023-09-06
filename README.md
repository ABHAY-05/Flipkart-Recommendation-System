# Product Recommendation System

Welcome to the Product Recommendation System project! This repository contains the code for a full-stack recommendation system that provides personalized product recommendations based on user preferences. The project is built using JavaScript, React, Express.js, Mongoose, and CSS.

## Table of Contents
- [Project Overview](#project-overview)
  - [Features](#features)
  - [Live Site](#live-site)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Issues](#issues)

## Project Overview

### Features
- Provides personalized product recommendations to users.
- Dynamic user interfaces created with ReactJS.
- Efficient server-side processing with Express.js.
- Utilizes Mongoose for data modeling, improving system accuracy and scalability.

### Live Site
You can check out the live site of this project [here](https://myproduct-recommendation-system.vercel.app).

## Tech Stack

- **Client**: ReactJS
- **Server**: Express.js
- **Database**: Mongoose
- **Styling**: CSS

## Getting Started

To get started with this project on your local machine, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/ABHAY-05/product-recommendation-system.git
   ```

2. Navigate to the project directory:
   ```
   cd product-recommendation-system
   ```

3. Install the dependencies for both the client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up the MongoDB database:
   - Create a MongoDB database and configure the connection in the `.env` file on the server side with the DB name and put your connection String.

5. Set up firebase on Client side:
   * Configure the `.env` file and put these keys:
     - `REACT_APP_API_KEY`
     - `REACT_APP_AUTH_DOMAIN`
     - `REACT_APP_PROJECT_ID`
     - `REACT_APP_STORAGE_BUCKET`
     - `REACT_APP_MESSAGING_SENDER_ID`
     - `REACT_APP_ID`

7. Start the client and server servers:
   ```
   cd client
   npm start
   ```
   ```
   cd server
   npm start
   ```

8. Open your browser and visit `http://localhost:3000` to use the application locally.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature"`.
4. Push to your forked repository: `git push origin feature-name`.
5. Create a pull request to the `main` branch of this repository.

## Issues

If you encounter any issues or have suggestions for improvements, please create a GitHub issue [here](https://github.com/ABHAY-05/product-recommendation-system/issues).

---
Thank you for checking out the Flipkart Recommendation System project! We hope you find it useful and welcome your contributions.

Happy coding! 🚀
