import React,{useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  })

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((newPlant)=>onAddPlant(newPlant));

  }

  function handleChange(e){
    setFormData({
      ...formData,
      //the name in 'e.target.name' is referencing the name attribute inside the <input/> tag
      [e.target.name] : e.target.value
    })
  }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" id="image" name="image" value={formData.image}  onChange={handleChange} placeholder="Image URL" />
        <input type="number" id="number" name="price" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
