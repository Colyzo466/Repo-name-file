# Student Database API

A RESTful API built with Node.js and SQLite to manage student information. This project provides endpoints for creating, reading, updating, and deleting student records. A simple frontend form is included for user interaction.

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

- Basic CRUD operations for student records.
- Input validation to ensure data integrity.
- Simple frontend form for submitting student data.
- In-memory SQLite database for easy setup and local storage.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for building RESTful APIs.
- **SQLite**: Lightweight database for local storage.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.
- **Express Validator**: Middleware for request data validation.
- **HTML/CSS/JavaScript**: Technologies for the frontend form and styling.

## Installation

1. **Clone the repository**:
   bash
   git clone https://github.com/Colyzo466/student-database.git
   cd student-database
   

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the server**:
   ```bash
   node server.js
   ```

   The server will start on `http://localhost:3000`.

2. **Open the frontend**:
   Navigate to `http://localhost:3000/index.html` in your web browser to access the student information form.

3. **Submit student information**:
   Fill out the form and click "Submit" to add a new student record to the database.

## API Endpoints

1. **Create a Student**
   - **Endpoint**: `POST /api/students`
   - **Request Body**:
     ```json
     {
       "name": "John",
       "surname": "Doe",
       "age": 20,
       "school": "Example High School"
     }
     ```
   - **Response**:
     - `201 Created`: Returns the created student ID and name.
     - `400 Bad Request`: Returns validation errors if input data is invalid.

2. **Get All Students**
   - **Endpoint**: `GET /api/students`
   - **Response**:
     - `200 OK`: Returns an array of student records.

3. **Update a Student**
   - **Endpoint**: `PUT /api/students/:id`
   - **Request Body**:
     ```json
     {
       "name": "Jane",
       "surname": "Doe",
       "age": 21,
       "school": "Updated High School"
     }
     ```
   - **Response**:
     - `200 OK`: Returns the updated student information.
     - `404 Not Found`: Returns an error if the student ID does not exist.

4. **Delete a Student**
   - **Endpoint**: `DELETE /api/students/:id`
   - **Response**:
     - `200 OK`: Returns a success message.
     - `404 Not Found`: Returns an error if the student ID does not exist.

## Project Structure

```
student-database/
├── public/
│   ├── index.html       # Frontend HTML file
│   ├── styles.css       # CSS styles for the frontend
│   └── script.js        # JavaScript for form submissions
├── server.js            # Main server file
└── package.json         # Project metadata and dependencies
```

## Contributing

Contributions are welcome! To contribute, please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides a clear, professional structure that includes all essential information for users and contributors.
