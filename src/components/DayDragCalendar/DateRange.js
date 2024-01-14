import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

// Redux Action
import { change, formValueSelector } from 'redux-form';

import moment from 'moment';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '!isomorphic-style-loader!css-loader!react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import { DateRangePicker } from 'react-dates';
import { isRTL } from '../../helpers/formatLocale';
import messages from '../../locale/messages';

class DateRange extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null,
            isCurrentStatus: 2,
            from: undefined,
            to: undefined,
            dateRange: [],
        };

        this.onDatesChange = this.onDatesChange.bind(this);
    }

    componentDidMount() {
        const { defaultStartDate, defaultEndDate, isCurrentStatus } = this.props;

        this.setState({
            isCurrentStatus: isCurrentStatus
        })

        if (defaultStartDate) {
            this.setState({
                startDate: moment(moment(defaultStartDate)),
            });
        }

        if (defaultEndDate) {
            this.setState({
                endDate: moment(moment(defaultEndDate)),
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { defaultStartDate, defaultEndDate, isCurrentStatus } = nextProps;
        this.setState({
            isCurrentStatus: isCurrentStatus
        })
        if (defaultStartDate) {
            this.setState({
                startDate: moment(moment(defaultStartDate)),
            });
        }

        if (defaultEndDate) {
            this.setState({
                endDate: moment(moment(defaultEndDate)),
            });
        }
    }


    async onDatesChange({ startDate, endDate }) {
        const { formName, change, startDateName, endDateName, resetCalendar } = this.props;
        const { isCurrentStatus } = this.state;
        const { onChange } = this.props;
        this.setState({ startDate, endDate });
        change(formName, 'startDate', startDate);
        change(formName, 'endDate', endDate);
        await resetCalendar();
    }


    render() {
        const { locale } = this.props;
        const { focusedInput, startDate, endDate, isCurrentStatus } = this.state;
        const { formatMessage } = this.props.intl;

        return (
            <div>
                <DateRangePicker
                    {...this.props}
                    onDatesChange={this.onDatesChange}
                    focusedInput={focusedInput}
                    startDate={startDate}
                    endDate={endDate}
                    numberOfMonths={1}
                    startDatePlaceholderText={formatMessage(messages.StartDate)}
                    endDatePlaceholderText={formatMessage(messages.EndDate)}
                    hideKeyboardShortcutsPanel
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    readOnly
                    transitionDuration={0}
                    anchorDirection={isRTL(locale) ? 'right' : 'left'}
                    isRTL={isRTL(locale)}
                />
            </div>
        );
    }
}

const selector = formValueSelector('ListPlaceStep3');

const mapState = (state) => ({
    defaultStartDate: selector(state, 'startDate'),
    defaultEndDate: selector(state, 'endDate'),
    locale: state.intl.locale
});

const mapDispatch = {
    change
};

export default injectIntl(withStyles(s)(connect(mapState, mapDispatch)(DateRange)));

