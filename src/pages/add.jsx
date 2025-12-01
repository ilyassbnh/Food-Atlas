import React from 'react'
import { useState } from 'react'
import './add.css'
import axios from 'axios'
export default function Add() {
    const [input, setInput] = useState({name:"", category:"", image:"", ingredients:"", description:"", steps:""})
    function handleChange(e){
        const {name, value} = e.target
        if(name==="image"){
            setInput({...input, [name]: e.target.files[0]})
        } else {
            setInput({ ...input, [name]: value})
        }
    }
    function handsubmit(){
        axios.post("http://localhost:3000/recipes",input)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

  return (
    <div>
       <form className='formule'>
        
            <label>name</label>
                <input type="text"   name="name" value={input.name} onChange={handleChange}    />
            
            <label>Country / category:</label>
                <input type="text"   name="category" value={input.category} onChange={handleChange}  />
            <label>ingredients: </label>
                <input type="text" name='ingredients' value={input.ingredients} onChange={handleChange} />
           
            <label>Description:</label>
                <input type="text" name='description' value={input.description} onChange={handleChange} />
            
            <label>Steps: </label>
                <input type="text" name='steps' value={input.steps} onChange={handleChange} />
            <label>Image:</label>
                <input type="file"  name='image' onChange={handleChange}/>
            <button  className="Btn" type="submit"  onClick={handsubmit}>Add</button>
       </form>
    </div>
  )
}

