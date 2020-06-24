import PropTypes from 'prop-types';
import React from 'react';
import Stars from '../stars';
import './Skills.css';

const propTypes = {
    skillName: PropTypes.string.isRequired,
    skillLevel: PropTypes.number.isRequired,
};

const Skill = ({ skillName, skillLevel }) => {

    if (skillLevel < 1 || skillLevel > 5) {
        return null;
    }

    return (
        <div className="container">
            <div className="name">{skillName}</div>
            <div className="stars" style={{ fontSize: '16px' }}>
                <Stars countOfStars={skillLevel} />
            </div>
        </div>
    );
};

Skill.propTypes = propTypes;

export default Skill;