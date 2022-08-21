import React from 'react'
import hospital from '../../Images/ai11.jpg'
import './Hospital.css'

const Hospital = () => {
  return (
    <section id="hospital">
        <div className="background">
          <img src={hospital} alt="hos"/>
        </div>
        <div className="content">
          <div className="title">
            <h1>Search Hospitals</h1>
            <p>Here you can search the hospitals which are nearer to you<br/>
            
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="Where you want to go"></label>
              <input type="text" placeholder="Enter your location"/>
            </div>
            
            <button>Search</button>
          </div>
        </div>
    </section>
  )
}

export default Hospital
