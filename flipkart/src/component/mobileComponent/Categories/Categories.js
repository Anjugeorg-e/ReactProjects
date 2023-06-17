import React, { useEffect, useState } from 'react'
import './Categories.css';

function Categories(props) {

    return (
    <div className='cateoriesContainer'>
        {props.categories.map((card, index) => (
            <span className='categoriesCards' key={index}>
                <img src={card.image} />
            </span>
        ))}
    </div>
  )
}

export default Categories