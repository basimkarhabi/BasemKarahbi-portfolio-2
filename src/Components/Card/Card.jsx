import React from 'react'
import './Card.css'

function Card({emoji,heading,detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="emoji" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card