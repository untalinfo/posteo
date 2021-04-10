import React from 'react';
import '../assets/styles/components/FormToPost.scss';
import btnClose from '../assets/images/btn-close.png';

/**
 * Return Component Form to post or comment
 * 
 * @component
 * return (
 *  <div className='container__card--form' />
 * )
 */
const FormToPost = () => {

    return (
        <div className="container__card--form">
            <button className="card__btnClose"><img src={btnClose} alt="button close"></img></button>
            <form>
                <Title>Nombre del Post</Title>
                <hr></hr>
                <textarea id="contenido" placeholder="Que estas pensando?" className="card__contentPost" required></textarea>
                <input type="email" id="email" name="email" placeholder="Email" className="card__email input-txt" required></input>
                <hr></hr>
                <BtnPost>Publicar</BtnPost>
            </form>
        </div>
    );
};

/**
 * Return Subcomponent Title to post or comment
 * 
 * @component
 * return (
 *  <div className='card__title input-txt' />
 * )
 */
const Title = (props) => {
    return (
        <input type="text" placeholder={props.children} className="card__title input-txt" autoFocus required></input>
    );
};

/**
 * Return Subcomponent Button to post or comment
 * 
 * @component
 * return (
 *  <div className='card__btnPost' />
 * )
 */
const BtnPost = (props) => {
    return (
        <buttom className="card__btnPost">
            {props.children}
        </buttom>
    );
};


export default FormToPost;