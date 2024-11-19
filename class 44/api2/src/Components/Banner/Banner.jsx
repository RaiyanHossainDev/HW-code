import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <section id='raiyan_banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>Platzi Fake Store API</h1>
                    <p>
                        Your API for your e-commerce or s
                        hopping website prototype.
                    </p>
                    <Link to={'##'}>View Docs <FaArrowRight /> </Link>
                </div>
                <div className="banner_image">
                    <img src="https://fakeapi.platzi.com/_astro/banner.5e0ee8a6_JMozV.webp" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner