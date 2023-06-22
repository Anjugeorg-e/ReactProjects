import React, { useEffect, useState } from 'react'
import './Mobiles.css'

function Mobiles(props) {
  return (
    <div className='desktop-mobiles-section'>
        {props.desktopMobiles.map((card, index) => (
            <div className='mobile-sub-section' key ={index}>
                <img src={card} alt='mobiles' />
            </div>     
        ))}

    </div>
  )
}

export default Mobiles