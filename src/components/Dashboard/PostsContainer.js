/*global HM*/
import React from 'react';
import Post from './Post';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import Dismissable from '../Dismissable';
import { WidgetContainer, WidgetHeader, WidgetBody, WidgetControls } from './Widget';

const Posts = props => {
	return (
		<WidgetContainer name="posts">
			<WidgetHeader title="posts">
				<WidgetControls>
					<form action="">
						<select className="Select" name="" id="">
							<option value="">Published</option>
						</select>
						<select className="Select" name="" id="">
							<option value="">Latest</option>
						</select>
					</form>
				</WidgetControls>
			</WidgetHeader>
			<WidgetBody>
				<Dismissable name="notification" key="notification">
					<p>{`You have ${props.comments.data.length} comments awaiting moderation`}</p>
				</Dismissable>

				<table className="table">
					<tbody>
					{
						Object.keys(props.posts.data).map( key => <Post key={key} index={key} post={props.posts.data[key]} /> )
					}
					</tbody>
				</table>
			</WidgetBody>
		</WidgetContainer>
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
