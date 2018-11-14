import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import withApiFetch from '../utils/withApiFetch';

/**
 * Generic Dashboard wrapper block for displaying some information in the admin.
 *
 * @param {String} title    Title to display in collapsbile header.
 * @param {Array}  children React children.
 * @param {String} id       Unique ID to display for the block.
 */
export default class DashboardBlock extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isExpanded: true
		}
	}

	onToggleExpanded() {
		this.setState( { isExpanded: ! this.state.isExpanded } );
	}

	render() {
		const { title, children, id } = this.props;
		const { isExpanded } = this.state;
		const className = `postbox ${ isExpanded ? 'expanded' : 'closed' }`;
		const onClick = () => this.onToggleExpanded();

		return (
			<div className={ className } id={ id }>
				<button type="button" className="handlediv" aria-expanded={ isExpanded } onClick={ onClick }>
					<span className="screen-reader-text">Toggle panel: { title }</span>
					<span className="toggle-indicator" aria-hidden="true" />
				</button>
				<h2 className="hndle"><span>{title}</span></h2>
				<div className="inside">
					{ children }
				</div>
			</div>
		);
	}
}

DashboardBlock.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export function withData( { url, ...props } ) {
	return WrappedComponent => {
		const WithData = ( props ) => {
			const { error, loading, ...rest } = props;

			if ( loading ) {
				return <p>Loading...</p>;
			}

			if ( error ) {
				return <p>{ error.message } <code>({ error.code })</code></p>;
			}

			return <WrappedComponent { ...rest } />;
		}

		const WrappedComponentWithData = compose( withApiFetch( url ) )( WithData );

		const DashboardBlockWithData = () => (
			<DashboardBlock { ...props }>
				<WrappedComponentWithData />
			</DashboardBlock>
		);

		return DashboardBlockWithData;
	};
}
