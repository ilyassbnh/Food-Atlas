import React from 'react'
import Card from '../../components/Card'
import food from '../../data/app.json'
import SideBar from '../../components/SideBar'
import "./ManageRecipes.css"
export default function ManageRecipes() {
  return (
    <div className='flex'>
      <SideBar/>
         <div className='grid'>
              {food.recipes.map((index) => {
             return(
             
                <Card/>
              
               
          )
        })}
         </div>
        
    </div>
  )
}
