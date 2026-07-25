Student Management REST API
# 🎓 Student Management REST API

A beginner-friendly **REST API** built using **Node.js** and **Express.js** following the **MVC Architecture**. This project demonstrates the implementation of CRUD operations, REST principles, request validation, and modular project structure.

---

## 🚀 Features

- ✅ Create Student
- ✅ Get All Students
- ✅ Get Student by ID
- ✅ Update Student Details
- ✅ Delete Student
- ✅ Input Validation
- ✅ Duplicate ID Validation
- ✅ Proper HTTP Status Codes
- ✅ MVC Architecture
- ✅ Tested using Postman

---

## 🛠️ Tech Stack

- JavaScript
- Node.js
- Express.js
- Postman

---

## 📁 Project Structure


student-api/
│
├── server.js
│
└── src/
├── app.js
├── controllers/
│ └── student.controller.js
├── routes/
│ └── student.routes.js


---

## 📌 API Endpoints

### Get all students

```http
GET /students

Response

[
  {
    "id": 1,
    "name": "Murli",
    "course": "Backend"
  }
]


Get Student by ID
GET /students/:id

Example

GET /students/1
Create Student
POST /students

Request Body

{
  "id": 3,
  "name": "Aman",
  "course": "AI"
}

Response

{
  "message": "Student added successfully"
}


Update Student
PUT /students/:id

Request Body

{
  "name": "Rahul Sharma",
  "course": "AI"
}

Response

{
  "message": "Student updated successfully"
}

Delete Student
DELETE /students/:id

Response

{
  "message": "Student deleted successfully"
}


📡 HTTP Status Codes Used
Status Code	Meaning
200	OK
201	Created
400	Bad Request
404	Not Found
409	Conflict

📚 Concepts Learned
REST APIs
CRUD Operations
Express Routing
Express Middleware
Request & Response Objects
Route Parameters
Request Body Parsing
HTTP Methods
HTTP Status Codes
JavaScript Objects & Arrays
find()
findIndex()
splice()
module.exports
require()
MVC Architecture


▶️ Getting Started
Clone the repository
git clone https://github.com/yourusername/student-management-api.git
Navigate to the project
cd student-management-api
Install dependencies
npm install
Start the server
node server.js

or

nodemon server.js

Server will start on

http://localhost:3000


🧪 Testing

This API was tested using Postman.

Example request:

POST http://localhost:3000/students

Body

{
  "id": 3,
  "name": "Aman",
  "course": "AI"
}


🎯 Future Improvements
MongoDB Integration
Mongoose Models
JWT Authentication
Password Hashing (bcrypt)
User Authentication & Authorization
Error Handling Middleware
Environment Variables
Deployment (Render/Railway)
Unit Testing


## 📖 What I Learned

Through this project, I gained hands-on experience with:

- Building RESTful APIs using Express.js
- Organizing code using the MVC pattern
- Understanding request-response lifecycle
- Working with route parameters and request bodies
- Implementing CRUD operations
- Validating incoming data
- Structuring backend projects for scalability


👨‍💻 Author

Murli Mishra

BackendDeveloper | B.Tech CSE (AI)

Currently learning Node.js, Express.js, and MongoDB while building real-world backend projects.

If you found this project helpful, feel free to ⭐ the repository.

