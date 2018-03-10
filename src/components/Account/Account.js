import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetForm } from './../PasswordForget/PasswordForget';
import PasswordChangeForm from './../PasswordChange/PasswordChange';
import withAuthorization from './../withAuthorization';

const AccountPage = ({ authUser }) =>
  <div className='grid'>
    <h1 className='text--center title'>Account: { authUser.email }</h1>
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
