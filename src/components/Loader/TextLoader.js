import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loader.css';
import cx from 'classnames';

class TextLoader extends React.Component {

    static propTypes = {
        loadingText: PropTypes.string,
    };

    render() {
        const { loadingText, loadingTextSize, className } = this.props;
        return (
            <div className={cx(s.textCenter, className)}>
                <p className={cx(s.saving, 'savaLoader')}>
                    <span>{loadingText}</span>
                    <span className={cx(s.savingDots, 'savingDotsLoader')}>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </p>
            </div>
        );
    }
}

export default withStyles(s)(TextLoader);