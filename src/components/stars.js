import PropTypes from 'prop-types';
import React from 'react';
import birdPng from '../images/bird.png';

const propTypes = {
    countOfStars: PropTypes.number.isRequired,
};

const Stars = ({ countOfStars }) => {

    const styles = {
        star: {
            margin: '0px 1px',
        },
        starTrans: {
            opacity: '0.3',
            margin: '0px 1px',
        },
    };

    if (countOfStars < 1 || countOfStars > 5) {
        return null;
    }

    const stars = []; // 1 means nomal star, null means translucent star

    for (let i = 0; i < countOfStars; i += 1) {
        stars.push(1);
    }
    for (let i = 3; i > countOfStars; i -= 1) {
        stars.push(null);
    }

    return (
        <span>
            {stars.map((star, index) => {
                if (star) {
                    return <img src={birdPng} style={styles.star} height="17px" alt="" key={index} />
                }

                return <img src={birdPng} style={styles.starTrans} height="17px" alt="" key={index} />
            })}
        </span>
    );
};

Stars.propTypes = propTypes;

export default Stars;