/*global HM*/
import React, { Component } from 'react';
import Post from './Post';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import Dismissable from '../Dismissable';
import { WidgetContainer, WidgetHeader, WidgetBody, WidgetControls } from './Widget';
import WidgetSettings from "./Widget/WidgetSettings";

class PostsContainer extends Component {
	state = {
		status: 'publish',
		perPage: 10,
	};

	handleStatusChange = event => {
		this.setState({
			status: event.target.value
		})
	}
	render() {
		const PostsList = props => { return props.loading ? (<tr><td>Loading</td></tr>) : Object.keys(props.data).map( key => <Post key={key} index={key} post={props.data[key]} /> ) };
		const PostsListWithData = withFetch( `${HM.UI.CurrentSiteURL}/wp-json/wp/v2/posts?per_page=${this.state.perPage}&_embed=true&status=${this.state.status}`, {
			credentials: 'same-origin',
			headers: {
				'X-WP-Nonce': HM.UI.REST.Nonce,
				'content-type': 'application/json'
			}
		})(PostsList);
		return (
			<WidgetContainer name="posts">
				<WidgetHeader title="posts">
					<WidgetControls>
						<select className="Select" onChange={this.handleStatusChange} value={this.state.status}>
							{
								Object.keys(this.props.statuses.data).map( status => {
									return (
										<option key={status} value={status}>{this.props.statuses.data[status].name}</option>
									);
								})
							}
						</select>
						<select className="Select">
							<option value="">Latest</option>
						</select>
					</WidgetControls>
					<WidgetSettings>
						<span>Show 10 posts</span>
					</WidgetSettings>
				</WidgetHeader>
				<WidgetBody>
					<Dismissable name="notification" key="notification">
						<p>You have <a target="_blank" href="/wp-admin/edit-comments.php?comment_status=moderated">{this.props.comments.data.length} comments</a> awaiting moderation</p>
					</Dismissable>

					<table className="table">
						<tbody>
						<PostsListWithData />
						</tbody>
					</table>
				</WidgetBody>
			</WidgetContainer>
		);
	}
}

const PostsWithData = compose(
	withFetch( `${HM.UI.CurrentSiteURL}/wp-json/wp/v2/statuses`, {
		credentials: 'same-origin',
		headers: {
			'X-WP-Nonce': HM.UI.REST.Nonce,
			'content-type': 'application/json'
		}
	}, 'statuses' ),
	withFetch( `${HM.UI.CurrentSiteURL}/wp-json/wp/v2/comments?status=hold`,  {
		credentials: 'same-origin',
		headers: {
			'X-WP-Nonce': HM.UI.REST.Nonce,
			'content-type': 'application/json'
		}
	}, 'comments' ),
)(PostsContainer);

export default PostsWithData;
