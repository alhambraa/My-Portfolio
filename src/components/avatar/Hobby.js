import React from 'react'

import "./avatar.css";

const Hobby = () => {
    return (
        <img
            src = {require('../img/hobby.png')}
            className="hobby"
            alt="Hobby"
        />
    )
};

export default Hobby