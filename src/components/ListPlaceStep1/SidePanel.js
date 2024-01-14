// General
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListPlaceStep1.css';
import bt from '../../components/commonStyle.css';
import cx from 'classnames';
//Image
import commonBg from '../../../public/SiteImages/becomeHostBg.svg';
import footerImage from '../../../public/SiteImages/vectorFooterImage.svg';
import darkImage from '../../../public/SiteImages/listDarkImage.svg';

class SidePanel extends Component {

	static propTypes = {
		title: PropTypes.any,
		landingContent: PropTypes.any,
	};

	render() {
		const { title, landingContent } = this.props;
		return (
			<div className={s.listBannerImageSection}>
				<div className={cx(s.listBannerImageBg, 'listBannerImageBgDark')} style={{ backgroundImage: `url(${commonBg})` }} />
				<div className={s.commonListStepSection}>
					<h3 className={s.sidePanelTitle}>{title}</h3>
					<p className={s.stepOneCommon}>{landingContent}</p>
				</div>
				<img src={footerImage} className={cx(s.footerVector, 'lightModeImg')} />
				<img src={darkImage} className={cx(s.footerVector, 'darkModeImg')} />
			</div>
		)
	}
}


export default withStyles(s, bt)(SidePanel);