import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
//   const [plantsArray, setPlantsArray] = useState([]);
//   //console.log(plantsArray)
// //the const and useEffect could have been done in PlantPage componenet instead. 
//   useEffect(()=>{
//     //below = a GET request
//     fetch('http://localhost:6001/plants')
//     .then((r)=>r.json())
//     .then((data)=>{
//       setPlantsArray(data)
//     })
//   }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
