import React, { useState } from 'react';
import './Card.css'
import axios from "axios"
import { toast, Toaster } from 'sonner';
const Card = (props) => {


const uploadImageToCloudinary = async (file) => {
  console.log("🔵 Starting Cloudinary upload…");
  console.log("📁 File received:", file);

  if (!file) {
    console.error("❌ No file provided to uploadImageToCloudinary");
    toast.error("No file selected");
    return null;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset");

    console.log("📤 Sending upload request to Cloudinary...");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dtpjdj7m4/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log("🟡 Cloudinary raw response:", response);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Cloudinary upload failed. Status:", response.status);
      console.error("🔍 Cloudinary error response:", errorText);
      toast.error("Cloudinary upload failed");
      return null;
    }

    const data = await response.json();
    console.log("🟢 Cloudinary upload success:", data);

    if (!data.secure_url) {
      console.error("❌ secure_url missing in Cloudinary response:", data);
      toast.error("Cloudinary did not return an image URL");
      return null;
    }

    console.log("✅ Final image URL:", data.secure_url);
    return data.secure_url;

  } catch (error) {
    console.error("💥 Exception thrown during Cloudinary upload:");
    console.error(error);
    toast.error("Unexpected error — check console");
    return null;
  }
};



   

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
      toast.success("recepie has been deleted")
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
     toast.success("recepie has been modified")
      
   }

  return (
    <>
    
   
   <div style={{ animation: `fadeInUp 0.5s ease-out forwards`, ...props.style }} className='box flex flex-col w-64  min-h-[280px] bg-white p-2 text-center rounded-sm transform transition hover:scale-105 animate-fadeInUp'>
   <div className=' bg-no-repeat bg-cover w-[240px] h-[165px] rounded-sm bg-center' style={{ backgroundImage: `url(${image})` }}></div>

   <div className='flex flex-col'>
      <h6>{title}</h6>
      <p className='text-sm'>{country}</p>
      <div className='flex justify-center gap-[25px] mt-2'>
         <button className='bg-[#eeeded] hover:bg-gray-300 txt text-black w-[80px] h-[30px]  rounded' onClick={() =>setEditPop(true)}>Edit</button>
         <button className='bg-red-500 hover:bg-red-600 text-white txt w-[80px] h-[30px]  rounded' onClick={() =>setDeletePop(true)}>Delete</button>
      </div>
   </div>
</div>


    {DeletePop && (
      <>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-40"></div>
      <div className=' fixed top-[200px] left-[420px]    w-[350px] h-[250px] rounded-md box bg-white flex  flex-col text-start p-4 z-50 '>
          <h3>Are you sure you want to delete</h3>
          <h6 className='pt-[20px]'>{title} from {country}</h6>
          <div className='flex justify-center gap-[100px] place-content-around place-content-between mt-[50px]'>
            <button className='bg-[#eeeded] hover:bg-gray-300 text-black w-[100px] rounded  h-[40px]' onClick={() =>setDeletePop(false)} >Cancel</button>

            <button className='bg-red-500 hover:bg-red-600 text-white w-[100px] rounded  h-[40px]' onClick={() =>Delete(props.id)}>Delete</button>

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
        {/* Image Upload */}
<input
  type="file"
  accept="image/*"
  className="w-full p-2 border rounded"
  onChange={ async (e) => {
    const file = e.target.files[0];
    if (!file) return; // user canceled selection → do nothing

    const url = await uploadImageToCloudinary(file);

    if (url) {
      setImage(url);
    } else {
      toast.error("Image upload failed — keeping old image");
    }
  }}
/>



        {/* Ingredients */}
        <div>
          <label className="text-sm font-medium">Ingredients (comma separated)</label>
          <textarea value={ingredients?.join(', ')} className="w-full p-2 border rounded" rows={3} onChange={(e) => setIngredients(e.target.value.split(',').map(item => item.trim()))}></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="text-sm font-medium">Instructions (comma separated)</label>
          <textarea value={instructions?.join(', ')} className="w-full p-2 border rounded" rows={5} onChange={(e) => setInstructions(e.target.value.split(',').map(item => item.trim()))}></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className='bg-[#eeeded] hover:bg-gray-300 text-black w-[100px] rounded py-2'
            onClick={() => setEditPop(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 text-white w-[100px] rounded py-2'
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
