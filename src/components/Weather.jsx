import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sun_icon from '../assets/sun.png'
import partly_cloudy_icon from '../assets/partly_cloudy.jpg'
import cloudy_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity.png'
import raining_icon from '../assets/raining.jpg'
import broken_clouds_icon from '../assets/broken_clouds.png'
import thunder_icon from '../assets/thunder.jpg'
import windy_icon from '../assets/windy.png'
import scatter_rain_icon from '../assets/windy.png'

const Weather = () => {
    const inputRef= useRef()
    const[weatherData, setWeatherData]=useState(false);
    const allIcons ={
        "01d":sun_icon,
        "02d":partly_cloudy_icon,
        "03d":cloudy_icon,
        "04d":broken_clouds_icon,
        "09d":scatter_rain_icon,
        "10d":raining_icon,
        "11d":thunder_icon,

        }
    const search =async(city) =>{
        if(city === ""){
            alert("Enter city name");
            return;
        }
  const VITE_APP_ID="a68dab28bca675f52879063a03d9f46c"
        try{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${VITE_APP_ID}`;
        
        const respose = await fetch (url);
        const data = await respose.json();
        
        if (!respose.ok){
            alert(data.message);
            return;
        }
        console.log(data);
        const icon=allIcons[data.weather[0].icon]||sun_icon;
        setWeatherData({
            humidity: data.main.humidity,
            windSpeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            icon:icon
        })
    }catch(error){

        }
    }
   useEffect(()=>{
    search("London");
   },[] )
  return (
    <div className='weather'>
        <div className="search-bar">
            <input ref={inputRef} placeholder='Search'/>
            <img src={search_icon}  alt='' onClick={()=>search(inputRef.current.value)}/>
        </div>
        <img src={weatherData.icon} alt="" className='weather-icon' />
        <p className ='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt=''/>
                <div>
                 <p>{weatherData.humidity}</p>
                 <span>Humidity </span>   
                </div>
                
            </div>
             <div className="col">
                <img src={windy_icon} alt=''/>
                <div>
                 <p>{weatherData.windSpeed} km/h</p>
                 <span>Wind Speed </span>   
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Weather
