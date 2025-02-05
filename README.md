![Lingo Bingo Screenshot](https://i.ibb.co.com/DPJzQCYn/Screenshot-41.png)

# Lingo-Bingo

Welcome to Lingo Bingo, a single-page web application designed to enhance vocabulary learning for Japanese language enthusiasts. This document serves as the README file for the project.
## Project Purpose

The main goal of Lingo Bingo is to provide an engaging, user-friendly platform for learning Japanese vocabulary. The application offers lessons, tutorials, and vocabulary cards, making the language learning experience interactive and enjoyable.

## Project overview
Lingo Bingo is a dynamic single-page web application designed to support Japanese language learners in expanding their vocabulary through an engaging and interactive experience. The platform provides structured lessons, vocabulary flashcards, and embedded video tutorials to aid in learning. Users can navigate seamlessly through different sections, including tutorials, lessons, and vocabulary challenges.

The application also features authentication using Firebase, allowing users to log in via email/password or Google authentication. Logged-in users receive a personalized experience with a welcome message displaying their name and profile picture. The homepage includes a visual slider showcasing language elements, while an animated success counter (powered by React CountUp) adds motivation by tracking learning milestones.

With an intuitive user interface, smooth animations, and a responsive design, Lingo Bingo makes learning Japanese vocabulary both enjoyable and efficient.
## Features

- Displays a welcome message with the user name and profile image if logged in.
- Public: Home, Start Learning, Tutorials, About Us
-  login/logout functionality
- Welcome message for logged-in users.
- Navbar with dynamic links based on user authentication.
- Home Page: Slider with language visuals.
- Animated success counters using react-countup.
- Let’s Learn: Lesson cards redirecting to detailed pages.
- Embedded YouTube tutorials.
- Lessons Page: Vocabulary cards filtered by difficulty.

- Authentication: Email/password login and Google authentication.
- Password validation and "Forgot Password" feature.
- My Profile: User details and update options using Firebase.

- Error Handling: User-friendly 404 page with a redirection button.


## Npm Packages

**React.js .**  
**React-router-dom** 
**Firebase:** Authentication and data handling.
**React Router.**
**React Toastify.** 
**React CountUp.**
**AOS.** 

## Technologies used
- React.js
- React-router-dom 
- Firebase: Authentication and data handling.
- React Router.
- React Toastify. 
- React CountUp.

## 🛠 Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/lingo-bingo.git
   cd lingo-bingo
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase credentials:

   ```env
   VITE_apiKey=YOUR_API_KEY
   VITE_authDomain=YOUR_AUTH_DOMAIN
   VITE_projectId=YOUR_PROJECT_ID
   VITE_storageBucket=YOUR_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
   VITE_appId=YOUR_APP_ID
   VITE_measurementId=YOUR_MEASUREMENT_ID
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

---

## 🎮 Usage

- Navigate through different sections like **Tutorials, Lessons, and Vocabulary Challenges**.
- Log in using **Email/Google authentication** to track progress.
- Use **flashcards and video lessons** for learning.
- Monitor your achievements with the **React CountUp** success counter.

---

## ⚙️ Configuration

Lingo Bingo uses **Vite** for frontend development and **Firebase** for authentication and backend functionalities. Modify the `.env` file to configure your Firebase project.

---

## 📦 Dependencies
- animate.css: ^4.1.1,
- firebase: ^11.0.2,
- localforage: ^1.10.0,
- match-sorter: ^8.0.0,
- react: ^18.3.1,
- react-countup: ^6.5.3,
- react-dom: ^18.3.1,
- react-router-dom: ^6.28.0,
- react-toastify: ^10.0.6,
- sort-by: ^1.2.0
 
## 📦 Dev Dependencies
- @eslint/js: ^9.13.0,
- @types/react: ^18.3.12,
- @types/react-dom: ^18.3.1,
- @vitejs/plugin-react: ^4.3.3,
- autoprefixer: ^10.4.20,
- daisyui: ^4.12.14,
- eslint: ^9.13.0,
- eslint-plugin-react: ^7.37.2,
- eslint-plugin-react-hooks: ^5.0.0,
- eslint-plugin-react-refresh: ^0.4.14,
- globals: ^15.11.0,
- postcss: ^8.4.49,
- tailwindcss": ^3.4.15,
- vite: ^5.4.10


## 🛠 Development

### Running Locally
```sh
npm run dev
```

### Building for Production
```sh
npm run build
```

### Linting Code
```sh
npm run lint
```

---

## 🤝 Contributors

- **Your Name** – [GitHub](https://github.com/yourusername)

Want to contribute? Feel free to submit a pull request!

---


## Live link

 - Click here for [live website](https://legendary-pudding-a9e530.netlify.app/)


