import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Indicator = styled.span`
	display: inline-block;
	height: 1.2em;
	line-height: 1.2em;
	margin-right: 0.5em;
`;

const Dot = styled.span`
	&::before {
		content: '';
		display: inline-block;
		vertical-align: sub;
		margin-right: 0.4em;
		height: 1em;
		width: 1em;
		border-radius: 50%;
		background-color: ${ props => props.bgColor };
	}
`;

export default function StatusIndicator( props ) {
	const { className, children, status } = props;
	let bgColor;

	switch ( status.toLowerCase() ) {
		case 'active':
		case 'approved':
		case 'open':
		case 'pending':
			bgColor = 'green';
			break;

		case 'commented':
		case 'changes_requested':
			bgColor = '#D24632';
			break;

		case 'dismissed':
		case 'abandoned':
		case 'inactive':
			bgColor = '#353535';
			break;
		default:
			bgColor = 'transparent';
	}

	return (
		<Indicator className={ className }>
			<Dot bgColor={ bgColor }>{ children }</Dot>
		</Indicator>
	);
}

StatusIndicator.defaultProps = {
	className: '',
};

StatusIndicator.propTypes = {
	className: PropTypes.string,
	status: PropTypes.string.isRequired,
};
