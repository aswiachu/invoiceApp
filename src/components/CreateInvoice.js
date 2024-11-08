import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisVertical, faChevronDown, faPlus, faGear, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

const CreateInvoice = () => {
    const navigate = useNavigate(); 

    const invoiceTerms = [
        "Due on receipt",
        "Net 15",
        "Net 30",
        "Net 45",
        "Net 60",
        "Due end of the month",
        "Due end of the next month",
        "Custom"
    ];

    const salesPersons = [
        "Select a sales Person"
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
      };

    return (
        <div className='newInvoice-body pb-2'>
            <div className='d-flex align-items-center justify-content-center py-3 px-4 newInvoice-topBar'>
                <div className='w-50'>
                    <div className='d-flex align-items-center justify-content-start'>
                        <FontAwesomeIcon icon={faArrowLeft} className='mx2' onClick={handleBackClick} />
                        <h6 className='mx-3 mb-0 font-size'>New Invoice</h6>
                    </div>
                </div>
                <div className='w-50'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <span className='mx-3 font-size'>Save as Draft</span>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3 '>
                    <label className='label-clr-size required'>Customer Name <span class="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            id="name"
                            name="name"
                            required
                            placeholder='Start typing to select a customer'
                        />
                        <FontAwesomeIcon icon={faPlus} className="icon-right font-size" />
                    </div>

                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Invoice# <span class="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            type="text"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                            id="name"
                            name="name"
                            required
                            placeholder='INV-00001'
                        />
                        <FontAwesomeIcon icon={faGear} className="icon-right font-size" />
                    </div>
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Order Number</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="name"
                        name="name"
                    />
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Invoice Date <span class="text-danger">*</span></label>
                    <input
                        type="date"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="invoiceTerms" className="label-clr-size required">Terms <span className="text-danger">*</span></label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="invoiceTermsList"
                            id="invoiceTerms"
                            name="invoiceTerms"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                        />
                        <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                    </div>
                    <datalist id="invoiceTermsList">
                        {invoiceTerms.map((term, index) => (
                            <option key={index} value={term} />
                        ))}
                    </datalist>
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Due Date <span class="text-danger">*</span></label>
                    <input
                        type="date"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="name"
                        name="name"
                        required
                    />
                </div>

            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className="d-flex flex-column my-2 mb-3">
                    <label htmlFor="invoiceTerms" className="label-clr-size required">Sales Person</label>
                    <div className="input-with-icon position-relative">
                        <input
                            list="salesPersonsList"
                            id="salesPerson"
                            name="salesPerson"
                            className="font-size input-border border-top-0 border-start-0 border-end-0 w-100"
                        />
                        <FontAwesomeIcon icon={faChevronDown} className="icon-right font-size" />
                    </div>
                    <datalist id="salesPersonsList">
                        {salesPersons.map((term, index) => (
                            <option key={index} value={term} />
                        ))}
                    </datalist>
                </div>

                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Subject</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="name"
                        name="name"
                        required
                        placeholder='What is this Invice for?'
                    />
                </div>

            </div>

            <div className='bg-white m-2 border rounded px-3 py-4'>
                <div className='add-line-item rounded text-center py-2'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <span className='font-size mx-2'>Add Line Item</span>
                </div>
            </div>

            <div className='bg-white m-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Customer Notes</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="Customer Notes"
                        name="Customer Notes"
                        value="Thank you for your business."
                    />
                </div>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Terms & Conditions</label>
                    <input
                        type="text"
                        className="font-size input-border border-top-0 border-start-0 border-end-0"
                        id="Terms & Condition"
                        name="Terms & Condition"
                    />
                </div>
            </div>

            <div className='bg-white mx-2 mt-2 border rounded px-3 py-2'>
                <div className='d-flex flex-column my-2 mb-3'>
                    <label className='label-clr-size required'>Attachments</label>
                    <input
                        type="file"
                        className="font-size my-2"
                        id="Attachments"
                        name="Attachments"
                    />
                </div>
            </div>
        </div>
    )
}

export default CreateInvoice
