import React, { useState } from 'react';
import axios from 'axios'; 
import './cssFiles/signup.css'; 

function SignupForm() {
  const [input, setInput] = useState({
   username: '',
   email: '',
   password: '',
   confirm_password: '',
  });
  const [errors, setErrors] = useState({}); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/user/addUser', input) 
      .then((response) => {
        console.log(response.data);
        setInput({
          username: '',
          email: '',
          password: '',
          confirm_password: '',
        });
        alert('Form is submitted');
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label fs-5 fw-bold">
            USERNAME:
          </label>
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
            className="form-control fs-5"
            placeholder="Enter username"
            id="username"
          />
          {/* Display error message if username field has an error */}
          <div className="text-danger form-text fw-bold fs-5">
            {errors.username}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label fs-5 fw-bold">
            EMAIL ADDRESS:
          </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="form-control fs-5"
            placeholder="Enter Email"
            id="email"
          />
          {/* Display error message if email field has an error */}
          <div className="text-danger form-text fw-bold fs-5">
            {errors.email}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label fs-5 fw-bold">
            PASSWORD:
          </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="form-control fs-5"
            placeholder="Enter password"
            id="password"
          />
          {/* Display error message if password field has an error */}
          <div className="text-danger form-text fw-bold fs-5">
            {errors.password}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password" className="form-label fs-5 fw-bold">
            CONFIRM PASSWORD:
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={input.confirm_password}
            onChange={handleChange}
            className="form-control fs-5"
            placeholder="Enter confirm password"
          />
          {/* Display error message if confirm password field has an error */}
          <div className="text-danger form-text mb-5 fw-bold fs-5">
            {errors.confirm_password}
          </div>
        </div>
        <input
          type="submit"
          value="SUBMIT"
          className="btn btn-success d-flex justify-content-center mx-auto mb-3 px-3"
        />
      </form>
    </div>
  );
}

export default SignupForm;
