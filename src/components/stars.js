import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const propTypes = {
    countOfStars: PropTypes.number.isRequired,
};

const Stars = ({ countOfStars }) => {
    library.add(fas);

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
                    return <FontAwesomeIcon icon={['fas', 'fish']} size='1x' style={styles.star} key={index} />
                }

                return <FontAwesomeIcon icon={['fas', 'fish']} size='1x' style={styles.starTrans} key={index} />
            })}
        </span>
    );
};

Stars.propTypes = propTypes;

export default Stars;