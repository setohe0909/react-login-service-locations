import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './../SignUp/SignUp';
import { PasswordForgetLink } from './../PasswordForget/PasswordForget';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div className='grid'>
    <h1 className='text--center title'>Welcome! 🤖</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className='form login' onSubmit={this.onSubmit}>
        <div class='form__field'>
          <label for='login__username'>
            <svg class='icon'>
                  <use link='http://www.w3.org/1999/xlink' href='#user'></use>
            </svg>
               <span class='hidden'>Email</span>
          </label>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type='text'
            placeholder='Email Address'
          />
        </div>
        <div class='form__field'>
          <label for='login__username'>
            <svg class='icon'>
              <use link='http://www.w3.org/1999/xlink' href='#lock'></use>
            </svg>
               <span class='hidden'>Password</span>
          </label>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type='password'
            placeholder='Password'
          />
        </div>
        <div class='form__field'>
          <button className='signIn' disabled={isInvalid} type='submit'>
            Sign In
          </button>
        </div>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
