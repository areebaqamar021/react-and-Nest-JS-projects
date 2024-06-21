# React Firebase Authentication with TailwindCSS

This project demonstrates a simple authentication system using React, Firebase, and TailwindCSS. It includes both login and sign-up functionality with email and password validation, along with a password visibility toggle feature, differentiated error messages, and a welcome page upon successful login.

## Features

- **User Authentication**: Users can sign up and log in using their email and password.
- **Form Validation**:
  - **Email Validation**: Ensures the email format is correct.
  - **Password Validation**: Ensures the password contains at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.
  - **Confirm Password**: Ensures the password and confirm password fields match during sign-up.
- **Password Visibility Toggle**: Users can toggle the visibility of the password and confirm password fields.
- **Differentiated Error Messages**: Provides specific error messages for incorrect email and password during login and sign-up.
- **Toggle Between Forms**: Users can switch between login and sign-up forms.
- **Welcome Page**: Redirects users to a welcome page upon successful login.
- **Responsive Design**: Uses TailwindCSS for a modern and responsive UI.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase project set up (follow [Firebase setup guide](https://firebase.google.com/docs/web/setup)).

### Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/areebaqamar021/firebase-auth.git
   cd firebase-auth
   
3. **Install the dependencies:**
   
   ```bash
   npm install
   
5. **Set up Firebase:**

- Create a Firebase project in the Firebase Console.
- Add a web app to your project.
- Copy the Firebase configuration and replace the placeholders in src/firebase.js with your Firebase project credentials.

  
4. **Start the development server:**

  ```bash
  npm start
```

## Project Structure

```plaintext
firebase-auth/
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── firebase.js
│   ├── index.css
│   ├── index.js
│   ├── LoginForm.js
│   ├── SignUpForm.js
│   ├── WelcomePage.js
│   └── ...
├── package.json
├── README.md
└── ...
