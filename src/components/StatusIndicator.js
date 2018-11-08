import React from 'react';
import styled from 'styled-components';

const Dot = styled.span`
	float: left;
	margin-right: 7px;
	height: 1.3em;
	width: 1.3em;
	border-radius: 50%;
	background-color: ${ props => props.bgColor };
`;

export default function StatusDot( props ) {
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
		<span className={ className }>
			<Dot bgColor={ bgColor } />
			{ children }
		</span>
	);
}
