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

function Index() {
  const [count, setCount] = useState(0)

  const timeToNextEvent = Date.parse(event.DATE_TIME)
  const timeToTestApp = Date.now() + 60000 * 60 * 24 * 3

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <img src={logo} alt="Tech Career Growth Logo" />
          <div>
            <h1>Tech Career Growth</h1>
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
