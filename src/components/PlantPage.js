import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  //console.log(plantsArray)
  useEffect(()=>{
    //below = a GET request
    fetch('http://localhost:6001/plants')
    .then((r)=>r.json())
    .then((data)=>{
      setPlantsArray(data)
    })
  }, [])
  


  const filteredPlants = plantsArray.filter((plant)=>{
        return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
          })

  //add handleAddPlant
  function handleAddPlant(newPlant){
    const newPlantsArray = [...plantsArray, newPlant];
    setPlantsArray(newPlantsArray)
  }
  //different way to write handleAddPlant::
  //function handleAddPlant(newPlant){
    //setPlantsArray((oldPlants)=> [...oldPlants, newPlant])
  //}
  
  function handleDeletePlant(id){
    const newPlantsArray= plantsArray.filter((plants)=> plants.id !== id);
    setPlantsArray(newPlantsArray)
  }

  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants}  onDelete={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;





