# Student Database API

A simple RESTful API built with Node.js and SQLite that allows you to manage student information. This project provides endpoints for creating, reading, updating, and deleting student records. It also includes a basic frontend form for user interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete student records.
- Input validation for student information.
- Simple frontend form to submit student data.
- In-memory SQLite database for local storage.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **SQLite**: Lightweight database engine for local data storage.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Express Validator**: Middleware for validating request data.
- **HTML/CSS/JavaScript**: Frontend technologies for creating the user interface.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Colyzo466/student-database.git
   cd student-database

   Install dependencies:
bash
npm install
Usage
Start the server:

bash
node server.js
The server will start running on http://localhost:3000.

Open the frontend:

Open your web browser and navigate to http://localhost:3000/index.html to access the student information form.
Submit student information:

Fill out the form and click "Submit" to add a new student record to the database.
API Endpoints

1. Create a Student
Endpoint: POST /api/students
Request Body:

json
{
    "name": "John",
    "surname": "Doe",
    "age": 20,
    "school": "Example High School"
}

Response:
201 Created: Returns the created student ID and name.
400 Bad Request: Returns validation errors if the input data is invalid.

2. Get All Students
Endpoint: GET /api/students
Response:
200 OK: Returns an array of student records.
     
3. Update a Student
Endpoint: PUT /api/students/:id
Request Body:

json
{
    "name": "Jane",
    "surname": "Doe",
    "age": 21,
    "school": "Updated High School"
}

Response:
200 OK: Returns the updated student information.
404 Not Found: Returns an error if the student ID does not exist.

4. Delete a Student
Endpoint: DELETE /api/students/:id
Response:
200 OK: Returns a success message.
404 Not Found: Returns an error if the student ID does not exist.
   
Project Structure

student-database/
├── public/
│   ├── index.html       # Frontend HTML file
│   ├── styles.css       # CSS styles for the frontend
│   └── script.js        # JavaScript for handling form submissions
├── server.js            # Main server file
└── package.json         # Project metadata and dependencies

Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

License
This project is licensed under the MIT License - see the LICENSE file for details.

undefined
