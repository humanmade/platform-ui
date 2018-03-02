/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';

import DashboardBlock from '../Dashboard-Block';

const Posts = props => {
	return <DashboardBlock title="Posts" id="posts-block">
		<div className="posts-block-content">
			<ul>
				{
					Object.keys(props.posts.data).map( key => <Post key={key} index={key} post={props.posts.data[key]} /> )
				}
			</ul>
		</div>
	</DashboardBlock>
}

const PostsWithData = compose(
	withFetch( `${HM.EnterpriseKit.DocsURL}/wp-json/wp/v2/posts`, {}, 'posts' )
)(Posts);

export default PostsWithData;
