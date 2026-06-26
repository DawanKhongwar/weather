import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sun_icon from '../assets/sun.png'
import partly_cloudy_icon from '../assets/partly_cloudy.jpg'
import cloudy_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity.png'
import raining_icon from '../assets/raining.jpg'
import stormy_icon from '../assets/stormy.png'
import thunder_icon from '../assets/thunder.jpg'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon}  alt=''/>
        </div>
        <img src={sun_icon} alt="" className='weather-icon' />
        <p calssname = 'temperature'>16°C</p>
        <p className='location'>London</p>
    </div>
  )
}

export default Weather