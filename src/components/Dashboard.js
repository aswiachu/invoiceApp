import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [navText, setNavText] = useState('Home'); // Default text
  const sidebarRef = useRef(null); // Create a ref for the sidebar

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Update navText based on current route
    switch (location.pathname) {
      case '/':
        setNavText('Home');
        break;
      case '/customers':
        setNavText('Customers');
        break;
      case '/items':
        setNavText('Items');
        break;
      case '/quotes':
        setNavText('Quotes');
        break;
      case '/invoice':
        setNavText('Invoice');
        break;
      case '/payment-received':
        setNavText('Payment Received');
        break;
      case '/expenses':
        setNavText('Expenses');
        break;
      case '/reports':
        setNavText('Reports');
        break;
      case '/settings':
        setNavText('Settings');
        break;
      default:
        setNavText('Page Not Found');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <Navbar onMenuClick={toggleSidebar} text={navText} />
      {isSidebarOpen && (
        <Sidebar ref={sidebarRef} onClose={closeSidebar} />
      )}
      <main className='dashboard-body'>
        <Outlet /> {/* Render nested routes */}
      </main>
    </div>
  );
};

export default Dashboard;
