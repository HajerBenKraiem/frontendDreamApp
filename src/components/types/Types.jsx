import React, { useEffect } from 'react'
import classes from './types.module.css'
import { Link } from 'react-router-dom'

import { useState } from "react"
//import { useEffect } from "react"
import img from '../../assets/img2.jpg'

const Types = () => {
  const [types, setTypes] = useState([]); 
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGRjNGQwYjJkMjc3ZGZjZTNmYTIyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjE3ODM4NH0.HpDZCoIktLwPPXbPbiR2NKdumqJcgk8kBtEqoUfXf8o'
  //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MGRjNGQwYjJkMjc3ZGZjZTNmYTIyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjE3ODM4NH0.HpDZCoIktLwPPXbPbiR2NKdumqJcgk8kBtEqoUfXf8o'
  useEffect(() =>{
    const fetchTypes=async()=>{
      try {
        const res= await fetch('http://localhost:5000/room/find/types',{
          Headers:{
            'Authorization': `Bearer ${token}`
           }
        })
        
        const types =await res.json() 
        console.log(types) 
        setTypes(types)      
      } catch (error) {
        console.error(error)
      }

    }
    fetchTypes()
  }, [setTypes])

  console.log(Object.entries(types))
  return (
   <section id ="services" className={classes.container}>

    <div className={classes.wrapper}>
      <div className={classes.titles}>
         <h5 className={classes.subtitle}>Residing Place</h5>
         <h2 className={classes.title}>what type of place you want</h2>
      </div>
      <div className={classes.types}>
      {Object.entries(types).map(({ key, value }) => (
  <Link to={`/types/${key}`} key={key + value} className={classes.type}>
    <div className={classes.imgWrapper}>
      <img src={img} alt="" />
    </div>
    <span>{value} {key}</span>
  </Link>
))}

      </div>
    </div>
   </section>
  )
}

export default Types
