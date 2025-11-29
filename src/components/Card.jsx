import React, { useState } from 'react'
import './Card.css'
import food from '../data/app.json'
import axios from 'axios'
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";


export default function Card(props) {
  const [deletePop,setDeletePop] = useState(false)
  const [EditPop,setEditPop] = useState(false)

  const [title,setTitle] = useState(props.title)
  const [category_id,setCategory_id] = useState(props.category_id)
   
  const [country,setContry] = useState(props.country)
  const [description,setDescription] = useState(props.description)
  const [prep_time,setPrep_time] = useState(props.prep_time)
  const [cook_time,setCook_time] = useState(props.cook_time)
  const [servings,setServings] = useState(props.servings)
  const [difficulty,setDifficulty] = useState(props.difficulty)

  const EditPopup = (id) => {
    axios.patch(`http://localhost:3000/recipes/${id}`,{
      title : title,
      category_id : category_id,
      country : country,
      description : description,
      prep_time : prep_time,
      cook_time : cook_time,
      servings : servings,
      difficulty : difficulty
    }
    ).then((res)=>{
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
    setEditPop(false)

  }

  const showDeletePop = () => {
      setDeletePop(true)
  }
  const DeleteR = (id) => {
  axios.delete(`http://localhost:3000/recipes/${id}`)
    .then((res) => {
      console.log("Deleted:", res.data);
    })
    .catch((err) => {
      console.error(err);
    });

    setDeletePop(false)
};

  return (
    <div>
      
      
           <div className='card' >
          <div className='img'></div>
          <h4 className='title'>{props.title}</h4>
        <div className='flex-btn'>
               <button  className='edit-btn' onClick={() =>setEditPop(true)}>
                <FiEdit className='edit-icon' size={20} />
                <span className="edit-text">Edit</span>
               
               </button> 
               <button  className='delete-btn' onClick={() => showDeletePop()}>
                
                <FiTrash className='delete-icon' size={20} />
                <span className='delete-text'>Delete</span>
                </button>  

        </div>
        </div>

       {deletePop && (
  <div className="delete-popup">
    <div className="delete-popup-content">
      <h2>Are you sure you want to delete this item?</h2>

      <div className="delete-popup-buttons">
        <button className="cancel-btn" onClick={() => setDeletePop(false)} >Cancel</button>
        <button className="confirm-btn"  onClick={() => DeleteR(props.id)} >Delete</button>
      </div>
    </div>
  </div>
)}

{EditPop && (
  <div className="edit-popup">
    <div className="edit-popup-content">
      <h2>Edit Recipe</h2>

      <div className="edit-form">

        <label>Title</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Category ID</label>
        <input 
          type="text" 
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)}
        />


        <label>Country</label>
        <input 
          type="text" 
          value={country}
          onChange={(e) => setContry(e.target.value)}
        />

        <label>Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Prep Time</label>
        <input 
          type="text" 
          value={prep_time}
          onChange={(e) => setPrep_time(e.target.value)}
        />

        <label>Cook Time</label>
        <input 
          type="text" 
          value={cook_time}
          onChange={(e) => setCook_time(e.target.value)}
        />

        <label>Servings</label>
        <input 
          type="number" 
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <label>Difficulty</label>
        <input 
          type="text" 
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />

        {/* <label>Image URL</label>
        <input 
          type="text" 
          
        /> */}

      </div>

      <div className="edit-popup-buttons">
        <button className="cancel-btn" onClick={() => setEditPop(false)}>Cancel</button>
        <button className="save-btn" onClick={() => EditPopup(props.id)} >Save</button>
      </div>

    </div>
  </div>
)}





      
       
     


     
          

        

    </div>
  )
}
