// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import invoiceLogo from './img/invoice-icon.avif';
import whatsAppImg from './img/what\'sapp.jpg'; 
import facebookImg from './img/facebook.png';
import instaImg from './img/insta.png';
import twitterImg from './img/twitter.png';
import linkedInImg from './img/linkedIn.png';
import youtubeImg from './img/youtube.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid align-items-center">
                    <div className="col-lg-4 col-6 d-flex align-items-center">
                        <div className="col-6 col-sm-3 col-lg-2">
                            <img src={invoiceLogo} alt="" width="75px" className="rounded-circle" />
                        </div>
                        <div className="col-6 col-lg-3 col-xl-2 col-sm-2">
                            <i className="cmp-name">ACHU</i>
                            <em className="invoice">Invoice</em>
                        </div>
                        <Link className="navbar-brand" to="#"></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav col-6 justify-content-center">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Billing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Blog</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Features</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#footer">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex col-6 justify-content-end" role="search">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#footer">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/login">
                                    <button className="btn btn-outline-primary" type="button">Login</button>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/signup">
                                    <button className="btn btn-outline-primary" type="button">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="container-child">
                        <h1 className="my-3">Simplify Your Invoicing with Achu Invoice</h1>
                        <p className="my-4">Effortless Invoicing and Inventory Management for Businesses and Freelancers</p>
                        {/* Use Link from react-router-dom for internal routing if needed */}
                        <Link to="/dashboard">
                            <button className="invoice-btn bg-primary text-white border-0 py-2 rounded my-3">
                                Start Invoicing
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container my-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 my-2 text-center">
                        <h2>Customizable Invoice Templates</h2>
                        <p>Personalize your invoices to match your brand.</p>
                    </div>

                    <div className="col-lg-4 col-md-6 my-2 text-center">
                        <h2>Permission Sets for Staff</h2>
                        <p>Control access and maintain security.</p>
                    </div>

                    <div className="col-lg-4 my-2 text-center">
                        <h2>Easy Report Downloads</h2>
                        <p>Access detailed financial reports with just a click.</p>
                    </div>
                </div>
            </section>

            <section className="container features-sec py-4">
                <h1 className="my-5 text-primary text-center">Features</h1>
                <div className="row my-3">
                    <div className="col-md-6">
                        <h3>Customizable Templates</h3>
                        <p>Create professional-looking invoices that reflect your brand&apos;s identity. Choose from a variety of templates and customize them to your needs.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Permission Sets for Staff</h3>
                        <p>Set up different permission levels for your team to ensure that sensitive information is only accessible to those who need it.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <h3>Easy Download of Reports</h3>
                        <p>Generate and download comprehensive reports to keep track of your business finances with ease.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Inventory Management</h3>
                        <p>Keep track of your stock levels and manage your inventory directly from the app. Streamline your business operations and avoid stockouts.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <h3>One Month Free Trial</h3>
                        <p>Try all the features of our app for one month without any cost. No credit card required.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Quote Preparation</h3>
                        <p>Quickly prepare and send quotes to your clients. Convert quotes into invoices with a single click.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <h3>GST Invoice</h3>
                        <p>Generate GST-compliant invoices seamlessly. Ensure your business stays compliant with tax regulations.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Freelancers without Company Can Use</h3>
                        <p>Whether you&apos;re a freelancer or run a small business, our app is designed to cater to your invoicing needs without requiring a registered company.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <h3>Get Paid Online</h3>
                        <p>Integrate with various payment gateways to receive payments online. Speed up your cash flow and reduce payment delays.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Send Automatic Reminders</h3>
                        <p>Automate your follow-ups by setting up reminders for overdue invoices. Ensure you get paid on time, every time.</p>
                    </div>
                </div>
            </section>

            <section className="container testimonial-sec py-5">
                <h1 className="text-center text-primary my-4">Testimonials</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="my-3">Using Achu Invoice has revolutionized the way we handle invoices. The customizable templates and easy report downloads save us so much time.</p>
                        <div className="text-secondary">-Alex Parker</div>
                    </div>
                    <div className="col-md-6">
                        <p className="my-3">As a freelancer, I needed a simple yet powerful invoicing tool. Achu Invoice is perfect for my needs.</p>
                        <div className="text-secondary">-Jordan Lee</div>
                    </div>
                </div>
            </section>

            <section className="bg-primary">
                <div className="container text-center py-5">
                    <div className="row justify-content-center align-items-center">
                        <h2 className="text-white my-2">Start Your Free Trial Today!</h2>
                        <p className="text-white py-2">
                            Experience the full potential of Achu Invoice with a one-month free trial. No credit card required. Sign up now!
                        </p>
                        <button className="btn bg-white my-4 sign-up">Sign Up Now</button>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white" id="footer">
                <section className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-5">
                            <div className="row">
                                <div className="col-4">
                                    <img src="" alt="SSL Secured" />
                                </div>
                                <div className="col-4">
                                    <img src="" alt="Trusted by [X] Business" />
                                </div>
                                <div className="col-4">
                                    <img src="" alt="24/7 Customer Support" />
                                </div>
                            </div>
                            <ul className="text-center my-4 px-0">
                                <li className="my-3">Contact Us:
                                    <ul className="text-left px-0 my-2">
                                        <li>+91 9840167444</li>
                                        <li>info@tensketch.com</li>
                                    </ul>
                                </li>
                                <li className="my-3">Follow Us:
                                    <ul className="text-left px-0 row my-2">
                                        <li className="col-2"><img src={whatsAppImg} alt="WhatsApp" width="30px" /></li>
                                        <li className="col-2"><img src={facebookImg} alt="Facebook" width="30px" /></li>
                                        <li className="col-2"><img src={instaImg} alt="Instagram" width="30px" /></li>
                                        <li className="col-2"><img src={twitterImg} alt="Twitter" width="30px" /></li>
                                        <li className="col-2"><img src={linkedInImg} alt="LinkedIn" width="30px" /></li>
                                        <li className="col-2"><img src={youtubeImg} alt="YouTube" width="30px" /></li>
                                    </ul>
                                </li>
                                <li className="my-3">Terms of Service | Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </div>

    );
};

export default Header;
