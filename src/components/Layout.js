import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <section>
        <div className="content">
          <p>{children}</p>
        </div>
      </section>

      <footer>
        <p>Copyright 2021 web warrior</p>
      </footer>
    </div>
  )
}

export default Layout
