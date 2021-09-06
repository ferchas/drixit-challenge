import React from 'react';
import { HeaderBusines } from '../../header';

import './style.scss';

const Bisnes = ({ children = null, sections, hableSection }) => (
  <div className="layout-busines">
    <HeaderBusines sections={sections}  hableSection={hableSection}/>
    {children}
  </div>
);

export default Bisnes;
