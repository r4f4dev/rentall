import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ExpandToggle.css';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

// Redux
import { connect } from 'react-redux';

import { setPersonalizedValues } from '../../../actions/personalized';

// Locale
import messages from '../../../locale/messages';

//image
import expandToggle from '../../../../public/SiteIcons/expandIcon.svg';
import expandListing from '../../../../public/SiteIcons/expandListingIcon.svg';



class ExpandToggle extends Component {

    constructor(props) {
        super(props);
        this.toggleExtendMap = this.toggleExtendMap.bind(this);
    }

    toggleExtendMap() { // To toggle the map to full view
        const { setPersonalizedValues, extendMap } = this.props;
        setPersonalizedValues({ name: 'extendMap', value: !extendMap });
    }
    render() {
        const { extendMap } = this.props;
        return (
            <div className={cx(s.expandContainer, 'svgImg', 'bgBlack', 'expandContainerRTL')} onClick={this.toggleExtendMap}>
                {!extendMap && <img src={expandToggle} className={cx(s.exPandIcon, 'imageRotate')}/>}
                <span className={cx(s.expandContent)}>{extendMap ? <FormattedMessage {...messages.mapListing} /> : <FormattedMessage {...messages.expandContent} />}</span>
                {extendMap && <img src={expandListing} className={cx(s.listingIcon, 'imageRotate')}/>}
            </div>
        );
    }


}



const mapState = (state) => ({
    extendMap: state.personalized.extendMap,
});

const mapDispatch = {
    setPersonalizedValues
};

export default withStyles(s)(connect(mapState, mapDispatch)(ExpandToggle));