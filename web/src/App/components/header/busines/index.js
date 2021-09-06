import React,  { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';

const HeaderBusines = ({ sections = [], hableSection = null }) => {
  const [openNav, setOpenNav] = useState (false);
  const history = useHistory();

  const handleNav = () => setOpenNav(!openNav);
  const handleNavClose = () => setOpenNav(false);
  return (
    <header className="header-bus">
        <div className="header-bus__logo">
          <a onClick={() => history.push('/')}>
            <img className="header-bus__logo--img" src="/logo.svg"  alt="drixit-fullstack-challenge"/>
          </a>
        </div>
        <div className="header-bus__navigation" data-value={sections.length > 0 ? 'active' : 'hide'}>
          <img className="header-bus__navigation--icon" src="/icon/menu@24.svg" onClick={handleNav} alt=""/>
          <nav className="header-bus__navigation--nav" data-value={openNav && 'activated'} >
            <span className="header-bus__navigation--nav__close" onClick={handleNavClose}> X</span>
            <ul className="header-bus__navigation--nav__wp">
              { sections && sections.map((el,k) => 
                  <li className="header-bus__navigation--nav__wp--link" key={k} onClick={() => {hableSection(el); handleNavClose();}}>
                    {el.name}
                  </li>
                )
              }
            </ul> 
          </nav>  
        </div>
    </header>
  )
};

export default HeaderBusines;
