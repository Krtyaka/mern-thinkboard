# ✨ MERN ThinkBoard

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=tailwind-css&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Cache-Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

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

