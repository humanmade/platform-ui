import React from 'react';
import PropTypes from 'prop-types';
import fuzzy from 'fuzzy';
import Plugin from './Plugin';

class Plugins extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			category: '',
			search: '',
			active: 'any'
		};
	}

	render() {
		// Remove plugins with no data.
		const plugins = this.props.plugins
			.filter( plugin => (
				plugin.data && plugin.data.title && plugin.data.category
			) )
			.sort( ( a, b ) => {
				if ( a.data.title > b.data.title ) {
					return -1;
				}
				if ( a.data.title < b.data.title ) {
					return 1;
				}
				return 0;
			} );

		// Apply search filter & sort by score.
		const results = fuzzy.filter( this.state.search, plugins, {
			extract: plugin => `${ plugin.data.title } | ${ plugin.data.description }`
		} )
			.sort( ( a, b ) => {
				if ( a.score > b.score ) {
					return -1;
				}
				if ( a.score < b.score ) {
					return 1;
				}
				return 0;
			} )
			.map( result => result.index );

		// Filter search results by category and active status.
		const filteredPlugins = results
			.map( idx => plugins[ idx ] )
			.filter( plugin => ! this.state.category || this.state.category === plugin.data.category )
			.filter( plugin => this.state.active === 'any' || ( this.state.active === 'on' ) === plugin.config.enabled );

		// Get categories.
		// @todo proper data source for this with descriptions, fetch from docs API at build?
		const categories = plugins
			.map( plugin => plugin.data.category )
			.reduce( ( carry, category ) => carry.includes( category ) ? carry : carry.concat( [ category ] ) , [] );

		// If search gets to zero results unset the category.
		if ( ! filteredPlugins.length && this.state.category ) {
			this.setState({ category: '' });
		}

		return <div className="hm-plugins">
			<h2>Plugins</h2>
			<div className="hm-plugins--filters">
				<select onChange={event => this.setState({ category: event.target.value })} defaultValue={this.state.category}>
					<option value="">All</option>
					{ categories.map( category => (
						<option key={category} value={category}>
							{category}
						</option>
					) ) }
				</select>
				<input
					type="text"
					onChange={event => this.setState({ search: event.target.value })}
					value={this.state.search}
					placeholder={this.state.category ? `Search category` : `Search all plugins`}
				/>
				<div>
					Status
					<label>
						<input checked={this.state.active === 'any'} type="radio" name="active" value="any" onChange={event => event.target.isChecked && this.setState({ active: 'any' })} />
						Any
					</label>
					<label>
						<input checked={this.state.active === 'on'} type="radio" name="active" value="on" onChange={event => event.target.isChecked && this.setState({ active: 'on' })} />
						On
					</label>
					<label>
						<input checked={this.state.active === 'off'} type="radio" name="active" value="off" onChange={event => event.target.isChecked && this.setState({ active: 'off' })} />
						Off
					</label>
				</div>
			</div>
			<div className="hm-plugins--list">
				{ filteredPlugins.length
					? filteredPlugins.map( plugin => <Plugin key={plugin.data.title} {...plugin} /> )
					: <p>No plugins found for that combination of filters, try removing your search
						term or search all categories</p>
				}
			</div>
		</div>;
	}

}

Plugins.propTypes = {
	plugins: PropTypes.array.isRequired
};

export default Plugins;
