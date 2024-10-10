import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sample = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

  // Fetch country list from the API
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryList = response.data.map(country => ({
          name: country.name.common,
          code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
        }));
        setCountries(countryList);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  // Fetch states based on the selected country using a sample API
  useEffect(() => {
    if (selectedCountry) {
      axios.get(`https://example-api.com/states?country=${selectedCountry}`)
        .then(response => {
          setStates(response.data.states); // Assuming the response contains a 'states' field
        })
        .catch(error => {
          console.error('Error fetching states:', error);
        });
    }
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    const selected = countries.find(c => c.name === e.target.value);
    setSelectedCountry(selected.name);
    setPhoneCode(selected.code);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <form>
        {/* Country Selection */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Select Country</label>
          <select
            id="country"
            className="form-select"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select a Country</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Selection */}
        {states.length > 0 && (
          <div className="mb-3">
            <label htmlFor="state" className="form-label">Select State</label>
            <select
              id="state"
              className="form-select"
              value={selectedState}
              onChange={handleStateChange}
              required
            >
              <option value="">Select a State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Phone Number */}
        {phoneCode && (
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <div className="input-group">
              <span className="input-group-text">{phoneCode}</span>
              <input
                type="tel"
                id="phoneNumber"
                className="form-control"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Sample;
