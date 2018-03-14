/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';

const Posts = props => {
	return (
		<div className="widget widget--posts full-width">
			<div className="widget__header">
				<h2 className="widget__header__title">Posts</h2>
				<div className="widget__header__actions">
					<form action="">
						<select name="" id="">
							<option value="">Published</option>
						</select>
						<select name="" id="">
							<option value="">Latest</option>
						</select>
					</form>
				</div>
				<div className="widget__header__settings">

				</div>
			</div>
			<div className="widget__body">
				<div className="widget__notification">
					<p>{`You have ${props.comments.data.length} comments awaiting moderation`}</p>
				</div>
				<table className="table">
					<tbody>
					{
						Object.keys(props.posts.data).map( key => <Post key={key} index={key} post={props.posts.data[key]} /> )
					}
					</tbody>
				</table>
			</div>
		</div>

	);
}

const PostsWithData = compose(
	withFetch( `${HM.EnterpriseKit.DocsURL}/wp-json/wp/v2/posts?_embed`, {}, 'posts' ),
	withFetch( `${HM.EnterpriseKit.DocsURL}/wp-json/wp/v2/comments?status=hold`,  {
		credentials: 'same-origin',
		headers: {
			'X-WP-Nonce': HM.REST.Nonce,
			'content-type': 'application/json'
		}
	}, 'comments' ),
)(Posts);

export default PostsWithData;
