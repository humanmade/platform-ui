/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import NewsItem from './NewsItem';

const NewsFeed = props => {
	return (
		<div className="widget widget--newsfeed one-half">
			<div className="widget__header">
				<h2 className="widget__header__title">News Feed</h2>
				<div className="widget__header__actions">
				</div>
				<div className="widget__header__settings">
				</div>
			</div>
			<div className="widget__body">
				<table className="table">
					<tbody>
					{
						Object.keys(props.posts.data).map( key => <NewsItem key={key} index={key} post={props.posts.data[key]} /> )
					}
					</tbody>
				</table>
			</div>
		</div>

	);
}

const NewsFeedWithData = compose(
	withFetch( `https://humanmade.com/wp-json/wp/v2/posts?_embed`, {}, 'posts' )
)(NewsFeed);

export default NewsFeedWithData;
