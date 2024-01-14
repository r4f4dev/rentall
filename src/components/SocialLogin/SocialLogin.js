import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Image
} from 'react-bootstrap';

import cx from 'classnames';
import s from './SocialLogin.css';

//Images
import faceBookIcon from '../../../public/SiteIcons/loginFacbook.svg';
import googleIcon from '../../../public/SiteIcons/loginGoogle.svg';
class SocialLogin extends Component {
  static propTypes = {
    formatMessage: PropTypes.any,
    refer: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { isAdmin } = this.props;
    if (isAdmin) {
      toastr.error('Error!', "You are logged in as admin, you can't perform this action!");
      event.preventDefault();
    }
  }

  render() {
    const { refer } = this.props;
    let FbURL = '/login/facebook';
    let GoogleURL = '/login/google';
    if (refer) {
      FbURL = '/login/facebook?refer=' + refer;
      GoogleURL = '/login/google?refer=' + refer;
    }

    return (
      <div className={s.displayFlexIcon}>
        <a className={cx(s.facebook, s.button)} onClick={(event) => this.handleClick(event)} href={FbURL}>
          <Image src={faceBookIcon} responsive />
        </a>
        <a className={cx(s.google, s.button)} onClick={(event) => this.handleClick(event)} href={GoogleURL}>
          <Image src={googleIcon} responsive />
        </a>
      </div>
    );
  }
}

const mapState = state => ({
  isAdmin: state.runtime && state.runtime.isAdminAuthenticated,
});

const mapDispatch = {
};

export default withStyles(s)(connect(mapState, mapDispatch)(SocialLogin));