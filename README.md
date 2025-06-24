# <img src="https://i.ibb.co/HpqKHdv4/logo.png" width="100" title="Planto"> Planto — Plant Care Tracker
 
 <img src="https://i.ibb.co/LdCF4xQY/Screenshot-1.png" width="" title="Planto">


<h2> <a href="https://green-3f4f3.web.app/" target="_blank">View Live Preview</a></h2>

# Planto 
This is a plant management web application that allows users to log, track, and manage care tasks for their houseplants. Users can add their plants, log watering/fertilizing dates, set reminders, and track plant health. The platform will support user authentication and personal plant data management.

Planto — a full-stack, mobile-responsive web application designed to help users manage and monitor the care of their indoor and outdoor plants. This application will serve as a digital assistant for plant enthusiasts, allowing them to track daily care tasks such as watering, fertilizing, checking health status, and more.

---

## 🌟 Features

- 🌱 **Add and Manage Plants**: Organize and maintain details about your houseplants with photos, nicknames, and care preferences.
- 📅 **Task Logging**: Keep a history of plant care tasks such as watering, fertilizing, pruning, and repotting.
- 📈 **Health Tracking**: Monitor each plant's health with status logs and notes.
- 📷 **Photo Journaling**: Upload photos over time to visually track your plant's growth and condition.
- 🌤️ **Weather Integration (Coming Soon)**: Automatically adjust care recommendations based on your local weather conditions.
- 🔐 **User Authentication**: Secure sign-up, login, and personalized data using Firebase Authentication.
- 📊 **Visual UI Feedback**: Tooltips, alerts, and toasts provide smooth and helpful interactions.
- 🌐 **SEO Friendly**: Enhanced SEO management using React Helmet.
- 📱 **Fully Responsive Design**: Looks great on mobile, tablet, and desktop, powered by Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React Router 7, Tailwind CSS, DaisyUi
- **Animations**: Motion/Framer Motion
- **UI/UX Enhancements**: React Toastify, SweetAlert2, React Tooltip
- **Slider/Courasel**: React Slick
- **Date Handling**: date-fns
- **Authentication**: Firebase
- **SEO**:react-helmet
- **Deployment**: Vercel (Server Side), Firebase (Client Side)

---

## Folder Structure 

<pre>
PLANTO/
├── .firebase/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   ├── Contex/
│   ├── Firebase/
│   ├── Layout/
│   ├── Pages/
│   │   ├── AddPlant.jsx
│   │   ├── AllPlants.jsx
│   │   ├── Details.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyPlants.jsx
│   │   ├── Register.jsx
│   │   ├── UpdatePlant.jsx
│   ├── Routes/
│   ├── App.css
│   ├── App.jsx
│   ├── config.js
│   ├── main.jsx
├── .env.local
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
</pre>


## 🧪 Setup & Installation

``` bash 
git clone https://github.com/monishaRema/planto.git
cd planto
npm install

npm run dev
```

Then open your browser and go to:
http://localhost:5173