# ✨ MERN ThinkBoard

<p align="center"> 
  <img src="https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=tailwind-css&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Rate--Limiting-Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Deploy-Frontend%20on%20Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Deploy-Backend%20on%20Render-46E3B7?logo=render&logoColor=white&style=for-the-badge" /> 
</p>

---

A modern, responsive **note-taking web app** built with the **MERN stack**.
ThinkBoard lets you create, edit, and organize your notes seamlessly, with **Redis-powered rate limiting** and a beautiful UI using **TailwindCSS + DaisyUI**.

<div align="center">
  <p>
    <!-- Frontend Live Demo (Vercel) -->
    <a href="https://mern-thinkboard-phi-nine.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/%20Try%20Frontend%20Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" />
    </a>
  </p>
  <p>
    <!-- Backend API Live (Render) -->
    <a href="https://mern-thinkboard-1-imhi.onrender.com/api/notes" target="_blank">
      <img src="https://img.shields.io/badge/%20View%20Backend%20API-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
    </a>
  </p>
  
  <p><a href="https://github.com/Krtyaka/mern-thinkboard" >
    <img src="https://img.shields.io/badge/%20GitHub%20Repository-333333?style=for-the-badge&logo=github&logoColor=white" />
  </a></p>
</div>


---

## 📑 Table of Contents

- 📝 [Features](#-features)
- 🛠 [Tech Stack](#-tech-stack)
- 📂 [Project Structure](#-project-structure)
- ⚙️ [Getting Started](#-getting-started)
- 🗺 [Planned Features](#-planned-features)
- 👨‍💻 [Author](#-author)

---

## 🚀 Features

* 📝 **CRUD Notes** – Create, update, and delete notes effortlessly
* 🎨 **Modern UI** – TailwindCSS + DaisyUI for sleek, responsive design
* 🛡 **Secure API** – Redis-based rate limiting to prevent abuse
* 🌐 **Client Routing** – Smooth navigation with React Router
* 📱 **Responsive** – Optimized for both desktop and mobile devices

---

## 🛠 Tech Stack

* **Frontend:** React, React Router, TailwindCSS, DaisyUI
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Security:** Redis Rate Limiting (JWT Auth coming soon 🚧)
* **Deployment:** Vercel(Frontend), Render(Backend)

---

## 📂 Project Structure

```
mern-thinkboard/
├── backend/          # Express + MongoDB + Redis rate limiting
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── index.js
├── frontend/         # React + TailwindCSS + DaisyUI + React Router
│   ├── src/
│   └── public/
└── package.json      # Common package.json with build/start scripts
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Krtyaka/mern-thinkboard.git
cd mern-thinkboard
```

### 2️⃣ Install & Build

```bash
npm run build
```

This will:

* Install **backend dependencies**
* Install **frontend dependencies**
* Build the **frontend**

### 3️⃣ Setup environment variables

Create a `.env` file in the **backend** folder with the following:

```env
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
REDIS_URL=<your-redis-url>
```

### 4️⃣ Run locally

```bash
npm start
```

* Backend will run on: [http://localhost:5000](http://localhost:5000)
* Frontend will be served from the backend build at the same port

---

## 🗺 Planned Features

* 🔑 JWT Authentication (login & signup)
* 📂 Note categories & tags
* 🌙 Light/Dark mode toggle

---

## 👨‍💻 Author

Built with ❤️ by [**Krtyaka**](https://github.com/Krtyaka)
