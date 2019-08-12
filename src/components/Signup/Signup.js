import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { signup } from '../../actions/user';
import Alert from '../common/Alert';

class Signup extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    isAuth: false,
    moreFields: 'hidden',
    errors: {},
    loading: false,
    message: ''
  };

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    const { errors, isAuth } = nextProps;
    if (isAuth === true) window.location = '/';
    if (errors && errors) {
      this.setState({ errors: errors.message || '' });
    }
  }

  handleChange = (e) => {
    const form = { [e.target.name]: e.target.value };

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        ...form
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const { signup } = this.props;
    signup(form);
  };

  render() {
    const { form, errors } = this.state;
    return (
      <div>
        <Header />
        {/* <div className="Login container">
          {errors ? <Alert alertType="danger" message={errors} /> : ''}
        </div> */}
        <div id="page-body">
          <div class="form-container">
            <h1>Sign Up Form</h1>
            <form class="sign-form" id="sign-up">
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                placeholder=" First Name"
                required="true"
              />

              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                placeholder=" Last Name"
                required
              />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder=" Email"
                required
              />

              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder=" Password"
                required
              />

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={this.handleChange}
                placeholder=" Confirm password"
                required
              />

              <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
            {/* <Link to="/">
              <p>Back Home</p>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { signup: { loading, message, errors } } }) => ({
  loading,
  message,
  errors
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
