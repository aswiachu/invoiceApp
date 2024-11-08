import React from 'react';
import { Link } from 'react-router-dom';

const SettingsTab = () => {
    return (
        <div className="dashBoardNavContent">
            <nav>
                <ul className="list-unstyled mx-4 my-0">
                    <li className="pt-4">
                        <Link to="/organizationSetupForm" className="text-decoration-none text-dark">
                            <span>Organization Profile</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/switch-organization" className="text-decoration-none text-dark">
                            <span>Switch Organization</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/usage-stats" className="text-decoration-none text-dark">
                            <span>Usage Stats</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/users" className="text-decoration-none text-dark">
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/preferences" className="text-decoration-none text-dark">
                            <span>Preferences</span>
                        </Link>
                    </li>

                    <li className='border-bottom'></li>

                    <li className="my-4">
                        <Link to="/taxes" className="text-decoration-none text-dark">
                            <span>Taxes</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/pdf-templates" className="text-decoration-none text-dark">
                            <span>Pdf Templates</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/online-payment-gateways" className="text-decoration-none text-dark">
                            <span>Online Payment Gateways</span>
                        </Link>
                    </li>
                    <li className='border-bottom'></li>

                    <li className="my-4">
                        <Link to="/opening-screen-default" className="text-decoration-none text-dark">
                            <span>Opening Screen - Default</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/image-upload-resolution" className="text-decoration-none text-dark">
                            <span>Image Upload Resolution</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/privacy-security" className="text-decoration-none text-dark">
                            <span>Privacy & Security</span>
                        </Link>
                    </li>

                    <li className='border-bottom'></li>

                    <li className="my-4">
                        <Link to="/feedback" className="text-decoration-none text-dark">
                            <span>Feedback</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/share" className="text-decoration-none text-dark">
                            <span>Share</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/rate-app" className="text-decoration-none text-dark">
                            <span>Rate App</span>
                        </Link>
                    </li>
                    <li className="pb-4">
                        <Link to="/about" className="text-decoration-none text-dark">
                            <span>About</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SettingsTab;
