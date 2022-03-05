import { useState } from "react"
import logo from "./img/logo.jpg"
import "./App.css"
import "./style/main.css"
import Countdown from "react-countdown"
import GitHubButton from "react-github-btn"
import event from "./event"

const Completionist = () => <span>This event is currently happening</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  const dayLabel = days === 1 ? "Day" : "Days"

  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {days ? (
          <span>
            {days} {dayLabel} :{" "}
          </span>
        ) : null}
        {hours ? <span>{hours} hrs : </span> : null}
        {minutes ? <span>{minutes} min : </span> : null}
        {seconds} Sec
      </span>
    )
  }
}

function App() {
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
        <div className="countdown">
          <Countdown date={timeToNextEvent} renderer={renderer} />
        </div>
        <section className="url">
          <div className="url__btn">
            <a href={event.ZOOM_LINK} target="_blank">
              Zoom Link →
            </a>
          </div>
          <div className="url__btn">
            <a href={event.YOUTUBE_LINK} target="_blank">
              YouTube Link →
            </a>
          </div>
        </section>
        <main className="event">
          <div className="event__title">Event Title: {event.TITLE}</div>
          <div className="event__date">
            <strong>Event Date: </strong>
            {new Date(event.DATE_TIME).toLocaleString("en-US", {
              timeZoneName: "short",
            })}{" "}
            /{" "}
            <a href={event.GOOGLE_CAL} target="_blank">
              Add to Google Calendar
            </a>
            <br />
            <small>
              <strong>Duration: </strong> ~2 Hours
            </small>
          </div>

          <div className="event__detials">{event.DETAILS}</div>
        </main>
        <aside className="links">
          <p>
            <strong>Useful Links</strong>
          </p>
          <ul>
            <li>
              <a href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
                Slack Community
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/techcareergrowth">
                Linkedin Page
              </a>
            </li>
            <li>
              <a href="https://www.techcareergrowth.co/">Official Website</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexander-chiou/">
                Alex's Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rpandey1234/">
                Rahul's Linkedin
              </a>
            </li>
          </ul>
        </aside>
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

export default App
