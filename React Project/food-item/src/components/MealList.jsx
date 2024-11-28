import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  return (
    <>
      <div className="m-4">
        <h1>Macros</h1>
        <ul>
          <li>Calories : {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates : {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Protein : {nutrients.protein.toFixed(0)}</li>
          <li>Fats : {nutrients.fat.toFixed(0)}</li>
        </ul>
      </div>

      <div className="flex">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </>
  );
}
