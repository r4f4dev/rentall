import React from 'react';
import { flowRight as compose } from 'lodash';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../SliderAnimation/SliderAnimation.css';
import cx from 'classnames';

// Components
import SliderAnimation from '../SliderAnimation/SliderAnimation';
import LocationSearchForm from '../LocationSearchForm';
class Layout1 extends React.Component {
    constructor(props) {
        super(props);
        this.scrollTop = this.scrollTop.bind(this);
    }

    scrollTop() {
        window.scrollTo({
            top: screen.height,
            behavior: 'smooth'
        })
    }

    render() {
        const { homeBannerImages, title, content } = this.props;
        return (
            <div>
                <div className={cx('homeBannerSlider', 'layoutOneSearch')}>
                    <div className={cx(s.homePosition, 'homePosition')}>
                        <div className={s.homeCarsoual}>
                            <SliderAnimation homeBannerImages={homeBannerImages} />
                        </div>
                        <div className={cx(s.container, s.ContainerTab)}>
                            <div className={cx(s.sliderContent, 'sliderContentAR')}>
                                <h1 className={cx(s.noMargin, s.bannerCaptionText)}>
                                    <span className={s.bannerCaptionHighlight}>
                                        {title}
                                    </span>
                                    {' '} {content}
                                </h1>
                                <div className={s.searchbox}>
                                    <LocationSearchForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default compose(withStyles(s))(Layout1);
