import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import cx from 'classnames';
import {
	Button,
	FormGroup,
	Col,
	FormControl,
	Panel,
	Grid,
	Row
} from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { formValueSelector } from 'redux-form';

import s from './WhyHostFormBlock3.css';
import bt from '../../../../components/commonStyle.css';

import Image from './Image'

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from '../../../../locale/messages';

import submit from './submit';
import validate from './validate';
class WhyHostFormBlock3 extends Component {

	renderFormControlTextArea = ({ input, label, meta: { touched, error }, children, className, labelNumber }) => {
		const { formatMessage } = this.props.intl;
		return (
			<FormGroup className={bt.space3}>
				<label className={s.labelTextNew} >{label} {labelNumber}</label>
				<FormControl
					{...input}
					className={className}
					componentClass="textarea"
				>
					{children}
				</FormControl>
				{touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
			</FormGroup>
		)
	}

	renderFormControl = ({ input, label, type, meta: { touched, error }, className, labelNumber }) => {
		const { formatMessage } = this.props.intl;
		return (
			<FormGroup className={bt.space3}>
				<label className={s.labelTextNew} >{label} {labelNumber}</label>
				<FormControl {...input} placeholder={label} type={type} className={bt.commonControlInput} />
				{touched && error && <span className={s.errorMessage}>{formatMessage(error)}</span>}
			</FormGroup>
		)
	}


	render() {
		const { error, handleSubmit, submitting, dispatch, initialValues, hostingBlockImage1, hostingBlockImage2, hostingBlockImage3, blockLoader3, blockLoader2, blockLoader1 } = this.props;
		const { formatMessage } = this.props.intl;

		return (
			<div className={cx(s.pagecontentWrapper, 'pagecontentAR')}>
				<Grid fluid>
					<Row>
						<h1 className={s.headerTitle}><FormattedMessage {...messages.whyBecomeHostBlock3} /></h1>
						<Col xs={12} sm={12} md={8} lg={8} className={s.blockcenter}>
							<Panel className={cx(s.panelHeader, 'bgBlack')}>
								<form onSubmit={handleSubmit(submit)}>
									{error && <strong>{formatMessage(error)}</strong>}
									<Field
										name="hostingBlockTitleHeading"
										type="text"
										component={this.renderFormControl}
										label={formatMessage(messages.hostingBlockTitleHeading)}
									/>
									<Field
										name="hostingBlockTitle1"
										type="text"
										component={this.renderFormControl}
										label={formatMessage(messages.hostingBlockTitleLabel)}
										labelNumber={'1'}
									/>
									<Field
										name="hostingBlockContent1"
										component={this.renderFormControlTextArea}
										label={formatMessage(messages.hostingBlockContentLabel)}
										labelNumber={'1'}
									/>
									<FormGroup className={bt.space3}>
										<label className={s.labelTextNew} ><FormattedMessage {...messages.hostingBlockImageLabel} /> 1</label>
										<Image fieldName={'hostingBlockImage1'} image={hostingBlockImage1} loader={blockLoader1} />
									</FormGroup>
									<Field
										name="hostingBlockTitle2"
										type="text"
										component={this.renderFormControl}
										label={formatMessage(messages.hostingBlockTitleLabel)}
										labelNumber={'2'}
									/>
									<Field
										name="hostingBlockContent2"
										component={this.renderFormControlTextArea}
										label={formatMessage(messages.hostingBlockContentLabel)}
										labelNumber={'2'}
									/>
									<FormGroup className={bt.space3}>
										<label className={s.labelTextNew} ><FormattedMessage {...messages.hostingBlockImageLabel} /> 2</label>
										<Image fieldName={'hostingBlockImage2'} image={hostingBlockImage2} loader={blockLoader2} />
									</FormGroup>
									<Field
										name="hostingBlockTitle3"
										type="text"
										component={this.renderFormControl}
										label={formatMessage(messages.hostingBlockTitleLabel)}
										labelNumber={'3'}
									/>
									<Field
										name="hostingBlockContent3"
										component={this.renderFormControlTextArea}
										label={formatMessage(messages.hostingBlockContentLabel)}
										labelNumber={'3'}
									/>
									<FormGroup className={bt.space3}>
										<label className={s.labelTextNew} ><FormattedMessage {...messages.hostingBlockImageLabel} /> 3</label>
										<Image fieldName={'hostingBlockImage3'} image={hostingBlockImage3} loader={blockLoader3} />
									</FormGroup>
									<div className={cx(bt.textAlignRight, 'textAlignLeftRtl')}>
										<Button className={cx(bt.btnPrimary, bt.btnLarge)} type="submit" disabled={submitting}>
											<FormattedMessage {...messages.save} />
										</Button>
									</div>
								</form>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

}

WhyHostFormBlock3 = reduxForm({
	form: 'WhyHostForm',
	validate
})(WhyHostFormBlock3);

const selector = formValueSelector('WhyHostForm');

const mapState = (state) => ({
	loader: state.image.loader,
	hostingBlockImage1: selector(state, 'hostingBlockImage1'),
	hostingBlockImage2: selector(state, 'hostingBlockImage2'),
	hostingBlockImage3: selector(state, 'hostingBlockImage3'),
	blockLoader1: state.loader.hostingBlockImage1,
	blockLoader2: state.loader.hostingBlockImage2,
	blockLoader3: state.loader.hostingBlockImage3,
});

const mapDispatch = {
};

export default compose(
	withStyles(s, bt),
	injectIntl,
	connect(mapState, mapDispatch)
)(WhyHostFormBlock3);