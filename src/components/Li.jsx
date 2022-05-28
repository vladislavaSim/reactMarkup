import React from 'react';

const Li = ({innerText}) => {
    return (
        <li className="nav-item">
            <a href="#">{innerText}</a>
        </li>
    );
};

export default Li;