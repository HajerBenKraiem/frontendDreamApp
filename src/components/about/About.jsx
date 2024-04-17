import React, { useState } from 'react'
import { GiPalmTree } from 'react-icons/gi'
import { BiHappy } from 'react-icons/bi'
import { FaUmbrellaBeach } from 'react-icons/fa'
//import { GiHotel } from 'react-icons/gi'; 
import img1 from '../../assets/img1.jpg'
import classes from'./about.module.css'
import video from '../../assets/video.mp4'; //
const About = () => {

  const [type,setType]=useState("")
  const[startDate,setStartDate] = useState("")
  const[endDate,setEndDate]=useState("")

  const handleSearch =()=>{

  }
  return (
   <section className={classes.container}  id='about'> 
   <div className={classes.wrapper}>
   <div className={classes.videoWrapper}>
          <video className={classes.video} autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    {/* <div className={classes.imgwrapper}>
        <img src={img1} alt=""></img>
    </div> */}
    <div className={classes.titles}>
        <h5 className={classes.subtitle}>Discover your dream destination today</h5>
        <h2 className={classes.title}>Book now and enjoy a <span>30% off!</span></h2>
    </div>
    <div className={classes.inputsContainer}>
    <div className={classes.inputContainer}>
      <span>Type <GiPalmTree className={classes.icon}/></span>
      {/* <span>Type d'hébergement <GiHotel className={classes.icon} /></span> */}
      <select onChange ={(e)=>setType(e.target.value)}>
        <option disabled>Browse by property type</option>
        <option value="hotel">Hotel</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="penthouse">penthouse</option>
        <option value="bungalow">Bungalow</option>
      </select>
    </div>
    <div className={classes.inputContainer}>
      <span> Check In Date <BiHappy className={classes.icon}/></span>
      <input type ="date" placeholder='enter date...' onChange={(e)=>setStartDate(e.target.value)} ></input>
    </div>

    <div className={classes.inputContainer}>
    <span> Check Out Date  <FaUmbrellaBeach className={classes.icon}/></span>
    <input type ="date" placeholder='enter date...' onChange={(e)=>setEndDate(e.target.value)} ></input>
    </div>

    <button onClick={handleSearch} className={classes.bookBtn}> Search</button>

    </div>

   </div>
   
   
   About</section>
  )
}

export default About
