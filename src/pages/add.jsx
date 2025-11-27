import React from 'react'
import { useState } from 'react'
import './add.css'
export default function Add() {
    const [input, setInput] = useState({})
    function handleChange(e){
        const {name, value} = e.target
        if(name==="image"){
            setInput({...prev, [name]: e.target.files[0]})
        } else {
            setInput({...prev, [name]: value})
        }
    }
  return (
    <div>
       <form className='formule'>
        
            <label>name</label>
                <input type="text"   name="name" value={input.name} onChange={handleChange}    />
            
            <label>Country / category:</label>
                <input type="text"   name="category" value={input.category} onChange={handleChange}  />
            
            <label>Image:</label>
                <input type="file"  name='image' value={handleChange}/>
            
            <label>ingredients: </label>
                <input type="text" name='ingredients' value={input.ingredients} onChange={handleChange} />
           
            <label>Description:</label>
                <input type="text" name='description' value={input.description} onChange={handleChange} />
            
            <label>Steps: </label>
                <input type="text" name='steps' value={input.steps} onChange={handleChange} />
            
            <button  className="Btn" type="submit">Add</button>
       </form>
    </div>
  )
}

