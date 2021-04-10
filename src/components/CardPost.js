import React from 'react';
import '../assets/styles/components/CardPost.scss';
import btnLike from '../assets/images/like-icon.png';
import btnDislike from '../assets/images/dislike-icon.png';
import btnComment from '../assets/images/comment-icon.png';

const CardPost = () => {
    return (
        <div className="container__card--post">
            <div className="card__post--header">
                <div className="data">
                    <h3>Nombre post</h3>
                    <p>user@gmail.com</p>
                </div>
                <p className="date">12/04/2021</p>
            </div>
            <p className="card__post--content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et urna vel pretium nisi nisl diam dolor. Egestas tincidunt ut vel vulputate facilisis id. Accumsan suspendisse eget quam elit tempus quis elementum turpis. Mattis nam lobortis odio sed.</p>
            <CardActions />
        </div>
    );
};

const CardActions = () => {
    return (
        <div className="card__post--actions">
            <button className="btn__like">
                <img src={btnLike} alt=""></img>
            </button>
            <span>12</span>
            <button className="btn__dislike">
                <img src={btnDislike} alt=""></img>
            </button>
            <span>12</span>
            <button className="btn__comment">
                <img src={btnComment} alt=""></img>
            </button>
            <span>12</span>
        </div>
    );
};

export default CardPost;