import React from "react";
import "../assets/styles/components/CardPost.scss";
import btnLike from "../assets/images/like-icon.png";
import btnDislike from "../assets/images/dislike-icon.png";
import btnComment from "../assets/images/comment-icon.png";
import { Link } from "react-router-dom";
import moment from "moment";


const CardPost = ({ type, setShowCommentModal, post, onLike, onDislike }) => {

  if (!post) return;

  return (
    <div className="container__card--post">
      <div className="card__post--header">
        <div className="data">
          <CardTitle id={post.id}>{post.title}</CardTitle>
          <p>{post.email}</p>
        </div>
        <p className="date">{moment(post.date).format("MMM Do YY")}</p>
      </div>
      <p className="card__post--content">{post.content}</p>
      {type === "post" && (
        <CardActions
          setShowCommentModal={setShowCommentModal}
          likesCount={post.likes.length}
          dislikesCount={post.dislikes.length}
          commentsCounts={post.comments.length}
          onLike={onLike}
          onDislike={onDislike}
        />
      )}
    </div>
  );
};

/**
 * Return Subcomponent card Title
 *
 * @component
 * return (
 *  <Link to="/post_detail/:id" />
 * )
 */
const CardTitle = (props) => {
  return (
    <Link to={`/post_detail/${props.id}`}>
      <h3>{props.children}</h3>
    </Link>
  );
};

/**
 * Return Subcomponent card buttons action
 *
 * @component
 * return (
 *  <div className="card__post--actions" />
 * )
 */
const CardActions = ({
  setShowCommentModal,
  likesCount,
  dislikesCount,
  commentsCounts,
  onLike,
  onDislike,
}) => {

  return (
    <div className="card__post--actions">
      <button className="btn__like" onClick={onLike}>
        <img src={btnLike} alt=""></img>
      </button>
      <span>{likesCount}</span>
      <button className="btn__dislike" onClick={onDislike}>
        <img src={btnDislike} alt=""></img>
      </button>
      <span>{dislikesCount}</span>
      <button
        className="btn__comment"
        onClick={() => setShowCommentModal(true)}
      >
        <img src={btnComment} alt=""></img>
      </button>
      <span>{commentsCounts}</span>
    </div>
  );
};

export default CardPost;
