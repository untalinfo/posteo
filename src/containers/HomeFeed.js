import React from 'react'
import '../assets/styles/components/HomeFeed.scss'
import Header from '../components/Header'
import CardPost from '../components/CardPost'
import Footer from '../components/Footer'

/**
 * Return Component HomeFeed
 * 
 * @component
 * return (
 *  <div className='home' />
 * )
 */
function HomeFeed() {
    return (
        <div className="home">
            <Header />
            <div className="container__posts">
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
            <Footer />
        </div>
    )
}

export default HomeFeed;