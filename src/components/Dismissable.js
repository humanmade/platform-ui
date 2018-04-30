import React from 'react';
import PropTypes from 'prop-types';

class Dismissable extends React.Component {

	constructor() {
		super();
		this.state = {
			dismissed: false
		};
	}

	componentWillMount() {
		// Check localStorage.
		this.setState( {
			dismissed: JSON.parse( window.localStorage.getItem( `dismissable-${ this.props.name }` ) ),
		} )
	}

	handleDismiss() {
		window.localStorage.setItem( `dismissable-${ this.props.name }`, 'true' );
		this.setState( { dismissed: true } );
	}

	render() {
		return this.state.dismissed
			? null :
			<div className="hm-platform-ui__Dismissable">
				<button type="button" className="notice-dismiss" onClick={ () => this.handleDismiss() }>
					<span className="remove-tag-icon" aria-hidden="true"></span>
					Dismiss
				</button>
				<div className="hm-platform-ui__Dismissable__content">
					{ this.props.children }
				</div>
			</div>;
	}

}

Dismissable.propTypes = {
	name: PropTypes.string.isRequired
}

export default Dismissable;
