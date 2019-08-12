import { user as initialState } from '../../store/initialState';
import signinReducer from './signinReducer';
import signupReducer from './signupReducer';

export default (state = initialState, action) => {
  const signin = signinReducer(state, action);
  const signup = signupReducer(state, action);
  return signin || signup || state;
};
