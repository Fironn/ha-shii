import React from "react"
import './top.scss'
import PropTypes from "prop-types"

// const propTypes = {
//     title: PropTypes.string,
// };

const Top = ({ title }) => {
    return (
        <div className="title">
            <h1 id="title">{title}</h1>
        </div>
    );
};

Top.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Top;