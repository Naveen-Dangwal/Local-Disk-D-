import { useState } from 'react'
import './App.css'
import MealList from './components/MealList';

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories,setCalories]=useState(2000);

  const handleChange=(e)=>{
    setCalories(e.target.value);
  }

  const handleClick=()=>{
    fetch( `https://api.spoonacular.com/mealplanner/generate?apiKey=3fd6e2c071374052a58b56b327e0c09b&timeFrame=day&targetCalories=${calories}`

    ).then((response)=>response.json())
    .then((data)=>{
      setMealData(data);
      console.log(data);
    })
    .catch(()=>{
      console.log("error");
    });


  }
  return (
    <>
    <center>
    <section className="controls">
    <h1 className='font-bold text-purple-800 text-4xl my-10'>Food Planner</h1>
    <input  className="border w-30 p-3 rounded-xl" type='number' placeholder='enter the colories' onChange={handleChange}/>
    <button className='bg-purple-800 text-white mx-3 p-1 rounded-lg font-bold'  onClick={handleClick}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData={mealData}/>}
    </section>
    
    </center>
    </>
  )
}

export default App
