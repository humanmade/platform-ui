import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Generic Dashboard wrapper block for displaying some information in the admin.
 *
 * @param {String} title    Title to display in collapsbile header.
 * @param {Array}  children React children.
 * @param {String} id       Unique ID to display for the block.
 */
class DashboardBlock extends Component {
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
				<button type="button" className="handlediv" aria-expanded="true" onClick={ onClick }>
					<span className="screen-reader-text">Toggle panel: { title }</span>
					<span className="toggle-indicator" aria-hidden="true" />
				</button>
				<h2 className="hndle"><span>{title}</span></h2>
				{ isExpanded && (
					<div className="inside">
						{children}
					</div>
				) }
			</div>
		);
	}
}

DashboardBlock.propTypes = {
	id:    PropTypes.string,
	title: PropTypes.string,
}

export default DashboardBlock;
