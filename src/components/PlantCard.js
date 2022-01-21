import React,{useState} from "react";

function PlantCard({id, name, image, price, onDelete}) {
  const[isInStock, setIsInStock] = useState(false)


  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });

    onDelete(id);
  }

  function handleClick(){
    setIsInStock((isInStock)=>!isInStock)
  }

  
  

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleDeleteClick}>Delete Plant</button>
      <button onClick={handleClick} className="primary">{isInStock ? 'Out of Stock' : 'In Stock' }</button>
    </li>
  );
}

export default PlantCard;
