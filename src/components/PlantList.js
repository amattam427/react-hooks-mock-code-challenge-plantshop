import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete}) {

  return (
    <ul className="cards">
      {plants.map((plant)=>
          <PlantCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            onDelete={onDelete}
          /> 
      )}
    </ul>
  );
}

export default PlantList;


//Another way to pass the info to Plant Card component:: <PlantCard key={plant.id}   {...plant}/>
    //From here we can go to the PlantCard component and desctructure the props the same way.