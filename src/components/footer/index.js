import React from "react"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            background: `rebeccapurple`,
            height:'150px',
            margin:'0',
            padding:'50px',
        }}
    >
        <div
            style={{
                maxWidth: 960,
                color: `white`,
            }}
        >
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        <p>Myblog</p>
        </div>
    </footer>
)

export default Footer
