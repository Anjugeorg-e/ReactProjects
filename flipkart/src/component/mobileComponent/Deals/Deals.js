import React, { useEffect, useState } from 'react'
import './Deals.css';

function Deals(props) {
  return (
    <div className='dealsContainer'>
        {props.offer.map((card, index) => (
            <span className='dealsCards' key={index}>
                <img src={card.image} />
            </span>
        ))}
    </div>
  )
}

export default Deals