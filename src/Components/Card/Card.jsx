import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className='Card bg-gray-800 rounded mb-5 p-5'>
        <img src={image} alt="image" />
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, corporis!</p>
        <button className="btn">View</button>
    </div>
  )
}

export default Card;