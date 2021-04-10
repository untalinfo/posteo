import React from 'react'
import '../assets/styles/components/PostDetail.scss'
import Footer from '../components/Footer'
import btnBack from '../assets/images/btn-back.png'
import { Link } from 'react-router-dom'
import CardPost from '../components/CardPost'


/**
 * Return Component HomePage
 * 
 * @component
 * return (
 *  <div className='container__post--detail' />
 * )
 */
function HomeFeed() {
    return (
        <>
            <div className="container__post--detail">
                <Link to="/" className="back">
                    <img src={btnBack} alt="button back" ></img>
                </Link>
                <CardPost />
                <div className="post__detail--comments">
                    <h2>Comentarios</h2>
                    <hr></hr>
                    <div className="container__posts">
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomeFeed;
