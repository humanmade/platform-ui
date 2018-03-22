import React from 'react';
import withFetch from '../../utils/withFetch';
import { compose } from 'recompose';
import NewsItem from './NewsItem';
import { WidgetContainer, WidgetHeader, WidgetBody, WidgetSettings } from './Widget';

const NewsFeed = props => {
	return (
		<WidgetContainer width="one-half" name="news-feed">
			<WidgetHeader title="news feed">
				<WidgetSettings>
					<span>Settings</span>
				</WidgetSettings>
			</WidgetHeader>
			<WidgetBody>
				<table className="table">
					<tbody>
					{
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
