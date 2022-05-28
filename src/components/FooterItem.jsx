import React from 'react';

const FooterItem = ({text}) => {
    return (
        <li>
            <a href="#">
                {text}
            </a>
        </li>
    );
};

export default FooterItem;