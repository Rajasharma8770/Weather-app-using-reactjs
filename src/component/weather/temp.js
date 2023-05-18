import React, { useState, useEffect } from 'react'
import Weathercard from './weathercard';
import "./temp.css";

const Temp = () => {

    const [searchValue, setSearchValue]=useState("darbhanga");

    const [tempInfo,setTempInfo]=useState({});
    const getWeatherInfo = async()=>{ 
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=15487b749c18318ac51b765a71a80bf4`;
            const res= await fetch(url);
            const data= await res.json();

            const {temp, humidity,pressure} =data.main;
            const{ main: weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;

            const myNewWeatherInfo={
                temp,humidity,pressure,weathermood,name,speed,country,sunset,
            };
            setTempInfo(myNewWeatherInfo);
            console.log(temp);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
      getWeatherInfo();

    }, [])
    

  return(
   <>
  <div className='wrap'>
    <div className='search'>
<input type='search' placeholder='Search' id='search' className='searchTerm' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
<button type='button' className='searchButton' onClick={getWeatherInfo}>Search</button>
    </div>
  </div>

  <Weathercard tempInfo={tempInfo}/>
  </>
  ); 
  
}

export default Temp;