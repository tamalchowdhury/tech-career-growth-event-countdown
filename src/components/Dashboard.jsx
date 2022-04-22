import { Link } from "react-router-dom"
import "../style/form.css"
import { useAuthState } from "react-firebase-hooks/auth"

export default function Dashboard({ auth }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        {auth.currentUser ? (
          <>
            <span>Hello {auth?.currentUser?.displayName}</span> -
            <Link to="/" onClick={auth.signOut()}>
              Logout
            </Link>
          </>
        ) : (
          <span>
            If you are not Alex or Rahul then please don't use this form. Thanks
            😁
          </span>
        )}
      </p>
      <div className="form">
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
          <label htmlFor="datetime">Date/Time:</label>
          <input type="datetime-local" name="datetime" id="datetime" />
          <label htmlFor="details">Details:</label>
          <textarea name="details" id="details" cols="30" rows="10"></textarea>
          <label htmlFor="zoomlink">Zoom Link:</label>
          <input type="text" name="zoomlink" />
          <label htmlFor="zoominfo">Zoom Extra Info:</label>
          <textarea name="zoominfo" id="zoominfo" cols="30" rows="5"></textarea>
          <button type="submit" className="form__submit">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
