import React, { useState } from 'react';
import food from '../../data/app.json'
import Card from '../../components/Card';
import './ManageRecipes.css'
import { RiHomeLine } from "react-icons/ri"
import CardAdmin from '../../components/CardAdmin';
import { Link } from 'react-router-dom';
const ManageRecipes = () => {

  const [search,setSearch] = useState("")
  return (
    <div className='bg-white h-[100vh] overflow-auto' >

    
    <div className='pl-[90px] pr-[90px]'>
    <div className=' bg-[#eeeded] pl-[15px] pr-[15px] pt-[15px] ' >
      <div className='flex flex-col gap-[30px]'>
        <div className='flex place-content-between'>
          <input type="text" placeholder='Search By Name' onChange={(e) => setSearch(e.target.value)} className='w-[350px] p-[5px] bg-white rounded '   />
          <div className='flex gap-[10px]'>
               <Link to="/" className="bg-green-600 hover:bg-green-700 text-white w-[150px] txt2 rounded py-2 text-center flex items-center justify-center no-line" >Go To Home</Link>
               <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white w-[150px] txt2 rounded py-2 text-center flex items-center justify-center no-line ">Add Recipes</Link>

          </div>
          
        </div>
        <div className='h-px w-full bg-black '/>
          
      
       <div className='grid grid-cols-4 gap-[30px]'>
            {food.recipes.filter((index)=>{
              if(search ===""){
                return index
              }else if(index.title.toLowerCase().includes(search.toLowerCase())){
                return index
              }
            })
            
            
            
            
            .map((index) => {
              return(
                <CardAdmin title={index.title}
                key={index.id}
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
  </div>
  );
}

export default ManageRecipes;
