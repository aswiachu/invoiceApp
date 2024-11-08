import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faUser, faReceipt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tabs from './HomeInsideTabs';
import sparkleImg from './img/sparkle.webp';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const IconCard = ({ icon, label }) => {
  return (
    <div className="col-3 text-center">
      <div className="d-flex justify-content-center">
        <div className="bg-circle d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <p className="text-center m-0">{label}</p>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

const Home = () => {
  const navigate = useNavigate();
  const handleCreateInvoice = () => {
    navigate('/createInvoice');
  }

  return (
    <main className='home-bg-color'>
      <div className="dashBoardNavContent">
        <section className="d-flex justify-content-center py-4 mb-3 px-md-5">
          <div className="col-1">
            <img src={sparkleImg} alt="Sparkle" width="25" />
          </div>
          <div className="col-10">
            <h4>Welcome Aswitha</h4>
            <p className="m-0">Here&apos;s your organization overview</p>
          </div>
        </section>

        <section className="bg-white rounded mx-2 py-4 mb-3 py-md-5 px-md-5">
          <div className="d-flex align-items-center justify-content-around mx-4">
            <IconCard icon={faFileInvoice} label="New Invoices" />
            <IconCard icon={faUser} label="New Customers" />
            <IconCard icon={faReceipt} label="New Expenses" />
          </div>
        </section>

        <section className="bg-white rounded mx-2 py-4 px-3 mb-3 py-md-5 px-md-5">
          <div>
            <h6>View Your Receivables Summary</h6>
            <p>Keep an eye on current and overdue amounts your customers owe you.</p>
            <button className="btn bg-dark text-white btn-create" onClick={handleCreateInvoice}>
              <FontAwesomeIcon icon={faPlus} />
              <span> Create Invoice</span>
            </button>
          </div>
        </section>

        <section className="bg-white rounded mx-2 py-4 mb-3 px-md-5 py-md-5">
          <Tabs />
        </section>

        <section className="bg-white rounded mx-2 py-3 px-3 mb-3 px-md-5">
          <h6>Sales and Expenses</h6>
        </section>
        <section className="bg-white rounded mx-2 py-3 px-3 px-md-5">
          <h6>Top Expenses</h6>
        </section>
      </div>
    </main>
  );
};

export default Home;
