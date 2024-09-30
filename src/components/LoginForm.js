// src/components/LoginForm.js
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication)
    navigate('/organisation-details'); 
  };

  return (
    <section className="h-100 d-flex align-items-center justify-content-center p-3">
      <form className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3" onSubmit={handleSubmit}>
        <div className="text-center">
          <h3 className="mb-5">Login to your account</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-center mt-5 mb-2">
          <button type="submit" className="btn btn-primary px-5 login">Login</button>
        </div>
        <div className="mb-2 text-right">
          <div className="form-text d-flex justify-content-between">
            <div>
              <a href="#">Forgot password?</a>
            </div>
            <div>
            <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
