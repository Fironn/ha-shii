import React from "react"
import './footer.css'
import PropTypes from "prop-types"

const propTypes = {
    page: PropTypes.string.isRequired,
};

const defaultProps = {
    page: null,
};

const Footer = ({ page, siteTitle }) => (
    <footer className="App-footer" title={page}>
        <div className="App-footer-item">
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a><br />
            <a target="_blank" rel="noopener noreferrer" href="https://icons8.jp">アイコン8</a>
        </div>
    </footer>
)

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer