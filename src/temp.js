import React from 'react'
import "./temp.css";

const Temp = () => {
  return(
   <>
  <div className='wrap'>
    <div className='search'>
<input type='search' placeholder='.....' id='search' className='searchTerm'/>
<button type='button' className='searchButton'>Search</button>
    </div>
  </div>
  <article className='widget'>
    <div className='weatherIcon'>
        <i className={"wi wi-day-sunny"}></i>
    </div>
<div className='weatherInfo'>
<div className='temprature'>
    <span>25.5&deg;</span>
</div>

<div className='description'>
<div className='weatherCondition'>sunny</div>
<div className='place'>pune india</div>
</div>
</div>

<div className='date'>{new Date().toLocaleString()}</div>
<div className='extra-temp'>
    
    <div className='temp-info-minmax'>
        <div className='two-sided-section'>
<p><i className={" wi wi-sunset"}></i></p>
<p className='extra-info-Leftside'>19:19 PM <br/> Sunset</p>
        </div>
        <div className='two-sided-section'>
<p><i className={" wi wi-humidity"}></i></p>
<p className='extra-info-Leftside'>19:19 PM <br/> Humidity</p>
        </div>

        <div className='two-sided-section'>
<p><i className={" wi wi-humidity"}></i></p>
<p className='extra-info-Leftside'>19:19 PM <br/> pressure</p>
        </div>
        <div className='two-sided-section'>
<p><i className={" wi wi-strong-wind"}></i></p>
<p className='extra-info-Leftside'>19:19 PM <br/> Speed</p>
        </div>
    </div>
</div>
  </article>
  </>
  ); 
  
}

export default Temp