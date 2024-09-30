import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const InvoiceTab = () => {
  const [activeTab, setActiveTab] = useState('unpaid');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashBoardNavContent">
      <section className=''>
        <div>
          <ul className="dashBoardNavBox list-unstyled d-flex align-items-center justify-content-center pt-3 mb-0">
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'unpaid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('unpaid')}>Unpaid</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'paid' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('paid')}>paid</button>
            </li>
            <li className={`col-4 text-center dash-child-tabs ${activeTab === 'all' ? 'active' : ''}`}>
              <button className="px-2 pb-2 navTabsBtn" onClick={() => handleTabClick('all')}>All</button>
            </li>
          </ul>
          <div className="bg-white d-flex justify-content-center align-items-center py-5">
            {activeTab === 'unpaid' && (
              <div className='text-center my-5 py-5'>
                  <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p>There is no Unpaid Invoices.</p>
              </div>
            )}
            {activeTab === 'paid' && (
              <div className='text-center my-5 py-5'>
                  <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p>There are no paid Invoices</p>
              </div>
            )}
            {activeTab === 'all' && (
              <div className='text-center my-5 py-5'>
                 <FontAwesomeIcon icon={faFileInvoice} className="navTab-icons" />
                <p>There are no invoices</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvoiceTab;
