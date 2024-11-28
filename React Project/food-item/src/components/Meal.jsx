import { useState,useEffect} from "react"

const Meal = ({meal}) => {

  const[imageUrl,setImageUrl]=useState("");
  useEffect(()=>{
    fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=3fd6e2c071374052a58b56b327e0c09b&includeNutrition=false`
        )
        .then((response)=>response.json())
        .then((data)=>{
          setImageUrl(data.image)
        })
        .catch(()=>{
          console.log("error");
        })
      },[meal.id])


  return (
    <div className="p-2">
      <h1 className="font-bold text-purple-700">{meal.title}</h1>
      <img  className="rounded-xl w-30 h-30" src={imageUrl} alt="recipe"/>
      <ul>
        <li>Preparation Time : {meal.readyInMinutes} minutes</li>
        <li>Number of servings : {meal.servings}</li>
      </ul>
      <a  className="text-purple-500" href={meal.sourceUrl}>Go To receipe</a>
    </div>
  )
}

export default Meal
