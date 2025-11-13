# 🏗️ Construction Website – Frontend (Client)

This folder contains the **client-facing frontend** of the Construction Website.  
It is built using **React + Vite**, styled with **TailwindCSS**, and communicates with the backend through **axios** using secure cookies (withCredentials).

The website includes:
- Home Page
- Projects Page + Project Detail
- Services Page
- Contact Page (with backend form submission)
- Gallery
- Features
- About Us
- Career Page
- Login & Register Pages

---

## ⚙️ Tech Stack

- **React 18**
- **Vite**
- **TailwindCSS**
- **React Router v7**
- **Axios (API Client)**
- **React Helmet Async (SEO)**
- **Leaflet / React Leaflet (Map)**
- **Framer Motion (Animations)**
- **Lucide & React Icons**
- **React Toastify (Notifications)**

---

## 📁 Folder Structure

client/
│
├── src/
│ ├── components/ # Navbar, Footer, UI Components
│ ├── pages/ # All pages (Home, Services, Projects, etc.)
│ ├── api/ # axios instance (API.js)
│ ├── App.jsx # Main app with routes
│ ├── main.jsx # React DOM entry
│ └── index.css # TailwindCSS styles
│
├── public/ # Static assets, favicon, images
├── vite.config.js
├── package.json
└── .env.example # Example environment variables

VITE_FRONT_API_URL=http://localhost:5000  FOR DEV   

For production:

VITE_FRONT_API_URL=https://your-live-backend.com


*/-------------------------------------------------------------------------/*




1️⃣ Install dependencies

npm install  

If you face any dependency or peer-conflict issues, use:

npm install --legacy-peer-deps


2️⃣ Start development server

npm run dev

The website will run on:
http://localhost:5173


*/-------------------------------------------------------------------------/*



🏗️ Production Build

To generate production build:

npm run build


*/-------------------------------------------------------------------------/*


🔌 API Configuration

The API client is set inside src/api/index.js:

const API = axios.create({
  baseURL: import.meta.env.VITE_FRONT_API_URL + "/api",
  withCredentials: true
});


Meaning:

You ONLY need to set VITE_FRONT_API_URL

Cookies will be sent automatically for authentication

🧭 Routing Structure

Your App.jsx contains:

/ → Home

/services → Services

/projects → Projects

/projects/:slug → Dynamic detail page

/gallery → Gallery

/features → Features

/contact → Contact form

/career → Career page

/about → About Us

/register → User registration

/login → User login

The <Navbar /> and <Footer /> stay fixed across all routes.


*/-------------------------------------------------------------------------/*



🧯 Troubleshooting

Issue	Reason	Fix

API returning CORS error	Backend domain not allowed	Add URL in backend CORS config
Login not working	Cookies blocked	Use withCredentials: true (already set)
Build fails	Wrong VITE env name	Must start with VITE_
Map not loading	Missing leaflet CSS	Ensure leaflet CSS is imported


*/-------------------------------------------------------------------------/*


👨‍💻 Developer

Name: Aneesh Chauhan
Stack: MERN + Tailwind + Cloudinary


*/-------------------------------------------------------------------------/*






