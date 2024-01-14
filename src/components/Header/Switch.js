import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { flowRight as compose } from 'lodash';
//import SwitchButton from 'lyef-switch-button';
// Redux
import { connect } from 'react-redux';
// Redux form
import { change } from 'redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '!isomorphic-style-loader!css-loader!lyef-switch-button/css/main.css';

import * as SwitchButton from 'react-switch';
import darkIcon from '../../../public/SiteIcons/darkMode.svg';
import lightIcon from '../../../public/SiteIcons/lightMode.svg';

export const uncheckedIcon = (
    <img src={darkIcon} className='toggleRightArrow' />
);

export const checkedIcon = (
    <img src={lightIcon} className='toggleLeftArrow' />
);

class Switch extends Component {
    static propTypes = {
        change: PropTypes.any.isRequired,
        handleSubmit: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleCallback = this.handleCallback.bind(this);
    }

    componentDidMount() {
        const { checked } = this.props;
        this.setState({
            checked
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { checked } = nextProps;
        this.setState({
            checked
        });
    }

    async handleCallback(e) {
        this.setState({ checked: e });
        let type;
        if (e) {
            type = 'dark';
            document.body.classList.add('darkMode');
            document.body.classList.remove('lightMode');
        } else {
            type = 'Light';
            document.body.classList.add('lightMode');
            document.body.classList.remove('darkMode');
        }

    }

    static defaultProps = {
        checkedIcon: checkedIcon,
        uncheckedIcon: uncheckedIcon,
    };

    render() {

        return (
            <div className='darkLightSwitch'>
                <SwitchButton
                    checked={this.state.checked}
                    onChange={(e) => this.handleCallback(e)}
                    handleDiameter={28}
                    offColor="#08f"
                    onColor="#3B2F2F"
                    offHandleColor="#0ff"
                    onHandleColor="#fff"
                    height={40}
                    width={70}
                    borderRadius={6}
                    activeBoxShadow="0px 0px 1px 2px #fffc35"
                    uncheckedIcon={
                        checkedIcon
                    }
                    checkedIcon={
                        uncheckedIcon
                    }
                    uncheckedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20
                            }}
                        >
                            ☹
                        </div>
                    }
                    checkedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                color: "red",
                                fontSize: 18
                            }}
                        >
                            ♥
                        </div>
                    }
                    className="react-switch"
                />
            </div>
        );
    }
}

const mapState = (state) => ({});

const mapDispatch = {
    change
};

export default compose(
    withStyles(s),
    connect(mapState, mapDispatch),
  )(Switch);