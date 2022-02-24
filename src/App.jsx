import { useState } from 'react'
import logo from './img/logo.jpg'
import './App.css'
import './style/main.css'
import Countdown from 'react-countdown'

const event = {
  TITLE: 'How To Have Impactful 1:1 Meetings - With Alex & Rahul',
  TIME_GMT: '26 Feb 2022 18:00:00 GMT',
  DETAILS: `Hi, we are Alex and Rahul, 2 tech leads who have ~16 years of experience combined working for top Silicon Valley software companies like Facebook, Pinterest, and Robinhood. This free event is part of a broader tech community where our mission is to lower barriers in tech for all.

  We will be talking about one of the most crucial building blocks of a successful tech career: The 1 on 1 meeting. We have had literally thousands of these across our careers, and we have learned that there is a sky high skill ceiling for them. 1:1s are an engine for so many helpful things like building relationships, onboarding, transferring knowledge, resolving disputes, and so much more. If you want to become a top software engineer or really just a top tech worker in general, you absolutely HAVE to master the 1:1 meeting. And that is exactly what we're going to help you do with this session!`,
  ZOOM_LINK:
    'https://us02web.zoom.us/j/89046059279?pwd=a2daZU8wUngyelpjdjRHOVVLWEhTUT09',
  YOUTUBE_LINK: 'https://www.youtube.com/c/RahulPandeyrkp/videos',
  GOOGLE_CAL:
    'https://calendar.google.com/calendar/event?action=TEMPLATE&dates=20220226T180000Z%2F20220226T200000Z&details=For%20details%2C%20visit%20https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F%0A%0AHi%2C%20we%20are%20Alex%20and%20Rahul%2C%202%20tech%20leads%20who%20have%20~16%20years%20of%20experience%20combined%20working%20for%20top%20Si%E2%80%A6&text=How%20To%20Have%20Impactful%201%3A1%20Meetings%20-%20With%20Alex%20%26%20Rahul&location=https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F',
  OUTLOOK_CAL:
    'https://outlook.office.com/calendar/0/deeplink/compose?startdt=2022-02-26T18%3A00%3A00Z&enddt=2022-02-26T20%3A00%3A00Z&subject=How%20To%20Have%20Impactful%201%3A1%20Meetings%20-%20With%20Alex%20%26%20Rahul&body=For%20details%2C%20visit%20https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F%0A%0AHi%2C%20we%20are%20Alex%20and%20Rahul%2C%202%20tech%20leads%20who%20have%20~16%20years%20of%20experience%20combined%20working%20for%20top%20Si%E2%80%A6&location=https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F',
  YAHOO_CAL:
    'https://calendar.yahoo.com/?v=60&TYPE=20&VIEW=d&DESC=For%20details%2C%20visit%20https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F%0A%0AHi%2C%20we%20are%20Alex%20and%20Rahul%2C%202%20tech%20leads%20who%20have%20~16%20years%20of%20experience%20combined%20working%20for%20top%20Si%E2%80%A6&ST=20220226T180000Z&ET=20220226T200000Z&TITLE=How%20To%20Have%20Impactful%201%3A1%20Meetings%20-%20With%20Alex%20%26%20Rahul&URL=https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F&in_loc=https%3A%2F%2Fwww.linkedin.com%2Fevents%2F6887512898000830464%2Fabout%2F',
}

const Completionist = () => <span>This event is currently happening</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {days ? <span>{days} Days : </span> : null}
        {hours ? <span>{hours} hrs : </span> : null}
        {minutes ? <span>{minutes} min : </span> : null}
        {seconds} Sec
      </span>
    )
  }
}

function App() {
  const [count, setCount] = useState(0)

  const timeToNextEvent = Date.parse(event.TIME_GMT)
  const timer10sec = Date.now() + 60000 * 60 * 24 * 2

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
            Event Date: {new Date(event.TIME_GMT).toLocaleString()} /{' '}
            <a href={event.GOOGLE_CAL} target="_blank">
              Add to Google Calendar
            </a>
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
        &copy; 2022 Developed by{' '}
        <a href="https://twitter.com/tamalweb">Tamal Web</a>
      </footer>
    </>
  )
}

export default App
