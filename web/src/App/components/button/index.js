import React from 'react';

import './style.scss';

const Button = ({value, type = 'primary', ...rest}) => {
  return (
    <button className={type} {...rest} >
      {value}
    </button>
  );
};

export default Button;
