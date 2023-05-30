import React, { useState } from 'react'

const Greetings = () => {
    const [clicked,setClicked]=useState(false)

    const clickHandler=()=>{
        setClicked(true)
    }
  return (
    <div>
        <h1>Hello World!</h1>
        {clicked && <p>true</p>}
        {!clicked && <p>false</p>} 
        <button onclick={clickHandler}>clicked!</button>
    </div>
  )
}

export default Greetings