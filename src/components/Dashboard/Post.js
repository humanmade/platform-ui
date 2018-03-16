/*global HM*/
import React, {Fragment} from 'react';
import Popup from "reactjs-popup";
import icons from "./Widget/Icons";

const Post = ({ post }) => {
	const commentsOpen = post.comment_status === 'open';
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const editPostLink = `/wp-admin/post.php?post=${post.id}&action=edit`;
	const previewPostLink = `/?p=${post.id}&preview=true`;
	const ViewsIcon = icons.views;
	return (
		<tr className="row post">
			<td className="post__info">
				<div className="post__info__title">
					<a href={post.status === 'publish' ? post.link : previewPostLink}>{post.title.rendered}</a>
				</div>
				<div className="post__info__meta">
					<span className="label post__info__meta__status">{post.status === 'publish' ? 'published' : post.status}</span>
					<span className="post__info__meta__modified">{new Date(post.modified).toLocaleDateString( HM.UI.Locale, options )}</span>
					<span className="post__info__meta__byline">by {post._embedded.author[0].name}</span>
				</div>
			</td>
			<td className="post__views">
				<span className="post__views__count"><ViewsIcon /> 54</span>
			</td>
			<td className="post__comments">
				{ commentsOpen ? (
					<Fragment>
						<span className="post__comments__approved">{commentsOpen ? post.comment_count.approved : 'Comments are closed' }</span>
						<span className="post__comments__pending">
							<sup>{commentsOpen ? post.comment_count.awaiting_moderation : 'Comments are closed' }</sup>
							</span>
					</Fragment>
				) : (
					<span className="comments--closed">Comments are closed</span>
				)
				}

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
						<li><a href={editPostLink}>edit</a></li>
						<li><a href="#">stats</a></li>
						<li><a href="#">comments</a></li>
						<li><a href="#">duplicate</a></li>
					</ul>
				</Popup>
			</td>
		</tr>
	);
};

export default Post;
