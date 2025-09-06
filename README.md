# ✨ MERN ThinkBoard

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)  
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css)  
![DaisyUI](https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=tailwind-css)  
![Node.js](https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Framework-Express.js-000000?logo=express)  
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)  
![Redis](https://img.shields.io/badge/Cache-Redis-DC382D?logo=redis)  
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render)  

--- 

A modern, responsive **note-taking web app** built with the **MERN stack**.  
ThinkBoard lets you create, edit, and organize your notes seamlessly, with rate-limiting security and a beautiful UI powered by **TailwindCSS + DaisyUI**.

🌍 **Live Demo:** [MERN ThinkBoard](https://mern-thinkboard-4d5o.onrender.com)  
📦 **Repository:** [GitHub Repo](https://github.com/Krtyaka/mern-thinkboard)

---

## 🚀 Features

- 📝 **CRUD Notes** – Create, update, and delete notes effortlessly  
- 🎨 **Modern UI** – TailwindCSS + DaisyUI for sleek, responsive design  
- 🛡 **Secure API** – Redis-based rate limiting to prevent abuse  
- 🌐 **Client Routing** – Smooth navigation with React Router  
- 📱 **Responsive** – Optimized for both desktop and mobile devices  

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, TailwindCSS, DaisyUI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas)  
- **Security:** Redis Rate Limiting (JWT Auth coming soon 🚧)  
- **Deployment:** Render (frontend & backend)  

---

## 📂 Project Structure

```
mern-thinkboard/
├── backend/ # Express + MongoDB + Redis rate limiting
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── index.js
├── frontend/ # React + TailwindCSS + DaisyUI + React Router
│ ├── src/
│ └── public/
└── package.json # Common package.json with build/start scripts
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Krtyaka/mern-thinkboard.git
cd mern-thinkboard
```

### 2️⃣ Install & Build

npm run build

This will:
- Install backend dependencies
- Install frontend dependencies
- Build the frontend

### 3️⃣ Setup environment variables

Create a .env file in the backend folder with the following:
- PORT=5001
- MONGO_URI=<your-mongodb-connection-string>
- REDIS_URL=<your-redis-url>

### 4️⃣ Run locally

npm start

- Backend will run on: http://localhost:5000
- Frontend will be served from the backend build at the same port

