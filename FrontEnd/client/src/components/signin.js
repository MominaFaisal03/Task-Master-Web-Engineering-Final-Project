import React from 'react';
import './cssFiles/signin.css'; 

class SigninForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, rememberMe } = this.state;
    return (
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={this.handleChange}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SigninForm;
