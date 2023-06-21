import React, { useEffect, useState } from 'react'
import './Mobiles.css'

function Mobiles(props) {
  // console.log(props)
  return (
    <div className='desktopMobilesSection'>
        {props.desktopMobiles.map((card, index) => (
            <div className='mobileSubSection' key ={index}>
                <img src={card} />
            </div>     
        ))}

    </div>
  )
}

export default Mobiles