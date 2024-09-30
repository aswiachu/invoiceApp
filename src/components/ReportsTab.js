import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReportsTab = () => {
  const reports = [
    {
      title: "Sales Reports",
      reportsList: [
        "Sales by Date Range",
        "Sales by Product/Service",
        "Sales by Customer",
        "Sales by Staff/Admin",
        "Sales by Location",
      ]
    },
    {
      title: "Invoice Reports",
      reportsList: [
        "Total Invoices Issued",
        "Paid vs. Unpaid Invoices",
        "Overdue Invoices",
        "Invoice Breakdown by Payment Methods",
      ]
    },
    {
      title: "Customer Reports",
      reportsList: [
        "Customer Transaction History",
        "Outstanding Payments by Customer",
        "Customer Lifetime Value (CLV)",
        "New vs. Returning Customers",
      ]
    },
    {
      title: "Product/Service Reports",
      reportsList: [
        "Top-Selling Products/Services",
        "Inventory Reports",
        "Low Stock Alerts",
      ]
    },
    {
      title: "Tax Reports",
      reportsList: [
        "GST/VAT Collected",
        "Taxable vs. Non-Taxable Sales",
      ]
    },
    {
      title: "Staff Reports",
      reportsList: [
        "Sales by Staff Member",
        "Invoices Generated by Staff",
        "Customer Service Reports",
      ]
    },
  ];

  return (
    <div className="container">
      <div className="row py-3">
        {reports.map((reportGroup, index) => (
          <div className="" key={index}>
            <div className='text-primary'>{reportGroup.title}</div>
            <ul className="list-unstyled mx-3">
              {reportGroup.reportsList.map((report, idx) => (
                <li key={idx} className='my-3'>
                  <span>{report}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsTab;