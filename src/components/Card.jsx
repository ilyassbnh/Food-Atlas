import React from 'react'
import './Card.css'
import food from '../data/app.json'
export default function Card(props) {
  return (
    <div>
        <div className='card' >
          <div className='img'></div>
          <h4 className='title'>Tajine</h4>
        <div className='flex-btn'>
               <button className='edit-btn'>Edit</button> 
               <button className='delete-btn'>Delete</button>  

        </div>
          

        </div>

    </div>
  )
}
