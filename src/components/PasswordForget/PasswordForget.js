import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';

const PasswordForgetPage = () =>
  <div className='grid'>
    <h1 className='text--center title'>Password Forget 💻</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form className='form login' onSubmit={this.onSubmit}>
        <div class='form__field'>
          <label for='login__username'>
            <svg class='icon'>
              <use link='http://www.w3.org/1999/xlink' href='#lock'></use>
            </svg>
               <span class='hidden'>Email Address</span>
          </label>
          <input
            value={this.state.email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type='text'
            placeholder='Email Address'
          />
        </div>
        <div class='form__field'>
          <button className='pws_forget' disabled={isInvalid} type='submit'>
            Reset My Password
          </button>
        </div>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to='/pw-forget'>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
