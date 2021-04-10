import React, { useState, useEffect } from "react";
import "../assets/styles/components/PostDetail.scss";
import Footer from "../components/Footer";
import btnBack from "../assets/images/btn-back.png";
import { Link } from "react-router-dom";
import CardPost from "../components/CardPost";
import Form from "../components/FormToPost";
import _ from "lodash";
import axios from "axios";
import { useParams } from "react-router-dom";

/**
 * Return Component HomePage
 *
 * @component
 * return (
 *  <div className='container__post--detail' />
 * )
 */
function PostDetail() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [post, setPost] = useState(null);

  let { id } = useParams();

  const getPost = () => {
    axios
      .get(`https://6070f8be50aaea001728413d.mockapi.io/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const createComment = (data) => {
    axios
      .post(
        `https://6070f8be50aaea001728413d.mockapi.io/posts/${id}/comments`,
        data
      )
      .then((response) => {
        getPost();
      });
  };

  const createLike = () => {
    axios
      .post(`https://6070f8be50aaea001728413d.mockapi.io/posts/${id}/likes`)
      .then((response) => {
        getPost();
      });
  };

  const createDislike = () => {
    axios
      .post(`https://6070f8be50aaea001728413d.mockapi.io/posts/${id}/dislike`)
      .then((response) => {
        getPost();
      });
  };

  return (
    <>
      <div className="container__post--detail">
        <Link to="/" className="back">
          <img src={btnBack} alt="button back"></img>
        </Link>
        {post && (
          <>
            <CardPost
              type="post"
              setShowCommentModal={setShowFormModal}
              post={post}
              onLike={createLike}
              onDislike={createDislike}
            />
            <div className="post__detail--comments">
              <h2>Comentarios</h2>
              <hr></hr>
              <div className="container__posts">
                {_.orderBy(post.comments, "data", "desc").map(
                  (comment, index) => {
                    return (
                      <CardPost
                        key={index}
                        type="comment"
                        setShowCommentModal={setShowFormModal}
                        post={comment}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {showFormModal && (
        <Form
          setShowFormModal={setShowFormModal}
          type={"comment"}
          onSubmit={(data) => {
            createComment(data);
          }}
        />
      )}
      <Footer />
    </>
  );
}

export default PostDetail;
