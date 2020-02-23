import React from "react"
import './footer.css'

const Footer = ({ siteTitle }) => (
    <footer className="App-footer">
        <div className="App-footer-item">
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
)

export default Footer
