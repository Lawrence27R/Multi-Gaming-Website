# 🎮 Multi-Gaming Website

A full-stack **multi-game web platform** built with **Node.js**, **Express**, **MongoDB**, and **Socket.io** — bringing together 13 browser-based games, a real-time chat app, and a complete user authentication system under one unified website.

---

## 🌐 Live Demo

> 🚧 Coming Soon — Deploy on Heroku using the included `Procfile`

---

## 📸 Pages

| Page | Description |
|---|---|
| `index.html` | Home / Landing page |
| `category.html` | Browse all available games by category |
| `about.html` | About the platform |
| `profile.html` | User profile page |

---

## ✨ Features

- 🔐 **User Registration & Login** — Secure authentication with MongoDB session storage
- 💬 **Real-Time Chat App** — Live messaging powered by Socket.io
- 🎮 **13 Browser Games** — A wide variety of single-player and multiplayer games
- 📱 **Responsive Design** — Works across desktop and mobile browsers
- 🗂️ **Game Categories** — Games organized and browsable by category
- 👤 **User Profile Page** — Personalized user experience after login

---

## 🎮 Games Collection

| # | Game | Type |
|---|---|---|
| 1 | 🔢 **2048** | Single-player Puzzle |
| 2 | 🚢 **Battleships** | Multiplayer Strategy (Socket.io) |
| 3 | 🚗 **Car Race** | Single-player Racing |
| 4 | 🏎️ **HexGL** | 3D Futuristic Racing |
| 5 | 🎲 **Ludo** | Classic Board Game |
| 6 | 🔫 **Mini Militia** | Multiplayer Action Shooter |
| 7 | 👊 **Mortal Kombat** | Fighting Game |
| 8 | 🎹 **Piano** | Interactive Music Game |
| 9 | 🧩 **Puzzle Game** | Single-player Puzzle |
| 10 | ⚔️ **Shadow Fight** | Fighting Game |
| 11 | 🦑 **Squid Game** | Action / Challenge Game |
| 12 | ❌ **Tic-Tac-Toe** | Classic Board Game |
| 13 | 🐍 **Multiplayer Snake** | Multiplayer Arcade (Socket.io) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Templating** | EJS (Embedded JavaScript) |
| **Database** | MongoDB (via Mongoose) |
| **Session Store** | connect-mongo + express-session |
| **Real-time** | Socket.io |
| **Frontend** | HTML5, CSS3, JavaScript, SCSS |
| **Deployment** | Heroku (Procfile included) |
| **License** | MIT |

---

## 📁 Project Structure

```
Multi-Gaming-Website/
├── WEBSITE/
│   ├── Public/
│   │   ├── CHAT-APP/               # Real-time chat (Socket.io)
│   │   ├── CSS/                    # Global stylesheets
��   │   ├── HTML/                   # Static HTML pages
│   │   │   ├── index.html          # Home page
│   │   │   ├── category.html       # Game categories page
│   │   │   ├── about.html          # About page
│   │   │   ├── profile.html        # User profile page
│   │   │   └── images/             # Page images
│   │   ├── JAVASCRIPT/             # Client-side JavaScript
│   │   ├── PHOTOS/                 # Game & site images
│   │   └── WEB-GAMES/              # All 13 games
│   │       ├── 2048/
│   │       ├── BATTLESHIPS/
│   │       ├── CAR-RACE/
│   │       ├── HEXGL/
│   │       ├── LUDO/
│   │       ├── MINI-MILITIA/
│   │       ├── MORTAL-KOMBAT/
│   │       ├── PIANO/
│   │       ├── Puzzle Game/
│   │       ├── SHADOW-FIGHT/
│   │       ├── SQUID-GAME/
│   │       ├── TIC-TAC-TOE/
│   │       └── multiplayerSnake-master/
│   ├── Registration_Login/         # Authentication module
│   │   ├── models/                 # Mongoose user models
│   │   ├── routes/                 # Express route handlers
│   │   ├── views/                  # EJS templates (login, register)
│   │   ├── server.js               # Auth server (port 3003)
│   │   └── Procfile                # Heroku deployment config
│   ├── server.js                   # Main application server
│   └── package.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (running locally)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Lawrence27R/Multi-Gaming-Website.git

# 2. Navigate to the project directory
cd Multi-Gaming-Website/WEBSITE

# 3. Install dependencies
npm install
```

### Running the App

```bash
# Start the main server
node server.js

# In a separate terminal, start the authentication server
cd Registration_Login
node server.js
```

- Main website: [http://localhost:3000](http://localhost:3000)
- Auth server: [http://localhost:3003](http://localhost:3003)

> ⚠️ Make sure MongoDB is running on `mongodb://localhost:27017/Multi` before starting the servers.

---

## 🔐 Authentication Flow

1. User visits the **Register** page and creates an account
2. Credentials are stored securely in **MongoDB**
3. On login, a **session** is created and stored in MongoDB via `connect-mongo`
4. Authenticated users gain access to the **profile page** and full game platform
5. Sessions persist across page reloads until the user logs out

---

## 💬 Real-Time Chat

The platform includes a **Socket.io** powered chat application:

- Located at `WEBSITE/Public/CHAT-APP/`
- Allows multiple users to chat in real time
- Built with `express` + `socket.io`

```bash
# To run chat app independently
cd WEBSITE/Public/CHAT-APP
npm install
node server.js
```

---

## 🌍 Deployment (Heroku)

The project includes a `Procfile` for easy Heroku deployment:

```
web: node server.js
```

Steps to deploy:

```bash
# Login to Heroku
heroku login

# Create a new Heroku app
heroku create your-app-name

# Push to Heroku
git push heroku master

# Set MongoDB URI environment variable
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
```

> 💡 Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as your cloud database for Heroku deployment.

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "mongoose": "^x.x",
  "express-session": "^x.x",
  "connect-mongo": "^x.x",
  "ejs": "^x.x",
  "body-parser": "^x.x",
  "dotenv": "^x.x",
  "socket.io": "^1.x / ^2.x",
  "nodemon": "^2.x"
}
```

---

---

> ⭐ If you like this project, please give it a **star** on GitHub!
