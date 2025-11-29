import React, { useState } from 'react';
import './Card.css'
import axios from "axios"
const Card = (props) => {

   

   const [EditPop,setEditPop] = useState(false)
   const [DeletePop,setDeletePop] = useState(false)

   const [title,setTitle] = useState(props.title)
   const [category_id,setCategoryId] = useState(props.category_id)
   const [country,setCountry] = useState(props.country)
    const [description,setDescription] = useState(props.description)
    const [prep_time,setPrepTime] = useState(props.prep_time)
    const [cook_time,setCookTime] = useState(props.cook_time)
    const [servings,setServings] = useState(props.servings)
    const [difficulty,setDifficulty] = useState(props.difficulty)
    const [image,setImage] = useState(props.image)
    const [ingredients,setIngredients] = useState(props.ingredients)
    const [instructions,setInstructions] = useState(props.instructions)

   const Delete = (id) => {
    axios.delete(`http://localhost:3000/recipes/${id}`)
      .then((res) => {
        console.log("deleted", res)
      })
      .catch((err) => {
        console.log(err)
      })
      setDeletePop(false)
   }

   const Edit = (id) =>{
    axios.put(`http://localhost:3000/recipes/${id}`,{
      title : title,
     category_id : category_id,
     country : country,
      description : description,
      prep_time : prep_time,
      cook_time : cook_time,
      servings : servings,
      difficulty : difficulty,
      image : image,
      ingredients : ingredients,
      instructions : instructions
    }
    ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
     setEditPop(false)
      
   }

  return (
    <>
    
   
   <div style={{ animation: `fadeInUp 0.5s ease-out forwards`, ...props.style }} className='box flex flex-col w-64 h-[280px] bg-white p-2 text-center rounded-sm transform transition hover:scale-105 animate-fadeInUp'>
   <div className='bg-[url(/public/tajine.jpg)] bg-no-repeat bg-cover w-[240px] h-[165px] rounded-sm'></div>

   <div className='flex flex-col'>
      <h6>{props.title}</h6>
      <p className='text-sm'>{props.country}</p>
      <div className='flex justify-center gap-[10px] mt-2'>
         <button className='bg-[#eeeded] txt w-[100px]  rounded' onClick={() =>setEditPop(true)}>Edit</button>
         <button className='bg-red-500 text-white txt w-[100px]  rounded' onClick={() =>setDeletePop(true)}>Delete</button>
      </div>
   </div>
</div>


    {DeletePop && (
      <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>
      <div className=' fixed top-[200px] left-[420px]    w-[350px] h-[250px] rounded-md box bg-white flex  flex-col text-start p-4 z-50 '>
          <h3>Are you sure you want to delete</h3>
          <h6 className='pt-[20px]'>{props.title} from {props.country}</h6>
          <div className='flex justify-center gap-[100px] place-content-around place-content-between mt-[50px]'>
            <button className='bg-[#eeeded] text-black w-[100px] rounded' onClick={() =>setDeletePop(false)} >Cancel</button>

            <button className='bg-red-500 text-white w-[100px] rounded' onClick={() =>Delete(props.id)}>Delete</button>

          </div>
      </div>
      </>
    )}

    {EditPop && (
  <>
    {/* Overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>

    {/* Popup */}
    <div className='fixed top-[100px] left-[50%] translate-x-[-50%] w-[500px] max-h-[80vh] overflow-y-auto rounded-md box bg-white flex flex-col p-6 z-50 shadow-lg'>
    <div className='flex place-content-between '>
      <h3 className="text-xl font-semibold mb-4 text-center ">Edit Recipe</h3>
      <button className='bg-[#eeeded] text-black w-[100px] rounded h-[40px]' onClick={() => setEditPop(false)}>Cancel</button>
    </div>

      {/* Recipe Form */}
      <form className="flex flex-col gap-3">
        {/* Title */}
        <div>
          <label className="text-sm font-medium">Title</label>
          <input type="text" value={title} className="w-full p-2 border rounded" onChange={(e) => setTitle(e.target.value)  } />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium">Category ID</label>
          <input type="text" value={category_id} className="w-full p-2 border rounded" onChange={(e) => setCategoryId(e.target.value)} />
        </div>

        {/* Country */}
        <div>
          <label className="text-sm font-medium">Country</label>
          <input type="text" value={country} className="w-full p-2 border rounded" onChange={(e) => setCountry(e.target.value)} />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea value={description} className="w-full p-2 border rounded" rows={3} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        {/* Prep Time / Cook Time / Servings */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="text-sm font-medium">Prep Time</label>
            <input type="text" value={prep_time} className="w-full p-2 border rounded" onChange={(e) => setPrepTime(e.target.value)} />
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium">Cook Time</label>
            <input type="text" value={cook_time} className="w-full p-2 border rounded" onChange={(e) => setCookTime(e.target.value)} />
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium">Servings</label>
            <input type="number" value={servings} className="w-full p-2 border rounded" onChange={(e) => setServings(e.target.value)} />
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label className="text-sm font-medium">Difficulty</label>
          <select value={difficulty} className="w-full p-2 border rounded" onChange={(e) => setDifficulty(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="text-sm font-medium">Image URL</label>
          <input type="text" value={image} className="w-full p-2 border rounded" onChange={(e) => setImage(e.target.value)} />
        </div>

        {/* Ingredients */}
        <div>
          <label className="text-sm font-medium">Ingredients (comma separated)</label>
          <textarea value={ingredients?.join(', ')} className="w-full p-2 border rounded" rows={3} onChange={(e) => setIngredients(e.target.value.split(',').map(item => item.trim()))}></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="text-sm font-medium">Instructions (one per line)</label>
          <textarea value={instructions?.map(i => i.text).join('\n')} className="w-full p-2 border rounded" rows={5} onChange={(e) => setInstructions(e.target.value.split('\n').map(text => ({ text })))}></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className='bg-[#eeeded] text-black w-[100px] rounded py-2'
            onClick={() => setEditPop(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className='bg-blue-600 text-white w-[100px] rounded py-2'
            onClick={() => Edit(props.id)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </>
)}


     </>
  );
}

export default Card;
