import React from 'react';

import './style.scss';

const Link = ({ value, handleClick, hreflink = '#' }) => {
  return (
    <a className="link" href={hreflink} onClick={handleClick}>{value}</a>
  );
};

export default Link; 
