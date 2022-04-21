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
import { getDatabase } from "firebase/database"
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

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <footer className="footer">
        <span>
          &copy; 2022 Developed by{" "}
          <a href="https://twitter.com/tamalweb">Tamal Web</a>
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
