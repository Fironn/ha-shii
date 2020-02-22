import React from "react"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            background: `rebeccapurple`,
            height: '50px',
            width: '100%',
            margin: '0',
            padding: '5px 50px',
            textAlign: 'right',
            position: 'absolute',
            zIndex: '99998',
        }}
    >
        <div
            style={{
                width: '100%',
                color: `white`,
            }}
        >
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {/* <p
                style={{
                    padding: '0',
                    margin: '0',
                }}>Myblog</p> */}
        </div>
    </footer>
)

export default Footer
