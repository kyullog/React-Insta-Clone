import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className={props.className}>
      <PostHeader className={"post-header"} data={props.data} />
      <img
        src={props.data.imageUrl}
        alt={"the post"}
        className={"posted-image"}
      />
      <CommentSection data={props.data} user={props.user} />
    </div>
  );
};

PostContainer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  user: PropTypes.string
};

export default PostContainer;
