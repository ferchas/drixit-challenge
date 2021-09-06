import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header';

import './style.scss';

const Customer = (props) => (
  <div className="layout-customer">
    <Header />
    {props.children}
  </div>
);

Customer.propTypes = {
  children: PropTypes.element
};

export default Customer;
