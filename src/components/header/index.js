import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './header.css'
// import { Link as LinkForScroll } from 'react-scroll';
import PropTypes from "prop-types"

const propTypes = {
  page: PropTypes.string.isRequired,
};

const defaultProps = {
  page: null,
};

const Header = ({ page, siteTitle }) => {

  // ナビゲーションバーに表示するリンク
  const NavMenu = ["Projects", "Blogs", "Contact"];

  // スクロール設定
  // let scrollPosition = 0;

  // const onScroll = () => {
  //   if (page === "home") {
  //     if (scrollPosition >= window.innerHeight) document.getElementsByClassName("App-logo")[0].style.display = "block";
  //     else document.getElementsByClassName("App-logo")[0].style.display = "none";
  //   } else document.getElementsByClassName("App-logo")[0].style.display = "block";
  // };
  // if (typeof window !== 'undefined') {
  //   window.addEventListener("scroll", () => {
  //     if (page === "home") {
  //       scrollPosition = window.scrollY;
  //       onScroll();
  //     } else document.getElementsByClassName("App-logo")[0].style.display = "block";
  //   });
  // }
  // ナビゲーションリンクの作成
  const NavMenuLiTag = NavMenu.map((item) => {
    let page_link = "";

    if (item.toLowerCase() === "home") page_link = "/";
    else page_link = "/" + item.toLowerCase() + "/";

    return (
      <li key={page_link}>
        <Link
          to={page_link}
          className="page-link"
        >
          {item}
        </Link>
      </li>
    );
  });

  return (
    <header className="App-header" title={page}>
      <nav className="App-navbar" title={page}>
        <p className="App-logo" title={page}><Link to="/" >{siteTitle}</Link></p>
        <p className="App-page" title={page}>{page}</p>
        <div className="App-navbar-item">
          <ul>
            {NavMenuLiTag}
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;