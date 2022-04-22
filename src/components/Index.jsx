import { useState } from "react"
import logo from "../img/logo.jpg"
import "../style/main.css"
import "../style/App.css"
import Countdown from "react-countdown"
import GitHubButton from "react-github-btn"
import event from "../helpers/event"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbgDJM0Fhrzo6Omo0hTtHEphcqpEEfBKc",
  authDomain: "tcg-event.firebaseapp.com",
  databaseURL: "https://tcg-event-default-rtdb.firebaseio.com",
  projectId: "tcg-event",
  storageBucket: "tcg-event.appspot.com",
  messagingSenderId: "149216901118",
  appId: "1:149216901118:web:b7ae5d551c85e16afef2af",
}

import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.

        const { displayName, email, photoURL } = result.user
        console.log(displayName, email, photoURL)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <>
      <h2>Login</h2>
      <p>You must be logged in to access the Dashboard</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function Index() {
  const [count, setCount] = useState(0)

  const timeToNextEvent = Date.parse(event.DATE_TIME)
  const timeToTestApp = Date.now() + 60000 * 60 * 24 * 3

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Link to="/">
            <img src={logo} alt="Tech Career Growth Logo" />
          </Link>
          <div>
            <h1>
              <Link to="/">Tech Career Growth</Link>
            </h1>
            <p>Next Event Countdown</p>
          </div>
        </header>
        {/* Render the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard auth={auth} />} />
        </Routes>
      </div>
      <footer className="footer">
        <span>
          &copy; 2022 Developed by{" "}
          <a href="https://twitter.com/tamalweb">Tamal Web</a>{" "}
          <Link to="/dashboard">Dashboard</Link>
        </span>
        <GitHubButton
          href="https://github.com/tamalweb/tech-career-growth-event-countdown"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star tamalweb/tech-career-growth-event-countdown on GitHub"
        >
          Star
        </GitHubButton>
      </footer>
    </>
  )
}

export default Index
