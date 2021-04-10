import React, { useState, useEffect } from "react";
import "../assets/styles/components/HomeFeed.scss";
import Header from "../components/Header";
import CardPost from "../components/CardPost";
import Footer from "../components/Footer";
import Form from "../components/FormToPost";
import axios from "axios";
import _ from "lodash";


function HomeFeed() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("post");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState([]);

  const setShowCommentModal = (value) => {
    setFormModalType("comment");
    setShowFormModal(value);
  };

  const setShowpostModal = (value) => {
    setFormModalType("post");
    setShowFormModal(value);
  };

  const createPost = (data) => {
    axios
      .post("https://6070f8be50aaea001728413d.mockapi.io/posts", data)
      .then((response) => {
        posts.push(response.data);
      });
  };

  const createComment = (data) => {
    axios
      .post(
        `https://6070f8be50aaea001728413d.mockapi.io/posts/${selectedPostId}/comments`,
        data
      )
      .then((response) => {});
  };

  const createLike = (id) => {
    console.log(selectedPostId);
    axios
      .post(
        `https://6070f8be50aaea001728413d.mockapi.io/posts/${id}/likes`
      )
      .then((response) => {
        getPosts();
      });
  };

  const createDislike = (id) => {
    axios
      .post(
        `https://6070f8be50aaea001728413d.mockapi.io/posts/${id}/dislike`
      )
      .then((response) => {
        getPosts();
      });
  };

  const getPosts = () => {
    axios
      .get("https://6070f8be50aaea001728413d.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <Header setShowFormModal={setShowpostModal} />
      <div className="container__posts">
        {_.orderBy(posts, "date", "desc").map((post, index) => {
          return (
            <CardPost
              type="post"
              setShowCommentModal={(value) => {
                setShowCommentModal(value);
                setSelectedPostId(post.id);
              }}
              post={post}
              key={index}
              onDislike={() => {
                createDislike(post.id);
              }}
              onLike={() => {
                  createLike(post.id);
              }}
            />
          );
        })}
      </div>
      <Footer />
      {showFormModal && (
        <Form
          setShowFormModal={setShowFormModal}
          type={formModalType}
          onSubmit={(data) => {
            if (formModalType === "post") {
              createPost(data);
            } else {
              createComment(data);
            }
          }}
        />
      )}
    </div>
  );
}

export default HomeFeed;
