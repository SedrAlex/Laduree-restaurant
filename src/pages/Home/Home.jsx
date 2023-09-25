import React from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id='home'>
      <Header/>
      <section className="container hero" >
        <div className='hero-text'>
           <p className="flicker">Laissez-vous transporter dans l'univers magique de Ladurée</p>
           <Link to="/Restaurant">
             <button type="button" className="home_btn">Visit our Restaurant</button>
            </Link>
            <button type="button" className="home_btn">Visit our Boutique </button>

            </div>
      </section>
    </div>
    
 
  )
}

export default Home