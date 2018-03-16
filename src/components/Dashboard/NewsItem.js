/*global HM*/
import React from 'react';
import Popup from "reactjs-popup";

const NewsItem = ({ post }) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return (
		<tr className="row news-item">
			<td className="news-item__info">
				<div className="news-item__info__title">
					<a href={post.link}>{post.title.rendered}</a>
				</div>
				<div className="news-item__info__meta">
					<span className="news-item__info__meta__modified">{new Date(post.modified).toLocaleDateString( HM.UI.Locale, options )}</span>
					<span className="news-item__info__meta__byline">by {post._embedded.author[0].name}</span>
				</div>
			</td>
			<td className="post__actions">
				<Popup
					trigger={open => (
						<button className="button">&hellip;</button>
					)}
					position="right center"
					closeOnDocumentClick
				>
					<ul>
						<li><a href={post.link}>view</a></li>
					</ul>
				</Popup>
			</td>
		</tr>
	);
};

export default NewsItem;
