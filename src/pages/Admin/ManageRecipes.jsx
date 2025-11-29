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
             
                <Card title={index.title} category_id={index.category_id} country={index.country} description={index.description} prep_time={index.prep_time} cook_time={index.cook_time} servings={index.servings} difficulty={index.difficulty}   id={index.id}/>
              
               
          )
        })}
         </div>
        
    </div>
  )
}
