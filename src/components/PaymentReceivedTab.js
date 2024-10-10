import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser} from '@fortawesome/free-solid-svg-icons';

const PaymentReceivedTab = () => {
    return (
        <div>
            <div className="dashBoardNavContent">
                <section>
                    <div className='dash-child-tabs active pt-3'>
                        <button className="px-2 pb-2 navTabsBtn" >All</button>
                        <div className="bg-white d-flex justify-content-center align-items-center py-5">
                            <div className='text-center  my-5 py-5'>
                                <FontAwesomeIcon icon={faUser} className="navTab-icons" />
                                <p>There are no active customers</p>
                                <button className="btn bg-dark text-white btn-create">
                                <FontAwesomeIcon icon={faPlus} /> New Customer</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PaymentReceivedTab
