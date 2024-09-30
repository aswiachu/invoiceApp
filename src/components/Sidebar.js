import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBagShopping, faNoteSticky, faFileInvoice, faDownload, faClipboard, faChartColumn, faGear, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import invoiceLogo from './img/invoice-icon.avif';
import './sidebarStyle.css';

const SidebarItem = ({ to, icon, text }) => (
  <li className="my-4 ms-4">
    <Link to={to} className="text-decoration-none text-white">
      <div className="d-flex align-items-center">
        <div className="icon-wrapper col-2">
          <FontAwesomeIcon icon={icon} className="icon" />
        </div>
        <div className="text-wrapper col-10">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  </li>
);

const Sidebar = forwardRef(({ onClose }, ref) => {
  return (
    <aside className="bg-dark vh-100 sidebarNav-body" ref={ref}>
      <ul className="sidebarNav-ul p-0">
        <li className='pt-4 ms-3'>
          <Link to="/" className="text-decoration-none d-flex align-items-center">
            <img src={invoiceLogo} alt="Invoice Logo" width="30px" height="30px" className="rounded-circle" />
            <h3 className="d-inline text-white mx-2">Invoice</h3>
          </Link>
        </li>
        <li className=''>
          <SidebarItem to="/" icon={faHouse} text="Home" />
          <SidebarItem to="/customers" icon={faUser} text="Customers" />
          <SidebarItem to="/items" icon={faBagShopping} text="Items" />
          <SidebarItem to="/quotes" icon={faNoteSticky} text="Quotes" />
          <SidebarItem to="/invoice" icon={faFileInvoice} text="Invoice" />
          <SidebarItem to="/payment-received" icon={faDownload} text="Payment Received" />
          <SidebarItem to="/expenses" icon={faClipboard} text="Expenses" />
          <SidebarItem to="/reports" icon={faChartColumn} text="Reports" />
          <SidebarItem to="/settings" icon={faGear} text="Settings" />
        </li>
        <li className='bottom-close-icon' onClick={onClose}>
          <FontAwesomeIcon icon={faAngleLeft} className='icon' />
        </li>
      </ul>
    </aside>
  );
});

export default Sidebar;
