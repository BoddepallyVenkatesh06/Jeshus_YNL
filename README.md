# Jeshus YNL

Jeshus YNL is a web application built using ReactJS, Vite.js, Tailwind CSS, Express.js, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Jeshus YNL is a full-stack web application designed to provide users with a platform to create, share, and explore content related to various topics. It includes features such as user authentication, content creation and management, and a social feed for viewing and interacting with posts.

## Features

- User authentication with JWT-based authentication
- Content creation and management system
- Social feed for viewing and interacting with posts
- Responsive design for optimal viewing on various devices

## Technologies Used

- ReactJS: Frontend framework for building user interfaces
- Vite.js: Frontend build tool for fast development
- Tailwind CSS: CSS framework for styling
- Express.js: Backend framework for building APIs
- MongoDB: NoSQL database for storing data

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system, and you have MongoDB set up.

### Installation

1. Clone the repository:

```bash
https://github.com/BoddepallyVenkatesh06/Jeshus_YNL.git
cd jeshus-ynl
```

2. Install dependencies:

```bash
cd client
npm install
cd ../server
npm install
```

3. Set up environment variables:

Create a `.env` file in the `server` directory and add the following environment variables:

```
PORT=3001
MONGODB_URI=<your-mongodb-uri>
SECRET_KEY=<your-secret-key>
```

4. Start the server:

```bash
cd ../server
npm start
```

5. Start the client:

```bash
cd ../client
npm start
```

## Usage

To use Jeshus YNL, open your web browser and navigate to `http://localhost:3000`. You can sign up for an account, create and manage content, and interact with other users' posts on the social feed.

## Contributing

Contributions are welcome! If you'd like to contribute to Jeshus YNL, please follow these steps:

1. Fork the project.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
