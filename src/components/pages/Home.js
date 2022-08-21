import React from 'react'
import './Home.css';
import Img from '../../Images/ai.jpg'
import Loader from 'react-loaders'

const Home = () => {
  return (
    <section className="home">
      <div className="background">
      <img src={Img} alt="Back"/>
      </div>
      <div className="content">
          <div className="title">
            <h1>CureAi</h1>
            <p>Welome, to our website CureAi.<br/>
            We are always here for helping you.
            Health is Wealth
            </p>
          </div>
          
        </div>
        <Loader type="pacman"/>
    </section>
    
  )
}

export default Home
