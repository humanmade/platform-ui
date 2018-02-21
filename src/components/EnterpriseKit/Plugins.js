/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import fuzzy from 'fuzzy';
import Select from 'react-select';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import Plugin from './Plugin';
import icons from './Icons';

import 'react-select/dist/react-select.css';

class Plugins extends React.Component {

	constructor() {
		super();

		this.state = {
			category: 'all',
			search:   '',
			active:   'any'
		};
	}

	render() {
		// Remove plugins without required data.
		let plugins = this.props.plugins
			.filter( plugin => plugin.title )
			.sort( ( a, b ) => {
				return a.title.localeCompare( b.title, {
					usage:             'sort',
					sensitivity:       'base',
					ignorePunctuation: true,
					numeric:           true,
				} );
			} );

		// Add user guides and docs API data.
		if ( this.props.pluginDocs && ! this.props.pluginDocs.loading ) {
			plugins = plugins.map( plugin => {
				const pluginDoc = this.props.pluginDocs.data.results
					.filter( pluginDoc => pluginDoc.slug === plugin.name );

				if ( ! pluginDoc.length ) {
					return plugin;
				}

				return Object.assign( {}, plugin, pluginDoc[0] );
			} )
		}

		// Apply search filter & sort by score.
		if ( this.state.search !== '' ) {
			plugins = fuzzy.filter( this.state.search, plugins, {
					extract: plugin => `${ plugin.title } | ${ plugin.excerpt || '' }`
				} )
				.sort( ( a, b ) => {
					if ( ! this.state.search ) {
						return 0;
					}
					if ( a.score > b.score ) {
						return - 1;
					}
					if ( a.score < b.score ) {
						return 1;
					}
					return 0;
				} )
				.map( result => result.index )
				.map( idx => plugins[ idx ] );
		}

		// Filter search results by category and active status.
		plugins = plugins
			.filter( plugin => this.state.category === 'all' ||
			                   ( plugin.tags && plugin.tags.indexOf( this.state.category ) > -1 ) )
			.filter( plugin => this.state.active === 'any' ||
			                   (this.state.active === 'on' && plugin.enabled) ||
			                   (this.state.active === 'off' && ! plugin.enabled) );

		const optionRenderer = option => {
			const Icon = icons[option.icon] || 'span';
			return <span key={option.value}>
				<Icon />
				{option.label}
			</span>;
		}

		return <div className="hm-plugins">
			<h2>Features</h2>
			<div className="hm-plugins--filters">
				<div className="hm-plugins--filters__category">
					<Select
						onChange={selected => this.setState( { category: selected.value } )}
						value={this.state.category}
						clearable={false}
						searchable={false}
						optionRenderer={optionRenderer}
						valueRenderer={optionRenderer}
						options={[
							{ label: 'All', value: 'all', icon: 'all' }
						].concat(
							this.props.categories.loading
								? []
								: this.props.categories.data.results.map( category => ({
									label: category.title,
									value: category.pageForTerm || category.slug,
									icon: category.pageForTerm || category.slug,
								}) ) )}
					/>
				</div>
				<div className="hm-plugins--filters__search">
					<input
						type="text"
						onChange={event => this.setState( { search: event.target.value } )}
						value={this.state.search}
						placeholder={this.state.category === 'all' ? `Search all plugins` : `Search category`}
					/>
				</div>
			</div>
			<div className="hm-plugins--filters">
				<div className="hm-plugins--filters__category" aria-live="polite">
					{ this.state.category === 'all' && <p>
						Below is a list of all the plugins in Enterprise Kit, along with
						quick access to documentation and further details.
					</p> }
					{ this.props.categories.loading
						? ''
						: this.props.categories.data.results
								.filter( category => category.pageForTerm === this.state.category )
								.map( category => <p key={ category.slug }>{ category.excerpt }</p> )
					}
				</div>
				<fieldset className="hm-plugins--filters__status hm-radio-group">
					<legend className="screen-reader-text">Plugin Status</legend>
					<input id="hm-plugins-status-any" checked={this.state.active === 'any'} type="radio" name="active"
					       value="any"
					       onChange={() => this.setState( { active: 'any' } )}/>
					<label htmlFor="hm-plugins-status-any">
						Any
					</label>
					<input id="hm-plugins-status-on"
					       checked={this.state.active === 'on'} type="radio" name="active" value="on"
					       onChange={() => this.setState( { active: 'on' } )}/>
					<label htmlFor="hm-plugins-status-on">
						Active
					</label>
					<input id="hm-plugins-status-off"
					       checked={this.state.active === 'off'} type="radio" name="active"
					       value="off"
					       onChange={() => this.setState( { active: 'off' } )}/>
					<label htmlFor="hm-plugins-status-off">
						Inactive
					</label>
				</fieldset>
			</div>
			<div className="hm-plugins--list" aria-live="polite">
				{plugins.length
					? plugins.map( plugin => <Plugin key={plugin.title} {...plugin} /> )
					: <p className="notice-large">
							No plugins found for that combination of filters,
							try removing your search term or search all categories.
						</p>
				}
			</div>
		</div>;
	}

}

Plugins.propTypes = {
	plugins: PropTypes.array.isRequired
};

const PluginsWithData = compose(
	withFetch( `${HM.EnterpriseKit.DocsURL}/wp-json/docs/v1/plugins?version=${HM.EnterpriseKit.DocsVersion}`, {}, 'pluginDocs' ),
	withFetch( `${HM.EnterpriseKit.DocsURL}/wp-json/docs/v1/plugin-categories?version=${HM.EnterpriseKit.DocsVersion}`, {}, 'categories' ),
)(Plugins);

export default PluginsWithData;
