import React from "react";
import "../assets/styles/components/FormToPost.scss";
import btnClose from "../assets/images/btn-close.png";

/**
 * Return Component Form to post or comment
 *
 * @component
 * return (
 *  <div className='container__card--form' />
 * )
 */
const FormToPost = ({ setShowFormModal, type, onSubmit }) => {




  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFormModal(false);
    onSubmit({
      title: event.target.title.value,
      email: event.target.email.value,
      content: event.target.content.value
    });
  }

  return (
    <div className="container__card--form">
      <button
        className="card__btnClose"
        onClick={() => setShowFormModal(false)}
      >
        <img src={btnClose} alt="button close"></img>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='title'
          placeholder={"Título"}
          className="card__title input-txt"
          autoFocus
          required
        ></input>
        <hr></hr>
        <textarea
          id="contenido"
          name='content'
          placeholder="¿Qué estás pensando?"
          className="card__contentPost"
          required
        ></textarea>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="card__email input-txt"
          required
        ></input>
        <hr></hr>
        <button className="card__btnPost" type='submit'>
          {type === "post" ? "Publicar" : "Comentar"}
        </button>
      </form>
    </div>
  );
};

export default FormToPost;
