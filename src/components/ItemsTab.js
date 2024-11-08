import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const ItemsTab = () => {
  const navigate = useNavigate(); 

  const [activeTab, setActiveTab] = useState('active');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateInvoice = () => {
    navigate('/newItem');
  }

  return (
    <div className="dashBoardNavContent">
      <section className=''>
        <div>
          <ul className="dashBoardNavBox list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'active' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('active')}>Active</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'unpaid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('unpaid')}>Unpaid</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          <div className="bg-white d-flex justify-content-center align-items-center py-5">
            {activeTab === 'active' && (
              <div className='text-center my-5 py-5'>
                <FontAwesomeIcon icon={faBagShopping} className="navTab-icons" />
                <p>There are no active items</p>
                <button className="btn bg-dark text-white btn-create" onClick={handleCreateInvoice}>
                  <FontAwesomeIcon icon={faPlus} className="icon" /><span>New Item</span>
                </button>
              </div>
            )}
            {activeTab === 'unpaid' && (
              <div className='text-center my-5 py-5'>
                <FontAwesomeIcon icon={faBagShopping} className="navTab-icons" />
                <p>There are no unpaid items</p>
              </div>
            )}
            {activeTab === 'all' && (
              <div className='text-center my-5 py-5'>
                <FontAwesomeIcon icon={faBagShopping} className="navTab-icons" />
                <p>There are no items</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemsTab;
