import React from 'react';

const Post = ({ post }) => {
	const commentsOpen = post.comment_status === 'open';
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return (
		<tr className="post">
			<td className="post__info">
				<div className="post__info__title"><a href={post.link}>{post.title.rendered}</a></div>
				<div className="post__info__meta">
					<span className="post__info__meta__status">{post.status === 'publish' ? 'published' : post.status}</span>
					<span className="post__info__meta__modified">{new Date(post.modified).toLocaleDateString( 'en-GB', options )}</span>
					<span className="post__info__meta__author">by {post._embedded.author[0].name}</span>
				</div>
			</td>
			<td className="post__comments">{commentsOpen ? post.comment_count : 'Comments are closed' }</td>
			<td className="post__actions">&hellip;</td>
		</tr>
	);
};

export default Post;