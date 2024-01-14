import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
// Redux
import { connect } from 'react-redux';
// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListPlaceTips.css';
import {
  Col
} from 'react-bootstrap';
// Style
import cx from 'classnames';
// Local
import messages from '../../locale/messages';
class ListPlaceTips extends React.Component {
  static propTypes = {};

  render() {
    const { sideMenuData } = this.props;
    
    return (
      <Col xs={12} sm={5} md={5} lg={5} xsHidden>
        <div className={s.helpPanelContainer}>
          <div className={cx(s.helpPanel, 'bgBlack')}>
            <div className={cx(s.helpPanelText, 'textWhite')}>
              {
                sideMenuData && sideMenuData.length > 0 && sideMenuData.map((item,key)=>{
                  return(
                  <p key={key}>
                    <span className={cx(s.helpPanelTextTitle, 'textWhite')}>
                      {item.title}
                    </span>
                    <span>
                    {item.description}
                    </span>
                  </p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

const mapState = (state) => ({
  sideMenuData: state.sideMenu.data
});

const mapDispatch = {};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(ListPlaceTips)));
// export default withStyles(s)(ListPlaceTips);

