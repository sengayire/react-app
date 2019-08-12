import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Alert from '../common/Alert';
import { login } from '../../actions/user';

class Signin extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const { signin: { errors, message } } = nextProps;

    if ((errors && errors !== '') || message) {
      this.setState({ message, errors: errors.message || '' });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handeleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { login } = this.props;
    login({ email, password });
  };

  render() {
    const { message, errors } = this.state;
    return (
      <div>
        <Header />
        <div className="Login container">
          {(message || (errors && errors !== '')) && (
            <Alert
              alertType={(message && 'success') || (errors && 'danger')}
              message={message || errors}
            />
          )}
        </div>
        <div id="page-body">
          <div class="form-container">
            <h1>Sign In Form</h1>
            <form id="sign-in" onSubmit={this.handeleSubmit}>
              <input
                name="email"
                onChange={this.handleChange}
                type="email"
                placeholder=" Email"
                required
              />
              <input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder=" Password"
                required
              />
              <button>Sign in</button>
            </form>
            <div id="forgot">
              <a href="./resetpw.html">
                <p>forgot password?</p>
              </a>
            </div>
            {/* <Link to="/">
              <p>Back Home</p>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
Signin.PropTypes = {
  errors: PropTypes.object,
  signin: { message: PropTypes.object, errors: PropTypes.object }
};
const mapStateToProps = ({ user: { signin } }) => ({ signin });

export default connect(
  mapStateToProps,
  { login }
)(Signin);
