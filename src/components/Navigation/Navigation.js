import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from './../SignOut/SignOut';

import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <nav>
    <ul>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><SignOutButton /></li>
    </ul>
  </nav>

const NavigationNonAuth = () =>
  <nav>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>
  </nav>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  map: state.mapState.map
});

export default connect(mapStateToProps)(Navigation);
