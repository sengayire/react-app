import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Home from './Home';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';

const Routes = ({ isAuth }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} isAuth={isAuth} />} />
    <Route exact path="/login" render={props => <Signin {...props} isAuth={isAuth} />} />
    <Route exact path="/signup" render={props => <Signup {...props} isAuth={isAuth} />} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool, match: PropTypes.object };
Routes.defaultProps = { match: { params: {} }, isAuth: false };

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });
export default connect(mapStateToProps)(Routes);
