import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Index from "./components/Index"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
