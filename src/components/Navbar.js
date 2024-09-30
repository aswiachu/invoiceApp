import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar =  ({ onMenuClick , text}) => {
  return (
    <header className='sticky-top'>
      <nav className="d-flex justify-content-between p-3 align-items-center bg-dark">
      <div className="d-flex gap-2 align-items-center text-white">
        <FontAwesomeIcon icon={faBars} color='white' onClick={onMenuClick} style={{ cursor: 'pointer' }}/>
        <h5 className="m-0">{text}</h5>
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} color='white' />
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
