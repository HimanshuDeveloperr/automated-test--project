import React, { useState } from 'react'

const Greetings = () => {
    const [clicked,setClicked]=useState(false)

    const clickHandler=()=>{
        setClicked(true)
    }
  return (
    <div>
        <h1>Hello World!</h1>
        {!clicked && <p>false</p>} 
        {clicked && <h2>true</h2>}
        <button onClick={clickHandler}>clicked!</button>
    </div>
  )
}

export default Greetings