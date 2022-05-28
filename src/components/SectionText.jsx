import React from 'react';

const SectionText = ({className, innerText}) => {
    return (
        <p className={className}>
            {innerText}
        </p>
    );
};

export default SectionText;