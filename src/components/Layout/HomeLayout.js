import React from 'react';
import { flowRight as compose } from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import HomeHeader from '../Header/HomeHeader';
import Footer from '../Footer';
import CookiesDisclaimer from '../CookiesDisclaimer';

function HomeLayout(props) {
  return (
    <div>
      <HomeHeader
        borderLess={true}
        layoutType={props.layoutType}
        homeHeaderOnly={true}
      />
      <main>{props.children}</main>
      <Footer /> 
      <CookiesDisclaimer />
    </div>
  )
}

export default compose(
  withStyles(s),
)(HomeLayout);