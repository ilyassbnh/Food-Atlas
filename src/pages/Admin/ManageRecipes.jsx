import React, { useState } from 'react';
import food from '../../data/app.json'
import Card from '../../components/Card';
import './ManageRecipes.css'
import { RiHomeLine } from "react-icons/ri"
const ManageRecipes = () => {

  const [search,setSearch] = useState("")
  return (
    <div className='pl-[90px] pr-[90px]'>
    <div className=' bg-[#eeeded] pl-[15px] pr-[15px] pt-[15px] ' >
      <div className='flex flex-col gap-[30px]'>
        <div className='flex place-content-between'>
          <input type="text" placeholder='Search By Name' onChange={(e) => setSearch(e.target.value)} className='w-[350px] p-[5px] bg-white rounded '   />
          <div className='flex gap-[10px]'>
                 <button className='bg-green-600 hover:bg-green-700 text-white w-[150px] txt2 rounded ' >Exit Dashboard</button>
                 <button className='bg-blue-600 hover:bg-blue-700 text-white w-[150px] txt2 rounded'>Add Recettes</button>
          </div>
          
        </div>
        <div className='h-px w-full bg-black '/>
          
      
       <div className='grid grid-cols-4 gap-[10px]'>
            {food.recipes.filter((index)=>{
              if(search ===""){
                return index
              }else if(index.title.toLowerCase().includes(search.toLowerCase())){
                return index
              }
            })
            
            
            
            
            .map((index) => {
              return(
                <Card title={index.title}
                 country={index.country}
                  id={index.id}
                   style={{ animationDelay: `${index * 150}ms` }}
                   category_id={index.category_id}
                   description={index.description}
                   prep_time={index.prep_time}
                   cook_time={index.cook_time}
                   servings={index.servings}
                   difficulty={index.difficulty}
                   image={index.image}
                   ingredients={index.ingredients}
                   instructions={index.instructions} 
                />
              )
              
            })}
       </div>
       </div>
    </div>
    </div>
  );
}

export default ManageRecipes;
