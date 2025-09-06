# ✨ MERN ThinkBoard

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?logo=react&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=tailwind-css&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framework-Express.js-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Rate--Limiting-Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white&style=for-the-badge" />
</p>

---

A modern, responsive **note-taking web app** built with the **MERN stack**.  
ThinkBoard lets you create, edit, and organize your notes seamlessly, with **Redis-powered rate limiting** and a beautiful UI using **TailwindCSS + DaisyUI**.

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
- Install **backend dependencies**
- Install **frontend dependencies**
- Build the **frontend**

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

- Backend will run on: [http://localhost:5000](http://localhost:5000)  
- Frontend will be served from the backend build at the same port  

---

## 📸 Screenshots

(Add screenshots or GIFs here later to showcase your app)

| Home Page | Notes Dashboard | Mobile View |
|-----------|-----------------|-------------|
| ![Home](screenshots/home.png) | ![Dashboard](screenshots/dashboard.png) | ![Mobile](screenshots/mobile.png) |

---

## 🚀 Deployment

The project is deployed on **Render**:  
👉 [MERN ThinkBoard Live](https://mern-thinkboard-4d5o.onrender.com)

### Steps:
1. Create a **Web Service** for the backend  
2. Set build command:  
   ```bash
   npm run build
   ```  
3. Set start command:  
   ```bash
   npm start
   ```  
4. Add environment variables (`MONGO_URI`, `REDIS_URL`) in Render dashboard  
5. The backend will serve both API and built frontend  

---

## 🗺 Planned Features

- 🔑 JWT Authentication (login & signup)  
- 📂 Note categories & tags  
- 🌙 Dark mode  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo, submit a PR, or open an issue.  

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.  

---

## 👨‍💻 Author

Built with ❤️ by [**Krtyaka**](https://github.com/Krtyaka)
