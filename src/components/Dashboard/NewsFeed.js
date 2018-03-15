/*global HM*/
import React from 'react';
import PropTypes from 'prop-types';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import NewsItem from './NewsItem';
import { WidgetContainer, WidgetHeader, WidgetBody } from './Widget';

const NewsFeed = props => {
	return (
		<WidgetContainer width="one-half" name="news-feed">
			<WidgetHeader title="news feed" />
			<WidgetBody>
				<table className="table">
					<tbody>
					{
						props.news.loading ? 'Loading' :
							Object.keys(props.news.data).map( key => <NewsItem key={key} index={key} post={props.news.data[key]} /> )
					}
					</tbody>
				</table>
			</WidgetBody>
		</WidgetContainer>
	);
}

const NewsFeedWithData = compose(
	withFetch( `https://humanmade.com/wp-json/wp/v2/posts?_embed`, {}, 'news' )
)(NewsFeed);

export default NewsFeedWithData;
