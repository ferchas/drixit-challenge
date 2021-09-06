import React, { useState } from 'react';

import './style.scss';

const Input = ({title = '', required = false, autocomplete= false, onChange, typeBt = 'text', ...rest}) => {
  const [valueData, setValueData] = useState('');

  const handleChange = (event) => {
    setValueData(event.target.value)
    if(onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="input__box field">
      <input 
        type={typeBt}
        className="form__field"
        {...rest}
        required={required}
        autoComplete={autocomplete.toString()}
        value={valueData}
        onChange={handleChange}
      />
      <label htmlFor={title} className="form__label">{title}</label>
    </div>
  );
};
export default Input; 