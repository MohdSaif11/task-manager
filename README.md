# 📝 Task Manager (Full Stack)

A simple full-stack Task Manager application built using **Node.js, Express, MongoDB, and JavaScript**.
This project demonstrates complete **CRUD operations** with a clean and responsive user interface.

---

## 🚀 Features

* ➕ Create tasks
* 📖 View all tasks
* 🔄 Update task title and status
* ❌ Delete tasks

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## 🔌 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /api/tasks     | Create a task |
| GET    | /api/tasks     | Get all tasks |
| PUT    | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## 📂 Project Structure

task-manager/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── controllers/
│
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/MohdSaif11/Task-Manager.git
cd Task-Manager

---

### 2. Install backend dependencies

cd backend
npm install

---

### 3. Setup environment variables

Create a `.env` file inside the backend folder:

MONGO_URI=your_mongodb_connection_string

---

### 4. Run the backend server

npm run dev

Server will run on:
http://localhost:5000

---

### 5. Run frontend

Open this file in browser:
frontend/index.html

---

## 🧠 How It Works

1. User interacts with frontend
2. Frontend sends API requests using Fetch API
3. Express handles routes
4. Controller processes logic
5. MongoDB stores/retrieves data
6. UI updates with response

---

## 🎯 Learning Outcomes

* Built REST APIs using Express.js
* Implemented CRUD operations
* Connected frontend with backend
* Used MongoDB Atlas
* Followed MVC structure

---

## 👨‍💻 Author

Mohammed Saif R

---

## ⭐ Summary

This project demonstrates a complete full-stack application with API integration, database handling, and frontend interaction.
